import { HttpException } from '@nestjs/common';

export class AppError extends HttpException {
  public readonly message: string;

  public readonly statusCode: number;

  constructor(message: string, statusCode = 500) {
    super(message, statusCode);
  }
}
