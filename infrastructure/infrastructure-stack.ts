import * as cdk from "aws-cdk-lib";
import * as lambda from "aws-cdk-lib/aws-lambda";

import { Construct } from "constructs";

export class NodeLambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Define the Lambda function
    const myLambda = new lambda.Function(this, "MyFunction", {
      runtime: lambda.Runtime.NODEJS_20_X, // Runtime
      code: lambda.Code.fromAsset("../src"), // Path to the folder containing lambda.js
      handler: "lambda.handler" // File and method name
    });
  }
}
