import * as HandleJsonRpcMessage from '../HandleJsonRpcMessage/HandleJsonRpcMessage.js'
import * as Assert from '../Assert/Assert.js'

export const handleIpc = (ipc, execute) => {
  Assert.object(ipc)
  Assert.fn(execute)
  const handleMessage = (message) => {
    HandleJsonRpcMessage.handleJsonRpcMessage(ipc, message, execute)
  }
  ipc.onmessage = handleMessage
}
