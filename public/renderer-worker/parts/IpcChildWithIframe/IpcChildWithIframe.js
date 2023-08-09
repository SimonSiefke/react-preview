import * as RendererProcess from '../RendererProcess/RendererProcess.js'

export const create = async () => {
  const port = await RendererProcess.invoke('IpcChildWithIframe.create')
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
