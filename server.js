import express from 'express'
import { createServer } from 'node:http'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = __dirname
const publicFolder = join(root, 'public')

const app = express()
app.use(express.static(publicFolder))

const handleListening = () => {
  console.log(`listening on http://localhost:3000`)
}

const main = () => {
  const server = createServer(app)
  server.listen(3000, handleListening)
}

main()
