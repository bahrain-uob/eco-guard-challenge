import json
import time
import datetime
import random
import string
from util import format_license
import os
import boto3

def random_string():
    return ''.join(random.choice(string.ascii_uppercase + string.digits) for _ in range(10))

region_name = 'us-east-1'

# define clients
s3_client = boto3.client('s3', region_name=region_name)
textract_client = boto3.client('textract', region_name=region_name)

def lambda_handler(event, context):
    tic = time.time()
   
    # get object
    bucket_name = event['Records'][0]['s3']['bucket']['name']
    filename = event['Records'][0]['s3']['object']['key']
   
    print(filename, bucket_name)
   
    car_id_ = int(filename.split('_')[0])
   
    # text detection (initialize textract job)
    s3_object = {'Bucket': bucket_name, 'Name': filename}
   
    while True:
        try:
            response = textract_client.start_document_text_detection(
                DocumentLocation={'S3Object': s3_object}
                )
            break
        except Exception:
            time.sleep(1)
   
    job_id = response['JobId']
    print(job_id)
   
    while True:
        try:
            # get results from textract job
            response = textract_client.get_document_text_detection(JobId=job_id)
            status = response['JobStatus']
            if status in ['SUCCEEDED', 'FAILED']:
                break
        except Exception:
            time.sleep(1)
   
    print(status)
   
    # verify license number complies format
    if status == 'SUCCEEDED':
        text = ''
        for item in response['Blocks']:
            if item['BlockType'] == 'LINE':
                text += item['Text']
               
        text = text.upper().replace(' ', '').replace('\n', '')
        print(text)
        text=format_license(text)
        license_plate_number_ = text
       
       
    else:
        # TODO: implement !
        pass

    # Calculate the local time in Bahrain
    current_utc_time = datetime.datetime.utcnow()
    bahrain_offset = datetime.timedelta(hours=3)  # Bahrain is at UTC+3
    current_date = (current_utc_time + bahrain_offset).strftime('%Y-%m-%d %H:%M:%S')
    
    # Set latitude and longitude with decimals
    latitude = 26.054315
    longitude = 50.537455
    
    # Connect to the database and execute SQL query
    client = boto3.client('rds-data')
    cfn_client = boto3.client('cloudformation')
    response = cfn_client.describe_stacks(StackName='prod-codecatalyst-sst-app-DBStack')
    outputs = response['Stacks'][0]['Outputs']
 
    dbSecretArn = ''
    dbClusterARN = ''
 
    for output in outputs:
        if output['OutputKey'] == 'SSTMetadata':
            sst_metadata = output['OutputValue']
            sst_metadata_dict = json.loads(sst_metadata)
            for item in sst_metadata_dict['metadata']:
                if item['id'] == 'ExistingDatabase':
                    dbSecretArn = item['data']['secretArn']
                    dbClusterARN = item['data']['clusterArn']
                if item['id'] == 'MainDatabase':
                    dbSecretArn = item['data']['secretArn']
                    dbClusterARN = item['data']['clusterArn']
            break
 
    if dbSecretArn and dbClusterARN:
        sql = "INSERT INTO violations (plate_number, type, latitude, longitude, timestamp, image_key, status) VALUES (:license_plate_number_, :type, :latitude, :longitude, :timestamp, :image_key, :status)"
        response = client.execute_statement(
            resourceArn=dbClusterARN,
            secretArn=dbSecretArn,
            database='maindb',
            sql=sql,
            parameters=[
             {'name': 'car_id', 'value': {'longValue': 1}},
             {'name': 'license_plate_number_', 'value': {'stringValue': license_plate_number_}},
             {'name': 'type', 'value': {'stringValue': 'Yellow Lane'}},
             {'name': 'longitude', 'value': {'doubleValue': longitude}},  
             {'name': 'latitude', 'value': {'doubleValue': latitude}},  
             {'name': 'timestamp', 'value': {'stringValue': current_date}},
             {'name': 'image_key', 'value': {'stringValue': filename}},
             {'name': 'status', 'value': {'stringValue': 'review'}},
        ]
    )

    return {
        'statusCode': 200,
        'body': json.dumps('Data inserted into RDS successfully!')
    }
