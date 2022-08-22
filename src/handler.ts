import { handlerPath } from "@libs/handler-resolver";

export default {
  handler: `${handlerPath(__dirname)}/apolloServer.handler`,
  events: [
    {
      http: {
        method: "ANY",
        path: "graphql",
      },
    },
  ],
};
