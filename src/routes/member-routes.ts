import express from 'express'

import { addMember, changeAvatar, editMember, deleteMember } from '../controllers'

const Router = express.Router()

Router.post('/add-member', addMember)
Router.put('/change-avatar', changeAvatar)
Router.put('/edit-member', editMember)
Router.delete('/delete-member', deleteMember)

export default Router
