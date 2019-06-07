module.exports = function dispatcher (io) {
  return function dispatch (payload) {
    const action = {
      type: 'USER_LOGIN',
      payload
    }

    io.emit('action', action)
  }
}