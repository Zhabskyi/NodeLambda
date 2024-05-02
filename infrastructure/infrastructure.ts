#!/usr/bin/env node
import "source-map-support/register";
import { App } from "@aws-cdk/core";
import { InfrastructureStack } from "./infrastructure-stack";

const app = new App();
const stack = new InfrastructureStack(app, "NodeLambda", {});
