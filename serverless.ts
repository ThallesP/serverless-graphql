/* eslint-disable no-template-curly-in-string */
import type { AWS } from "@serverless/typescript";

import graphQLHandler from "./src/handler";

const serverlessConfiguration: AWS = {
  service: "serverless-graphql",
  frameworkVersion: "3",
  plugins: ["serverless-plugin-typescript", "serverless-offline"],
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
      DATABASE_URL:
        "postgres://ogrilo:serenata@${self:custom.dbHost}:${self:custom.dbPort}/todosdatabase",
    },
  },
  functions: { graphQLHandler },
  package: {
    individually: true,
    patterns: ["node_modules/.prisma/client/libquery_engine-rhel-*"],
  },
  custom: {
    dbHost: "!GetAtt TodosDatabase.Endpoint.Host",
    dbPort: "!GetAtt TodosDatabase.Endpoint.Port",
    "serverless-offline": {
      host: "127.0.0.1",
    },
  },
  resources: {
    Resources: {
      TodosDatabase: {
        Type: "AWS::RDS::DBInstance",
        Properties: {
          MasterUsername: "ogrilo",
          MasterUserPassword: "serenata",
          DBInstanceClass: "db.t2.micro",
          Engine: "postgres",
          EngineVersion: "12",
          AllocatedStorage: "5",
          DBName: "todos",
        },
      },
    },
  },
};

module.exports = serverlessConfiguration;
