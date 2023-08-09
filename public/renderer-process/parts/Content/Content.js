import * as RendererWorker from '../RendererWorker/RendererWorker.js'

const $Code = document.querySelector('.Code')

export const set = (value) => {
  // @ts-ignore
  $Code.value = value
}

const handleInput = (event) => {
  const value = event.target.value
  RendererWorker.send('Content.handleChange', value)
}

export const hydrate = () => {
  $Code.oninput = handleInput
}
