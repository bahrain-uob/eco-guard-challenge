import datetime
import boto3
import json
import os
 
def lambda_handler(event, context):
    # plate_number = event.get('plate_number')
    # current_date = datetime.datetime.now().date().isoformat()  # Get the current date in ISO 8601 format YYYY-MM-DD
    # print(current_date)
 
    # Connect to the database
    client = boto3.client('rds-data')
   
    # Retrieve the exported values using the AWS SDK
    cfn_client = boto3.client('cloudformation')
    response = cfn_client.describe_stacks(StackName='yomnaDev-codecatalyst-sst-app-DBStack')  ######## change the stack name #########
    outputs = response['Stacks'][0]['Outputs']
   
    dbSecretArn = ''
    dbClusterARN = ''
   
    for output in outputs:
       if output['OutputKey'] == 'SSTMetadata':
        sst_metadata = output['OutputValue']
        # Parse the SSTMetadata JSON string to extract the required information
        sst_metadata_dict = json.loads(sst_metadata)
        for item in sst_metadata_dict['metadata']:
            if item['id'] == 'ExistingDatabase':    ####in prod 'MainDatabase'   in dev 'ExistingDatabase'
                dbSecretArn = item['data']['secretArn']
                dbClusterARN = item['data']['clusterArn']
            if item['id'] ==  'MainDatabase':    
                dbSecretArn = item['data']['secretArn']
                dbClusterARN = item['data']['clusterArn']
        break  # Exit the loop once the required information is found
 
           
    #print("dbSecretArn",dbSecretArn)
    #print("dbClusterIdentifier",dbClusterARN)    
 
   
    # Query the database if ARNs are not empty
    # if dbSecretArn and dbClusterARN:
    #     #sql = "SELECT * FROM registered_cars WHERE plate_number = '343434'" #for testing
    #     sql=f"SELECT * FROM registered_cars WHERE plate_number = '{plate_number}'"
       
    #     response = client.execute_statement(
    #         resourceArn=dbClusterARN,
    #         secretArn=dbSecretArn,
    #         database='maindb',
    #         sql=sql
    #     )
       
    #     # Check if the car is registered
    #     if len(response['records']) > 0:
    #         registration_date_expiration = response['records'][0][3]['stringValue']  # registration_date_expiration is in the fourth column
    #         if current_date > registration_date_expiration:
    #             return "The car is not registered."
    #         else:
    #             return "The car is registered."
    #     else:
    #         return "The car is not registered."
    # else:
    #     return "ARNs are empty or not found."
 
    # Process each record in the DynamoDB stream
    for record in event['Records']:
        if record['eventName'] == 'INSERT':
            license_plate_number = record['dynamodb']['NewImage']['license_plate_number']
           
            # Query the RDS database
            if dbSecretArn and dbClusterARN:
                sql = f"SELECT * FROM registered_cars WHERE plate_number = '{license_plate_number}'"
               
                response = client.execute_statement(
                    resourceArn=dbClusterARN,
                    secretArn=dbSecretArn,
                    database='maindb',
                    sql=sql
                )
               
                # Check if the car is registered
                if len(response['records']) > 0:
                    registration_date_expiration = response['records'][0][3]['stringValue']
                    current_date = datetime.datetime.now().date().isoformat()
                    if current_date > registration_date_expiration:
                        print(f"The car with plate number {license_plate_number} is not registered.")
                    else:
                        print(f"The car with plate number {license_plate_number} is registered.")
                else:
                    print(f"The car with plate number {license_plate_number} is not registered.")