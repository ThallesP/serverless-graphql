import "reflect-metadata";
import "../container";

import { ApolloServer } from "apollo-server-lambda";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import schema from "../../../schema";
import { container } from "tsyringe";
import { CreateTodoMutation } from "./resolvers/mutations/CreateTodoMutation";

const apolloServer = new ApolloServer({
  typeDefs: schema,
  resolvers: {
    Mutation: {
      createTodo: async (_, { data }) => {
        const createTodoMutation = container.resolve(CreateTodoMutation);
        return await createTodoMutation.mutate(data);
      },
    },
  },
  introspection: true,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

export const handler = apolloServer.createHandler();
