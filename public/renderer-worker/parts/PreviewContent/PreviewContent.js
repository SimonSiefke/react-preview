import * as PreviewProcess from '../PreviewProcess/PreviewProcess.js'

export const set = (value) => {
  return PreviewProcess.invoke('PreviewContent.set', value)
}

export const evaluate = (code) => {
  return PreviewProcess.invoke('Evaluate.evaluate', code)
}
