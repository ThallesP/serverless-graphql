import { ApolloError } from "apollo-server-lambda";
import { HttpResponse } from "../../../core/apresentation/HttpResponse";

export function adaptHttpResponseToGraphQL(response: HttpResponse) {
  if (response.error) {
    throw new ApolloError(
      response.error.message,
      response.statusCode.toString()
    );
  }

  return response.data;
}
