import express from 'express'

import { setLogo } from '../controllers'

const Router = express.Router()

Router.put('/set-logo', setLogo)

export default Router
