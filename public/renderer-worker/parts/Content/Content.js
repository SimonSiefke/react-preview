import * as PreviewContent from '../PreviewContent/PreviewContent.js'
import * as RendererProcess from '../RendererProcess/RendererProcess.js'
import * as TransformCode from '../TransformCode/TransformCode.js'
import * as GetDataUrl from '../GetDataUrl/GetDataUrl.js'

export const hydrate = () => {
  return RendererProcess.invoke('Content.hydrate')
}

export const set = (value) => {
  return RendererProcess.invoke('Content.set', value)
}

export const handleChange = async (value) => {
  const transformed = TransformCode.transformCode(value)
  const dataUrl = GetDataUrl.getDataUrl(value)
  console.log({ dataUrl })
  await PreviewContent.evaluate(dataUrl)
}
