import { gql } from "apollo-server-lambda";

export default gql`
  type CreateTodo {
    name: String!
    completed: Boolean!
  }

  type Mutation {
    createTodo(name: ): String!
  }

  type Query {
    dummyQuery: String!
  }
`;
