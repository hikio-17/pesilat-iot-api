import ClientError from "./ClientError";

class NotFoundError extends ClientError {
  constructor(message: string, statusCode = 404) {
    super(message, statusCode);
    this.name = 'NotFoundError';
  }
}

export default NotFoundError;
