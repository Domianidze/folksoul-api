import express from 'express'

import { register } from '../controllers/index.js'

const Router = express.Router()

Router.post('/register', register)

export default Router
