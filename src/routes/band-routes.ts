import express from 'express'

import { getBandData, setBandLogo, setBandInformation } from '../controllers'
import { authMiddleware } from '../middleware'

const Router = express.Router()

Router.get('/get-band-data', getBandData)
Router.put('/set-band-logo', authMiddleware, setBandLogo)
Router.put('/set-band-information', authMiddleware, setBandInformation)

export default Router
