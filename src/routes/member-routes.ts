import express from 'express'

import { addMember } from '../controllers'

const Router = express.Router()

Router.post('/add-member', addMember)

export default Router
