import { HttpResponse } from "./HttpResponse";

export function ok(data: any): HttpResponse {
  return {
    statusCode: 200,
    data,
  };
}

export function created(data: any): HttpResponse {
  return {
    statusCode: 201,
    data,
  };
}

export function serverError(error: any): HttpResponse {
  function anyToError(err: any): Error {
    return err instanceof Error ? error : new Error(err);
  }

  return {
    statusCode: 500,
    error: anyToError(error),
    data: { error: "InternalServerError", message: anyToError(error).message },
  };
}
