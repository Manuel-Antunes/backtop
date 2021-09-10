import { Server } from 'socket.io';
import videoService from 'video/video.service';

export default function createChannels(socket: Server) {
  socket.on('connect', client => {
    client.on('watching', id => {
      try {
        videoService.findVideo(id);
      } catch (error) {
        console.log(error);

        client.emit('not-found');
      }
    });
  });
  return socket;
}
