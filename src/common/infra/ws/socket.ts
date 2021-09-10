import { Server } from 'socket.io';
import server from '../http/app';
import createChannels from './channels';

const socket = createChannels(
  new Server(server, {
    cors: {
      origin: '*',
    },
  }),
);

export default socket;
