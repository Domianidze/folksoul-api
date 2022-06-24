import express from 'express'

import { getSocialMedias, addSocialMedia, changeIcon, editSocialMedia, deleteSocialMedia } from '../controllers'

const Router = express.Router()

Router.get('/get-social-medias', getSocialMedias)
Router.post('/add-social-media', addSocialMedia)
Router.put('/change-icon', changeIcon)
Router.put('/edit-social-media', editSocialMedia)
Router.delete('/delete-social-media', deleteSocialMedia)

export default Router
