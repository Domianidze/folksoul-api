import express from 'express'

import { register, login } from '../controllers/index.js'

const Router = express.Router()

Router.post('/register', register)

Router.post('/login', login)

export default Router
