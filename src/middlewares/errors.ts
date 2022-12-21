import { NotFoundException } from '@domain/exceptions/notFound';
import { Request, Response, NextFunction } from 'express';

export default function errorsMiddleware(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(err);

  if(err instanceof NotFoundException){
    return res.status(err.statusCode).json({
      message: err.message
    });    

  }

  return res.json({
    message: 'Ops! Ocorreu um erro',
  });
}
