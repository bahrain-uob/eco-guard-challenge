import { Api, StackContext, use } from "sst/constructs";
import { DBStack } from "./DBStack";
import { CacheHeaderBehavior, CachePolicy } from "aws-cdk-lib/aws-cloudfront";
import { Duration } from "aws-cdk-lib/core";
import { Role, ServicePrincipal } from "aws-cdk-lib/aws-iam";
import * as iam from "aws-cdk-lib/aws-iam";
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as s3n from 'aws-cdk-lib/aws-s3-notifications';


export function ApiStack({ stack }: StackContext) {
  const { db } = use(DBStack);
  // const { Unregsistered_table} = use(DBStack);
  // const {bucket1} =use(DBStack);

  // Create a Role with service Principal Lambda
  const lambdaToRDSRole = new iam.Role(this, "lambdaToRDSRole", {
    assumedBy: new iam.ServicePrincipal("lambda.amazonaws.com"),
  });

  // Path to your Lambda function handler
  const lambdaHandlerPath =
    "packages/functions/src/sample-python-lambda/checkCarRegistration.py";

  // Attach Inline Policies to role created by lambda in previous step.
  lambdaToRDSRole.attachInlinePolicy(
    new iam.Policy(this, "lambdaToRD", {
      statements: [
        new iam.PolicyStatement({
          //Effect: "Allow",
          actions: ["cloudformation:DescribeStacks"],
          resources: ["*"],
        }),
      ],
    })
  );

// // Basic execution role
// const lambdaBasicExecutionRole = new iam.Role(this, 'LambdaBasicExecutionRole', {
//   assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
//   managedPolicies: [
//     iam.ManagedPolicy.fromAwsManagedPolicyName('service-role/AWSLambdaBasicExecutionRole'),
//   ],
// });
 

  // Create the HTTP API
  const api = new Api(stack, "Api", {
    defaults: {
      authorizer: "iam",
      function: {
        // Bind the db name to our API
        bind: [db],
      },
    },
    routes: {
      // Sample TypeScript lambda function
      "POST /": "packages/functions/src/lambda.main",
      // Sample Pyhton lambda function
      "GET /": {
        function: {
          handler: "packages/functions/src/sample-python-lambda/lambda.main",
          //handler: "packages/functions/src/sample-python-lambda/checkCarRegistration.lambda_handler",  ///to check if the car registered or not

          runtime: "python3.11",
          timeout: "60 seconds",
          // Set the IAM role for the checkCarRegistration.py" Lambda function
          //role: lambdaToRDSRole    // allow checkCarRegistration.py function to assume the role
        },
      },
    },
  });

  // Create the HTTP API to get RDS data //getviolations function
  const apiRDS = new Api(stack, "ApiRDS", {
    defaults: {
      //authorizer: "iam",
      function: {
        // Bind the db name to our API
        bind: [db],
      },
    },
    routes: {
      "GET /": {
        function: {
          handler:
            "packages/functions/src/sample-python-lambda/getViolations.lambda_handler",
          runtime: "python3.11",
          timeout: "60 seconds",
          role: lambdaToRDSRole, // allow lambda function to assume the role
        },
      },
    },
  });

  // // get data from dynamo to rds
  // const apiDynamo = new Api(stack, "ApiDynamo", {
  //   defaults: {
  //     //authorizer: "iam",
  //     function: {
  //       // Bind the db name to our API
  //       bind: [Unregsistered_table],
  //     },
  //   },
  //   routes: {
  //     "POST /": {
  //       function: {
  //         handler:
  //           "packages/functions/src/sample-python-lambda/checkCarRegistiration.lambda_handler",
  //         runtime: "python3.11",
  //         timeout: "60 seconds",
  //         role: lambdaToRDSRole, lambdaBasicExecutionRole, // allow lambda function to assume the role
  //       },
  //     },
  //   },
  // });

  // // S3 trigger to yellowLaneLambda function
  // const apiS3Yellow = new Api(stack, "ApiS3Yellow", {
  //   defaults: {
  //     //authorizer: "iam",
  //     function: {
  //       // Bind the db name to our API
  //       bind: [bucket1],
  //     },
  //   },
  //   routes: {
  //     "POST /": {
  //       function: {
  //         handler:
  //           "packages/functions/src/sample-python-lambda/YellowLaneViolatedCarsInfo.lambda_handler",
  //         runtime: "python3.11",
  //         timeout: "60 seconds",
  //         role: lambdaToRDSRole,// allow lambda function to assume the role
  //       },
  //     },
  //   },
  // });

  // // Add S3 trigger to the Lambda function
  //   bucket1.addEventNotification(
  //     s3.EventType.OBJECT_CREATED,
  //     new s3n.LambdaDestination(yellowLaneViolatedCarsInfoFunction),
  //     { suffix: "_1.jpg" }
  //   );
   
  // cache policy to use with cloudfront as reverse proxy to avoid cors
  // https://dev.to/larswww/real-world-serverless-part-3-cloudfront-reverse-proxy-no-cors-cgj
  const apiCachePolicy = new CachePolicy(stack, "CachePolicy", {
    minTtl: Duration.seconds(0), // no cache by default unless backend decides otherwise
    defaultTtl: Duration.seconds(0),
    headerBehavior: CacheHeaderBehavior.allowList(
      "Accept",
      "Authorization",
      "Content-Type",
      "Referer"
    ),
  });

  stack.addOutputs({
    apiRDSUrl: apiRDS.url,
  });

  return { api, apiCachePolicy, apiRDS ,};
}
