import { handlerPath } from "./infra/lambda/handler-resolver";

export default {
  handler: `${handlerPath(__dirname)}/infra/graphql/apolloServer.handler`,
  events: [
    {
      http: {
        method: "ANY",
        path: "graphql",
      },
    },
  ],
};
