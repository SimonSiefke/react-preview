export const create = () => {
  return {
    global: globalThis,
    send(message) {
      this.global.postMessage(message)
    },
    set onmessage(listener) {
      this.global.onmessage = (event) => {
        listener(event.data)
      }
    },
  }
}
