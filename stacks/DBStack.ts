import { Table, StackContext, RDS, Bucket } from "sst/constructs";
// import { Bucket, StackContext, Table } from "sst/constructs";
import * as rds from "aws-cdk-lib/aws-rds";
import * as secretsManager from "aws-cdk-lib/aws-secretsmanager";
import * as path from 'path';
import { Fn } from "aws-cdk-lib";
import { Duration } from "aws-cdk-lib";

export function DBStack({ stack, app }: StackContext) {
    
    const Unregsistered_bucket = new Bucket(stack, "Alpr-detection-bucket", {
        notifications: [
            {
                function: "src/sample-python-lambda/UnregisteredLPDetection.py",
                events: ["object_created"],
            },
        ],
        cdk: {
            bucket: {
                lifecycleRules: [
                    {
                        expiration: Duration.hours(24),
                    },
                ],
            },
        },
    });

    const bucket1 = new Bucket(stack, "yellow-lane-plate-numbers", {
        notifications: [
            {
                function: "src/YellowLaneViolatedCarsInfo.py",
                events: ["object_created"],
            },
        ],
    });

    const bucket2 = new Bucket(stack, "yellow-lane-violations-bucket", {
        notifications: [
            {
                function: "src/YellowLaneViolatedCarsInfo.py",
                events: ["object_created"],
            },
        ],
    });
 
    const object_table = new Table(stack, "Object_detection_and_tracking", {
        fields: {
        fragment_number: "string",
        abs_frame_number: "number",
        class_id: "number",
        frame_number: "string",
        track_id: "number",
        x1: "number",
        x1car: "number",
        x2: "number",
        x2car: "number",
        y1: "number",
        y1car: "number",
        y2: "number",
        y2car:"number",
        },
        primaryIndex: { partitionKey: "fragment_number", sortKey: "y1"},
    });

    const Unregsistered_table = new Table(stack, "license_plate_numbers", {
        fields: {
        car_id: "string",
        license_plate_number: "string",
        time: "number",
        },
        primaryIndex: { partitionKey: "car_id"},
        stream: "new_image", //Enable DynamoDB streams and capture new images
    });
 

    // Create an RDS database
    const mainDBLogicalName = "MainDatabase";
    // Define output/export attributes names
    const dbSecretArnOutputName = "DBSecretArn";
    const dbClusterIdentifierOutputName = "DBClusterIdentifier";
    // create db variable that will hold the RDS db construct
    var db:RDS

    if (app.stage == "prod") {
        db = new RDS(stack, mainDBLogicalName, {
            engine: "mysql5.7",
            defaultDatabaseName: "maindb",
            migrations: [".","packages","db-migrations",].join(path.sep),
        });

        // Export db secret arn and cluster identifier to be used by other stages
        stack.addOutputs({
            [dbSecretArnOutputName] : {
                value: db.secretArn,
                exportName: dbSecretArnOutputName,
            },
            [dbClusterIdentifierOutputName] : {
                value: db.clusterIdentifier,
                exportName: dbClusterIdentifierOutputName,
            },
        });
    } else {
        // Import the existing secret from the exported value
        const existing_secret = secretsManager.Secret.fromSecretCompleteArn(stack, "ExistingSecret", Fn.importValue(dbSecretArnOutputName));
        // Create an SST resource for the existing DB (does not create a new DB, references the existing one)
        db = new RDS(stack, "ExistingDatabase", {
            engine: "mysql5.7",
            defaultDatabaseName: "maindb",
            migrations: [".","packages","db-migrations",].join(path.sep),
            cdk: {
                cluster: rds.ServerlessCluster.fromServerlessClusterAttributes(stack, "ExistingCluster", {
                    // Import the existing cluster identifier from the exported value
                    clusterIdentifier: Fn.importValue(dbClusterIdentifierOutputName),
                    secret: existing_secret,
                }),
                secret: existing_secret,
            },
        });
    }

    return {
        bucket1,
        db,
        bucket2,
        object_table,
        Unregsistered_bucket,
        Unregsistered_table,
    };
}