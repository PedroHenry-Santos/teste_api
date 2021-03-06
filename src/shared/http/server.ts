import 'reflect-metadata';
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import 'express-async-errors';

import swaggerFile from '@docs/swagger';
import AppError from '@shared/errors/AppError';

import routes from './routes';
import '@shared/typeorm';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(routes);

app.use(
  (error: Error, request: Request, response: Response, _next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message
      });
    }

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error'
    });
  }
);

app.listen(3333, () => {
  // eslint-disable-next-line no-console
  console.log('Server started on port 3333! 🏆');
});
