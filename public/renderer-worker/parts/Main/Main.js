import * as RendererProcess from '../RendererProcess/RendererProcess.js'
import * as Command from '../Command/Command.js'
import * as Content from '../Content/Content.js'

export const main = async () => {
  await RendererProcess.listen(Command.execute)
  await Content.set('test content')
}
