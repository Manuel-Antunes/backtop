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
