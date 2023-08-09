import * as Ipc from '../Ipc/Ipc.js'

export const state = {
  /**
   * @type {any}
   */
  ipc: undefined,
}

export const listen = async () => {
  const ipc = await Ipc.create()
  state.ipc = ipc
}

export const invoke = async (method, ...params) => {
  const message = {
    jsonrpc: '2.0',
    method,
    params,
  }
  state.ipc.send(message)
}
