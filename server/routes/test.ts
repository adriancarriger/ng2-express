import { Router, Response, Request } from 'express';

const testRouter: Router = Router();

testRouter.get('/test', (request: Request, response: Response) => {
  response.json({
    title: 'Greetings!',
    text: 'Hello Angular 2'
  });
});

export { testRouter }
