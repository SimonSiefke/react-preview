import * as Callback from '../Callback/Callback.js'
import * as GetResponse from '../GetResponse/GetResponse.js'

export const handleJsonRpcMessage = async (ipc, message, execute) => {
  if (message.result || message.error) {
    Callback.resolve(message.id, message)
    return
  }
  if (message.method) {
    const response = await GetResponse.getResponse(message, execute)
    ipc.send(response)
    return
  }
  throw new Error(`unexpected json rpc message`)
}
