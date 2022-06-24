import express from 'express'

import { setLogo, setInformation } from '../controllers'

const Router = express.Router()

Router.put('/set-logo', setLogo)
Router.put('/set-information', setInformation)

export default Router
