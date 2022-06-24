import express from 'express'

import { addSocialMedia, changeIcon, editSocialMedia } from '../controllers'

const Router = express.Router()

Router.post('/add-social-media', addSocialMedia)
Router.put('/change-icon', changeIcon)
Router.put('/edit-social-media', editSocialMedia)

export default Router
