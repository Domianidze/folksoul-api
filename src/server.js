import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import 'dotenv/config'

import { AuthRoutes } from './routes/index.js'
import { errorMiddleware } from './middleware/index.js'
import { getMongoUrl } from './util/index.js'

const server = express()

server.use(bodyParser.json())

server.use(AuthRoutes)

server.use(errorMiddleware)

const startServer = async () => {
  try {
    await mongoose.connect(getMongoUrl())
    server.listen(8080)
  } catch (err) {
    console.error(err)
  }
}

startServer()
