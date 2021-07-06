#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { TypescriptCdkStack } from '../lib/typescript-cdk-stack';
import { Tags } from '@aws-cdk/core';

const app = new cdk.App();
const stack = new TypescriptCdkStack(app, 'TypescriptCdkStack');
Tags.of(stack).add('App', 'DocumentManagement');
Tags.of(stack).add('Environment', 'Development');
