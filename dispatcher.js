module.exports = function dispatcher(io) {
  return function dispatch(type, payload) {
    const action = {
      type,
      payload
    }

    io.emit('action', action)
  }
}