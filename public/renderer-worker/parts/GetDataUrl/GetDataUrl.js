const prefix = 'data:text/javascript;base64,'

export const getDataUrl = (text) => {
  return prefix + btoa(text)
}
