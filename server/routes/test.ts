import { Router, Response, Request } from 'express';
import * as db from '../db';

const testRouter: Router = Router();

testRouter.get('/test', (request: Request, response: Response) => {
  db.getTest(result => {
    response.json(result);
  });
});

export { testRouter }
