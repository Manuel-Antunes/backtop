import express from 'express';

const app = express();
app.get('/', (req, res) => {
  res.send('hello samba');
});
app.get('/:name', (req, res) => {
  res.send(`hello ${req.params.name}`);
});
export default app;
