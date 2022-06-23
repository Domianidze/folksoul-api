export default interface Error {
    name: string;
    message: string;
    stack?: string;
    statusCode?: number;
  }