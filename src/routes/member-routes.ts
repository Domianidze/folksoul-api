import express from 'express'

import { addMember, changeAvatar, editMember } from '../controllers'

const Router = express.Router()

Router.post('/add-member', addMember)
Router.put('/change-avatar', changeAvatar)
Router.put('/edit-member', editMember)

export default Router
