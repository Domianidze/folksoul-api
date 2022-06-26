import express from 'express'

import { getSocialMedias, addSocialMedia, changeSocialMediaIcon, editSocialMedia, deleteSocialMedia } from '../controllers'
import { authMiddleware } from '../middleware'

const Router = express.Router()

Router.get('/get-social-medias', getSocialMedias)
Router.post('/add-social-media', authMiddleware, addSocialMedia)
Router.put('/change-icon', authMiddleware, changeSocialMediaIcon)
Router.put('/edit-social-media', authMiddleware, editSocialMedia)
Router.delete('/delete-social-media', authMiddleware, deleteSocialMedia)

export default Router
