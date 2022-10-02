import { gql } from "apollo-server-lambda";

export default gql`
  input CreateTodo {
    name: String!
    completed: Boolean!
  }

  type Todo {
    id: String!
    name: String!
    completedAt: String
    createdAt: String!
    updatedAt: String
  }

  type Mutation {
    createTodo(data: CreateTodo!): Todo!
  }

  type Query {
    dummyQuery: String!
  }
`;
