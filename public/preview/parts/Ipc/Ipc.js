import * as GetFirstEvent from '../GetFirstEvent/GetFirstEvent.js'
import * as FirstWorkerEventType from '../FirstWorkerEventType/FirstWorkerEventType.js'

export const listen = async () => {
  const { type, event } = await GetFirstEvent.getFirstEvent(globalThis, {
    message: FirstWorkerEventType.Message,
  })
  if (type !== FirstWorkerEventType.Message) {
    throw new Error(`unexpected message`)
  }
  const port = event.data.port
  return {
    port,
    send(message) {
      this.port.postMessage(message)
    },
    set onmessage(listener) {
      this.port.onmessage = (event) => {
        listener(event.data)
      }
    },
  }
}
