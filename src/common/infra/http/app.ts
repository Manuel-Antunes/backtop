import cors from 'cors';
import express from 'express';
import http from 'http';
import path from 'path';
import routes from './routes';

const app = express();
const server = http.createServer(app);
app.use(cors());
app.use(express.json());
app.use(routes);
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, '..', '..', 'public', 'views'));
app.use(
  express.static(path.resolve(__dirname, '..', '..', 'public', 'resources')),
);
export default server;
