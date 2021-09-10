import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
  res.send('hello samba');
});
routes.get('/:name', (req, res) => {
  res.send(`hello ${req.params.name}`);
});

export default routes;
