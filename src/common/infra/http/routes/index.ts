import { Router } from 'express';
import videoService from 'video/video.service';

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
routes.get('/stream/:id', async (req, res) => {
  const stream = videoService.findVideo(req.params.id);
  stream.on('open', () => stream.pipe(res));
});

export default routes;
