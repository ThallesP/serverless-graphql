import "reflect-metadata";

import { ApolloServer } from "apollo-server-lambda";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import schema from "../schema";
import { container } from "tsyringe";
import { CreateTodoResolver } from "./modules/todos/useCases/createTodo/CreateTodoResolver";

const apolloServer = new ApolloServer({
  typeDefs: schema,
  resolvers: {
    Mutation: {
      createTodo: (data) => {
        return container.resolve(CreateTodoResolver).mutation(data);
      },
    },
  },
  introspection: true,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

export const handler = apolloServer.createHandler();
