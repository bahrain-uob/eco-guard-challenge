import boto3
import json
import os
from datetime import datetime

def lambda_handler(event, context):
    # Connect to the database
    client = boto3.client('rds-data')
    # Retrieve the exported values using the AWS SDK
    cfn_client = boto3.client('cloudformation')
    response = cfn_client.describe_stacks(StackName='prod-codecatalyst-sst-app-DBStack')  ######## change the stack name #########
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
       
    if dbSecretArn and dbClusterARN:
        sql="SELECT * FROM violations"
        response = client.execute_statement(
             resourceArn=dbClusterARN,
             secretArn=dbSecretArn,
             database='maindb',
             sql=sql
        )
        if len(response['records']) > 0:
            violationData = response['records']
            total_violations=0
            yellow_lane=0
            unregisterd_car=0
            todays_violations=0
            today_date = datetime.now().date()
            #print('today is',today_date)
            for row in violationData :
                total_violations+=1
                if next(iter(row[2].values()))=='unregisterd car':
                   unregisterd_car+=1
                elif next(iter(row[2].values()))=='Yellow Lane':
                    yellow_lane+=1
                
                timestamp= next(iter(row[5].values()))
                datetime_obj = datetime.strptime(timestamp, "%Y-%m-%d %H:%M:%S")
                date_only = datetime_obj.date()
                #print('violation date:',date_only)
                if  date_only == today_date:
                    todays_violations+=1
                #print("violation:",next(iter(row[2].values())))
 
            return {'violationData': violationData, 'total': total_violations,'yellow_lane':yellow_lane,'unregisterd_car':unregisterd_car,'todays_violations':todays_violations}
 
    
    
 
