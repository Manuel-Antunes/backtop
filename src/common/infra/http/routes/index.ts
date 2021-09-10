import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
  res.send('hello samba');
});
routes.get('/:name', (req, res) => {
  res.send(`hello ${req.params.name}`);
});
routes.get('/video/:id', async (req, res) => {
  const { id } = req.params;
  res.render('video', { id });
});

export default routes;
