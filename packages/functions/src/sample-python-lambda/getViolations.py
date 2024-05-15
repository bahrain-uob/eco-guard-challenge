import boto3
import json
import os
 
def lambda_handler(event, context):
    # Connect to the database
    client = boto3.client('rds-data')
    # Retrieve the exported values using the AWS SDK
    cfn_client = boto3.client('cloudformation')
    response = cfn_client.describe_stacks(StackName='yomna-codecatalyst-sst-app-DBStack')  ######## change the stack name #########
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
        if len(response['records']) >0:
            violationData = response['records']
            return violationData
        else:
            return "no records!"
    
    else :
       return "no arn!"
 
