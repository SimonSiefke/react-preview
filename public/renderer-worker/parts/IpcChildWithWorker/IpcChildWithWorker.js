export const create = async () => {
  globalThis.postMessage('ready')
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

export const createPreview = async () => {
  globalThis.postMessage('ready')
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
