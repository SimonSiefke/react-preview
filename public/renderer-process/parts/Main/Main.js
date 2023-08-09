import * as RendererWorker from '../RendererWorker/RendererWorker.js'
import * as Command from '../Command/Command.js'

export const main = async () => {
  await RendererWorker.listen(Command.execute)
}
