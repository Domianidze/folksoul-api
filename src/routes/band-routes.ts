import express from 'express'

import { getBandData, setBandLogo, setBandInformation } from '../controllers'
import { authMiddleware } from '../middleware'

const Router = express.Router()

Router.get('/get-band-data', getBandData)
Router.put('/set-logo', authMiddleware, setBandLogo)
Router.put('/set-information', authMiddleware, setBandInformation)

export default Router
