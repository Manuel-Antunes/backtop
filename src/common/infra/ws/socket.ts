import { Server } from 'socket.io';
import server from '../http/app';

const socket = new Server(server, {
  cors: {
    origin: '*',
  },
});

export default socket;
