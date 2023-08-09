export const getRendererWorkerUrl = () => {
  const workerUrl = new URL(
    '../../../renderer-worker/rendererWorkerMain.js',
    import.meta.url,
  ).toString()
  return workerUrl
}
