import express from 'express'

import { getSocialMedias, getSocialMedia, addSocialMedia, changeSocialMediaIcon, editSocialMedia, deleteSocialMedia } from 'controllers'
import { authMiddleware } from 'middleware'

const Router = express.Router()

Router.get('/social-medias', getSocialMedias)
Router.get('/social-media/:id', getSocialMedia)
Router.post('/add-social-media', authMiddleware, addSocialMedia)
Router.put('/change-social-media-icon', authMiddleware, changeSocialMediaIcon)
Router.put('/edit-social-media', authMiddleware, editSocialMedia)
Router.delete('/delete-social-media', authMiddleware, deleteSocialMedia)

export default Router
