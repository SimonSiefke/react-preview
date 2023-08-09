import * as Render from '../Render/Render.js'
import * as RendererProcess from '../RendererWorker/RendererWorker.js'
import * as Command from '../Command/Command.js'

export const main = async () => {
  await RendererProcess.listen(Command.execute)
  // globalThis.postMessage('ready', '*')
  // console.log('listening')
  // Render.render()
  // setInterval(() => {
  //   postMessage('test', '*')
  //   // window.top?.postMessage('okd')
  // }, 1000)
  // window.addEventListener('message', (x) => {
  //   console.log(x)
  // })
}
