import * as Ipc from '../Ipc/Ipc.js'
import * as GetRendererWorkerUrl from '../GetRendererWorkerUrl/GetRendererWorkerUrl.js'

export const state = {
  /**
   * @type {any}
   */
  ipc: undefined,
}

export const listen = async () => {
  const url = GetRendererWorkerUrl.getRendererWorkerUrl()
  const ipc = await Ipc.create(url)
  state.ipc = ipc
  // TODO
}
