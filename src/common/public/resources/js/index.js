const socket = io('/')
socket.on('connect', () => {
  console.log('connectei bitches');
})
socket.on('not-found', () => {
  alert('video not found')
})
function watchVideo() {
  socket.emit('watching', video_id)
}
socket.on('video-found', (id) => {
  const video = document.createElement('video')
  video.autoplay
  video.controls = true
  addVideoStream(video, id)
})
function addVideoStream(video, src) {
  video.src = "/stream/" + src;
  console.log(video.src);
  video
  video.addEventListener('loadedmetadata', () => {
    video.play();
  })
  document.getElementById('video-container').append(video);
}
