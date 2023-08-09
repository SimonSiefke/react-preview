import * as Content from '../Content/Content.js'

export const getFn = (method) => {
  switch (method) {
    case 'Content.set':
      return Content.set
    case 'Content.handleChange':
      return Content.handleChange
    default:
      throw new Error(`command not found ${method}`)
  }
}
