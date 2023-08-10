import * as PreviewContent from '../PreviewContent/PreviewContent.js'
import * as Evaluate from '../Evaluate/Evaluate.js'

export const getFn = (method) => {
  switch (method) {
    case 'PreviewContent.set':
      return PreviewContent.set
    case 'Evaluate.evaluate':
      return Evaluate.evaluate
    default:
      throw new Error(`command not found ${method}`)
  }
}
