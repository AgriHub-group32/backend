import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from "@nestjs/common";
import { Request, Response } from "express";

@Catch()
export class AppExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    let status: number;
    let messsage: string;

    // will be adding other types of exception down the line
    if (exception instanceof HttpException) {
      console.log(`Handled Excpetion:${exception.message}`)
      status = exception.getStatus();
      messsage = exception.message;
    } else {
      console.log(`Unhandled Exception: ${exception}`);
      status = 500;
      messsage = "Internal Server Error";
    }

    response.status(status).json({
      error: messsage,
    });
  }
}
