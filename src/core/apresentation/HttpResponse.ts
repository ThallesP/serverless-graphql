export interface HttpResponse<T = any> {
  statusCode: number;
  error?: Error;
  data: T;
}
