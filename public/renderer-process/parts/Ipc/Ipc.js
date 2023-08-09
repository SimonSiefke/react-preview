export const create = async (workerUrl) => {
  const worker = new Worker(workerUrl, {
    type: 'module',
    name: 'Renderer Worker',
  })

  return {
    worker,
    send(message) {
      this.worker.postMessage(message)
    },
    set onmessage(listener) {
      this.worker.onmessage = (event) => {
        listener(event.data)
      }
    },
  }
}
