import * as Callback from '../Callback/Callback.js'
import * as GetResponse from '../GetResponse/GetResponse.js'

export const handleJsonRpcMessage = async (ipc, message, execute) => {
  if ('result' in message || 'error' in message) {
    Callback.resolve(message.id, message)
    return
  }
  if (message.method && message.id) {
    const response = await GetResponse.getResponse(message, execute)
    ipc.send(response)
    return
  }
  if (message.method) {
    return execute(message.method, ...message.params)
  }
  throw new Error(`unexpected json rpc message`)
}
