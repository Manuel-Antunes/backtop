import { Server } from 'socket.io';

export default function createChannels(socket: Server) {
  socket.on('connect', client => {
    client.on('watching', id => {
      try {
        client.emit('video-found', id);
      } catch (error) {
        client.emit('not-found');
      }
    });
  });
  return socket;
}
