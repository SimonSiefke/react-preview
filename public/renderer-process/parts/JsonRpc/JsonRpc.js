import * as Callback from '../Callback/Callback.js'
import * as Assert from '../Assert/Assert.js'

export const invoke = async (ipc, method, ...params) => {
  const { id, promise } = Callback.registerPromise()
  const message = {
    jsonrpc: '2.0',
    id,
    method,
    params,
  }
  ipc.send(message)
  const response = await promise
  if (response.error) {
    throw new Error(`${response.error.message}`)
  }
  if ('result' in response) {
    return response.result
  }
  throw new Error(`unexpected json rpc response`)
}

export const send = async (ipc, method, ...params) => {
  Assert.object(ipc)
  Assert.string(method)
  const message = {
    jsonrpc: '2.0',
    method,
    params,
  }
  ipc.send(message)
}
