import * as RendererProcess from '../RendererProcess/RendererProcess.js'

export const set = (value) => {
  return RendererProcess.invoke('Content.set', value)
}
