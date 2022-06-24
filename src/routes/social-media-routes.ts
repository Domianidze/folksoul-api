import express from 'express'

import { addSocialMedia } from '../controllers'

const Router = express.Router()

Router.post('/add-social-media', addSocialMedia)

export default Router
