# import json
# import boto3
# from urllib.parse import unquote_plus

# #define clients
# s3_client = boto3.client('s3')
# dynamodb_client = boto3.client('dynamodb')
# textract_client = boto3.client('textract')

# #Extract violated car with it's license plate image from an s3 bucket 
# #Take the license plate cropped image to textract client to generate a text from the image
# def extract_license_plate(image_bucket, image_key):
#     response = textract_client.detect_document_text(
#         Document={'S3Object': {'Bucket': image_bucket, 'Name': image_key}}
#     )
   
#     # Extract license plate text from Textract response
#     license_plate_text = ''
#     for item in response.get('Blocks', []):
#        if item.get('BlockType') == 'LINE':
#         license_plate_text += item.get('Text', '')

#     # Check if license plate text extraction was successful
#     if license_plate_text.strip():
#        return license_plate_text.strip()  # Trim leading/trailing whitespace
#     else:
#        return 'License plate text extraction failed'

 
# def lambda_handler(event, context):
#     # Get the bucket name and object key from the S3 event
#     bucket_name = event['Records'][0]['s3']['bucket']['name']
#     object_key = unquote_plus(event['Records'][0]['s3']['object']['key'])
 
#     # Give a unique ID for the image
#     image_id = object_key.split('.')[0]  
   
#     # Copy the image to the new S3 bucket
#     new_bucket_name = 'your-new-bucket-name'  # Replace with your new bucket name
#     new_object_key = f'images/{image_id}{image_extension}'  # type: ignore # Adjust the key format as needed
#     s3_client.copy_object(
#         Bucket=new_bucket_name,
#         Key=new_object_key,
#         CopySource={'Bucket': bucket_name, 'Key': object_key}
#     )
   
#     # Extract license plate number using Textract
#     license_plate_number = extract_license_plate(bucket_name, object_key)
   
#     # Save the license plate number to DynamoDB
#     dynamodb_table_name = 'Yellow_lane_violatedCars'
#     dynamodb_client.put_item(
#         TableName=dynamodb_table_name,
#         Item={
#             'image_id': {'S': image_id},
#             'license_plate_number': {'S': license_plate_number},
#             'image_url': {'S': f's3://{new_bucket_name}/{new_object_key}'}
#         }
#     )
   
#     return {
#         'statusCode': 200,
#         'body': json.dumps('Image processed and data saved successfully!')
#     }