import * as GetFirstWorkerEvent from '../GetFirstWorkerEvent/GetFirstWorkerEvent.js'
import * as FirstWorkerEventType from '../FirstWorkerEventType/FirstWorkerEventType.js'

export const create = async (workerUrl) => {
  const worker = new Worker(workerUrl, {
    type: 'module',
    name: 'Renderer Worker',
  })
  const { type, event } = await GetFirstWorkerEvent.getFirstWorkerEvent(worker)
  if (type === FirstWorkerEventType.Error) {
    throw new Error(`Worker Error: ${event}`)
  }
  if (event.data !== 'ready') {
    throw new Error(`unexpected message from worker`)
  }
  return {
    worker,
    send(message) {
      if (message.result instanceof MessagePort) {
        this.worker.postMessage(message, [message.result])
        return
      }
      this.worker.postMessage(message)
    },
    set onmessage(listener) {
      this.worker.onmessage = (event) => {
        listener(event.data)
      }
    },
  }
}
