import * as PreviewContent from '../PreviewContent/PreviewContent.js'

export const getFn = (method) => {
  switch (method) {
    case 'PreviewContent.set':
      return PreviewContent.set
    default:
      throw new Error(`command not found ${method}`)
  }
}
