import { Babel } from '../../../third-party/babel-standalone.js'

export const transform = (code, options = {}) => {
  return Babel.transform(code, options)
}
