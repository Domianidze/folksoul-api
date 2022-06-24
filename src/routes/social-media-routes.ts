import express from 'express'

import { addSocialMedia, changeIcon, editSocialMedia, deleteSocialMedia } from '../controllers'

const Router = express.Router()

Router.post('/add-social-media', addSocialMedia)
Router.put('/change-icon', changeIcon)
Router.put('/edit-social-media', editSocialMedia)
Router.delete('/delete-social-media', deleteSocialMedia)

export default Router
