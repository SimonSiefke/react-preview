const workerUrl = new URL(
  '../renderer-worker/rendererWorkerMain.js',
  import.meta.url,
).toString()

const worker = new Worker(workerUrl, {
  type: 'module',
  name: 'Renderer Worker',
})
