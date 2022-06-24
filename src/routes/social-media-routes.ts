import express from 'express'

import { addSocialMedia, changeIcon } from '../controllers'

const Router = express.Router()

Router.post('/add-social-media', addSocialMedia)
Router.put('/change-icon', changeIcon)

export default Router
