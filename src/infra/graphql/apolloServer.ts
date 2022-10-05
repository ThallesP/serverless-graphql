import "reflect-metadata";
import "../container";

import { ListTodoQuery } from "./resolvers/queries/ListTodosQuery";
import { container } from "tsyringe";
import { ApolloServer } from "apollo-server-lambda";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { CreateTodoMutation } from "./resolvers/mutations/CreateTodoMutation";
import { buildSchemaSync } from "type-graphql";

const schema = buildSchemaSync({
  resolvers: [ListTodoQuery, CreateTodoMutation],
  container: { get: (cls) => container.resolve(cls) },
});

const apolloServer = new ApolloServer({
  schema,
  introspection: true,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

export const handler = apolloServer.createHandler();
