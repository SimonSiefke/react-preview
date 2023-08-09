import * as RendererProcess from '../RendererProcess/RendererProcess.js'

export const set = (value) => {
  RendererProcess.invoke('Content.set', value)
}
