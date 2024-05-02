import * as cdk from "aws-cdk-lib";
import * as lambda from "aws-cdk-lib/aws-lambda";
import { RestApi, LambdaIntegration } from "aws-cdk-lib/aws-apigateway";

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

    const api = new RestApi(this, "YourApi", {
      restApiName: "Your API Name",
      description: "This is your API connected to Lambda"
    });

    const lambdaIntegration = new LambdaIntegration(myLambda, {
      requestTemplates: { "application/json": '{ "statusCode": "200" }' }
    });

    const resource = api.root.addResource("hello");
    resource.addMethod("GET", lambdaIntegration); // or POST, PUT, etc.
  }
}
