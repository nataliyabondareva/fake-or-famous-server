module.exports = function dispatcher(io) {
  return function dispatch(type, payload) {
    const action = {
<<<<<<< HEAD
      type,
=======
      type: 'USER_LOGIN',
>>>>>>> f6067c91cb17c925eac8b2abf2e2e7094182af8e
      payload
    }

    io.emit('action', action)
  }
}