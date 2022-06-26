import express from 'express'

import { getMembers, getMember, addMember, changeMemberAvatar, editMember, deleteMember } from '../controllers'
import { authMiddleware } from '../middleware'

const Router = express.Router()

Router.get('/get-members', getMembers)
Router.post('/get-member', getMember)
Router.post('/add-member', authMiddleware, addMember)
Router.put('/change-member-avatar', authMiddleware, changeMemberAvatar)
Router.put('/edit-member', authMiddleware, editMember)
Router.delete('/delete-member', authMiddleware, deleteMember)

export default Router
