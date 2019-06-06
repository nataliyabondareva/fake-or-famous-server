module.exports = function dispatcher (io) {
  return function dispatch (payload) {
    const action = {
      type: 'MESSAGES',
      payload
    }

    io.emit('action', action)
  }
}