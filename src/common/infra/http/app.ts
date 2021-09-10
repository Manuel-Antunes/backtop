import cors from 'cors';
import express from 'express';
import http from 'http';
import routes from './routes';

const app = express();
const server = http.createServer(app);
app.use(cors());
app.use(express.json());
app.use(routes);

export default server;
