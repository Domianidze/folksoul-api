import express, { Express } from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import SwaggerUI from 'swagger-ui-express'
import 'dotenv/config'

import { authRoutes, memberRoutes, socialMediaRoutes, bandRoutes } from './routes'
import { corsMiddleware, errorMiddleware, multerMiddleware, swaggerMiddleware } from './middleware'
import { getMongoUrl } from './util'

const server: Express = express()

server.use(bodyParser.json())
server.use(multerMiddleware)
server.use('/public', express.static(path.join('public')));
server.use('/storage', express.static(path.join('storage')));

server.use(corsMiddleware)

server.use('/api-docs', SwaggerUI.serve, swaggerMiddleware())

server.use(authRoutes)
server.use(memberRoutes)
server.use(socialMediaRoutes)
server.use(bandRoutes)

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
