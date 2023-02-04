export interface UsageGetResponse {
  path: string;
  method: string;
  request: Request;
  response: Response;
  status: number;
  createdAt: string;
}

export interface Request {
  body: Object;
  query: Object;
  params: Object;
  headers: Object;
}

export interface Object {
  [key: string]: any;
}
