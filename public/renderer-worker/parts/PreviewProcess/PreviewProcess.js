import * as IpcChildWithIframe from '../IpcChildWithIframe/IpcChildWithIframe.js'
import * as HandleIpc from '../HandleIpc/HandleIpc.js'
import * as JsonRpc from '../JsonRpc/JsonRpc.js'

export const state = {
  /**
   * @type {any}
   */
  ipc: undefined,
}

export const listen = async (execute) => {
  // TODO request message port from preview
  const ipc = await IpcChildWithIframe.create()
  HandleIpc.handleIpc(ipc, execute)
  state.ipc = ipc
}

export const invoke = (method, ...params) => {
  return JsonRpc.invoke(state.ipc, method, ...params)
}
