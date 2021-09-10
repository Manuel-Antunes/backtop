import fs from 'fs';
import path from 'path';

class VideoService {
  findVideo(name: string) {
    const video = fs.readFileSync(path.resolve('tmp', name));
    return video;
  }
}

export default new VideoService();
