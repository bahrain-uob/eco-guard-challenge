//import { DynamoDB } from "aws-sdk";
import { RDS } from "aws-sdk";
import { Table } from "sst/node/table";

//const dynamoDb = new DynamoDB.DocumentClient();

export async function main() {
/*
  const getParams = {
    // Get the table name from the environment variable
    TableName: Table.Counter.tableName,
    // Get the row where the counter is called "clicks"
    Key: {
      counter: "clicks",
    },
  };
  const results = await dynamoDb.get(getParams).promise();

  // If there is a row, then get the value of the
  // column called "tally"
  let count = results.Item ? results.Item.tally : 0;

  const putParams = {
    TableName: Table.Counter.tableName,
    Key: {
      counter: "clicks",
    },
    // Update the "tally" column
    UpdateExpression: "SET tally = :count",
    ExpressionAttributeValues: {
      // Increase the count
      ":count": ++count,
    },
  };
  await dynamoDb.update(putParams).promise();

  return {
    statusCode: 200,
    body: count,
  };

*/

// Accessing the RDS cluster object from the CDK stack
const db = stack.db;

// Example: Executing a query on the RDS cluster
const secret = Secret.fromSecretCompleteArn(stack, "ExistingSecret", db.secretArn);
const connection = await db.cluster.getConnection({
  secret,
  database: "maindb",
  // Set other connection options if needed
});

try {
  // Example: Executing a SELECT query on the RDS cluster
  const [rows] = await connection.query("SELECT * FROM registered_cars");
  console.log("Rows:", rows);
} catch (error) {
  console.error("Error:", error);
} finally {
  // Closing the database connection
  connection.close();
}

return {
  statusCode: 200,
  body: "OK",
};
}
