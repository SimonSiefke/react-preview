import * as Content from '../Content/Content.js'
import * as IpcChildWithIframe from '../IpcChildWithIframe/IpcChildWithIframe.js'

export const getFn = (method) => {
  switch (method) {
    case 'Content.set':
      return Content.set
    case 'IpcChildWithIframe.create':
      return IpcChildWithIframe.create
    default:
      throw new Error(`command not found ${method}`)
  }
}
