#!/usr/bin/env node
import "source-map-support/register";
import { NodeLambdaStack } from "./infrastructure-stack";
import { App } from "aws-cdk-lib";

const app = new App();
const stack = new NodeLambdaStack(app, "NodeLambdaStack", {});
