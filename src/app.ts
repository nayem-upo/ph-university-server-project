import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { router } from './app/routes';

const app: Application = express();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send("Mongoose Express Crud app is running")
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any, no-unused-vars, @typescript-eslint/no-unused-vars
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  return res.status(500).json({
    success: false,
    message: err.message || 'something went wrong',
    error: err,
  });
})

export default app;