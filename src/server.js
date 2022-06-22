import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

import { AuthRoutes } from './routes/index.js'

const server = express()

server.use(bodyParser.json())

server.use(AuthRoutes)

const startServer = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://sdomianidze:4GMX680AWm6LMtQS@cluster0.8bito.mongodb.net/main?retryWrites=true&w=majority'
    )
    server.listen(8080)
  } catch (err) {
    console.error(err)
  }
}

startServer()
