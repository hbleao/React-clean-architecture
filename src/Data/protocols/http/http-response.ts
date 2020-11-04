export enum HttpStatusCode {
  success = 200,
  noContent = 204,
  badRequest = 400,
  unathorized = 401,
  error = 500
};

export type HttpResponse = {
  statusCode: HttpStatusCode,
  body?: any
};