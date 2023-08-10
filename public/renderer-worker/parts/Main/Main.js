import * as RendererProcess from '../RendererProcess/RendererProcess.js'
import * as Command from '../Command/Command.js'
import * as Content from '../Content/Content.js'
import * as PreviewProcess from '../PreviewProcess/PreviewProcess.js'
import * as PreviewContent from '../PreviewContent/PreviewContent.js'

const content = `const app = React.createElement("h1", null, "hello from 222");

const root = ReactDOM.createRoot(document.getElementById('app'))

root.render(app);

console.log(React);`

export const main = async () => {
  await RendererProcess.listen(Command.execute)
  await PreviewProcess.listen(Command.execute)
  await Content.hydrate()
  await Content.set(content)
  await Content.handleChange(content)
}
