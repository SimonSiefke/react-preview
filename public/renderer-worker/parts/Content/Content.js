import * as RendererProcess from '../RendererProcess/RendererProcess.js'
import * as PreviewContent from '../PreviewContent/PreviewContent.js'

export const hydrate = () => {
  return RendererProcess.invoke('Content.hydrate')
}

export const set = (value) => {
  return RendererProcess.invoke('Content.set', value)
}

export const handleChange = async (value) => {
  await PreviewContent.set(value)
}
