import * as RendererProcess from '../RendererProcess/RendererProcess.js'
import * as Command from '../Command/Command.js'
import * as Content from '../Content/Content.js'
import * as PreviewProcess from '../PreviewProcess/PreviewProcess.js'
import * as PreviewContent from '../PreviewContent/PreviewContent.js'

export const main = async () => {
  await RendererProcess.listen(Command.execute)
  await PreviewProcess.listen(Command.execute)
  const content = 'test content'
  await Content.set(content)
  await PreviewContent.set(content)
}
