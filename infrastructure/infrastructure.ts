#!/usr/bin/env node
import "source-map-support/register";
import { App } from "@aws-cdk/core";
import { NodeLambdaStack } from "./infrastructure-stack";

const app = new App();
const stack = new NodeLambdaStack(app, "NodeLambdaStack", {});
