import * as WaitForIframeToBeLoaded from '../WaitForIframeToBeLoaded/WaitForIframeToBeLoaded.js'

const $Preview = document.querySelector('.Preview')

export const create = async () => {
  await WaitForIframeToBeLoaded.waitForIframeToBeLoaded($Preview)
  const { port1, port2 } = new MessageChannel()
  // @ts-ignore
  $Preview.contentWindow.postMessage({ port: port2 }, '*', [port2])
  return port1
}
