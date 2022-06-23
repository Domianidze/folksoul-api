import express, { Express } from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import 'dotenv/config'

import { authRoutes, memberRoutes } from './routes'
import { errorMiddleware } from './middleware'
import { getMongoUrl } from './util'

const server: Express = express()

server.use('/public', express.static(path.join('public')));
server.use(bodyParser.json())

server.use(authRoutes)
server.use(memberRoutes)

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
