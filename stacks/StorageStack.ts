import { Bucket, StackContext, Table } from "sst/constructs";

export function StorageStack({ stack }: StackContext) {
  // Create the license plates DynamoDB table
  const licenses_table = new Table(stack, "license_plate_numbers", {
    fields: {
      car_id: "string",
      license_plate_number: "string",
      time:"number",
    },
    primaryIndex: { partitionKey: "car_id", /* sortKey: " " */ },
  });

  // Create the object-detection & tracking DynamoDB table
  const Object_detection_and_tracking = new Table(stack, "object_detection_and_tracking", {
    fields: {
      fragment_number: "string",
      y1: "string",
      abs_frame_number:"number",
      class_id:"number",
      frame_number:"number",
      track_id:"number",
      x1:"number",
      x1car:"number",
      x2:"number",
      x2car:"number",
      y1:"number",
      y1car:"number",
      y2:"number",
      y2car:"number",
    },
    primaryIndex: { partitionKey: "fragment_number",  sortKey: "y1"  },
  });

  // Create an S3 bucket
  const license_plate_snapshot_bucket = new Bucket(stack, "alpr-licenseplatesnapshotbucket");



  return {
    license_plate_snapshot_bucket,
    licenses_table,
    Object_detection_and_tracking,
  };
}