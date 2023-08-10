import * as Babel from '../Babel/Babel.js'

export const transformCode = (code) => {
  return Babel.transform(code)
}
