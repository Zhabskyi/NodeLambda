import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";

export class MyCdkAppStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Define the Lambda function
    const myLambda = new lambda.Function(this, "MyFunction", {
      runtime: lambda.Runtime.NODEJS_20_X, // Runtime
      code: lambda.Code.fromAsset("../src"), // Path to the folder containing lambda.js
      handler: "lambda.handler" // File and method name
    });
  }
}
