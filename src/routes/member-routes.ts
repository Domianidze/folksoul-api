import express from 'express'

import { addMember, changeAvatar } from '../controllers'

const Router = express.Router()

Router.post('/add-member', addMember)
Router.post('/change-avatar', changeAvatar)

export default Router
