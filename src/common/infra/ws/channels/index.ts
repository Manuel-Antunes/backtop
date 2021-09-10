import { Server } from 'socket.io';

export default function createChannels(socket: Server) {
  socket.on('connect', client => {
    client.on('watching', () => {
      console.log('someone is watching my video');
    });
  });
  return socket;
}
