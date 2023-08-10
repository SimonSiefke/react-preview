import * as PreviewContent from '../PreviewContent/PreviewContent.js'
import * as RendererProcess from '../RendererProcess/RendererProcess.js'
import * as TransformCode from '../TransformCode/TransformCode.js'

export const hydrate = () => {
  return RendererProcess.invoke('Content.hydrate')
}

export const set = (value) => {
  return RendererProcess.invoke('Content.set', value)
}

export const handleChange = async (value) => {
  const transformed = TransformCode.transformCode(value)
  console.log({ transformed })
  await PreviewContent.evaluate(value)
}
