/* eslint-disable no-template-curly-in-string */
import type { AWS } from "@serverless/typescript";

import graphQLHandler from "./src/handler";

const serverlessConfiguration: AWS = {
  service: "serverless-graphql",
  frameworkVersion: "3",
  plugins: [
    "serverless-plugin-common-excludes",
    "serverless-plugin-typescript",
    "serverless-offline",
  ],
  provider: {
    name: "aws",
    runtime: "nodejs14.x",
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
    },
  },
  functions: { graphQLHandler },
  package: {
    individually: true,
    patterns: [
      "prisma/schema.prisma",
      "node_modules/.prisma",
      "!node_modules/.prisma/client/libquery_engine-*",
      "node_modules/.prisma/client/libquery_engine-rhel-*",
      "!node_modules/prisma/libquery_engine-*",
      "!node_modules/@prisma/engines/**",
    ],
  },
  custom: {
    "serverless-offline": {
      host: "127.0.0.1",
    },
  },
};

module.exports = serverlessConfiguration;
