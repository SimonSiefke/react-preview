import * as Ipc from '../Ipc/Ipc.js'
import * as HandleIpc from '../HandleIpc/HandleIpc.js'

export const state = {
  /**
   * @type {any}
   */
  ipc: undefined,
}

export const listen = async (execute) => {
  const ipc = await Ipc.listen()
  HandleIpc.handleIpc(ipc, execute)
  state.ipc = ipc
}
