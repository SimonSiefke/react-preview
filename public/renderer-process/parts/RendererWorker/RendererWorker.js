import * as Ipc from '../Ipc/Ipc.js'
import * as GetRendererWorkerUrl from '../GetRendererWorkerUrl/GetRendererWorkerUrl.js'
import * as HandleIpc from '../HandleIpc/HandleIpc.js'

export const state = {
  /**
   * @type {any}
   */
  ipc: undefined,
}

export const listen = async (execute) => {
  const url = GetRendererWorkerUrl.getRendererWorkerUrl()
  const ipc = await Ipc.create(url)
  HandleIpc.handleIpc(ipc, execute)
  state.ipc = ipc
  // TODO
}
