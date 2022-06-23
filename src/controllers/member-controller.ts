import { Request, Response, NextFunction } from 'express'
import fs from 'fs'

import { Member } from '../models'
import { memberSchema } from '../schemas'
import { ErrorType } from '../types'

export const addMember = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await memberSchema.validateAsync(req.body)

    if(!req.body.avatarUrl) {
      req.body.avatarUrl = `http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/public/img/default-member.png`
    }

    const response = await Member.create(req.body)

    res.status(201).json({
      message: 'Member added successfully!',
      memberId: response._id,
    })
  } catch (err) {
    next(err)
  }
}

export const changeAvatar = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const member = await Member.findById(req.body.memberId)

    if(!req.file) {
      const error: ErrorType = new Error("Proper image is required.")
      error.statusCode = 422
      throw error
    }

    if (!member) {
      fs.unlinkSync(req.file.path)
      
      const error: ErrorType = new Error("Member with this id not found.")
      error.statusCode = 404
      throw error
    }

    if(member.avatarUrl) {
      const path = member.avatarUrl.replace(`http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/`, '')
      fs.unlinkSync(path)
    }

    member.avatarUrl = `http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/${req.file.path}`

    await member.save()

    res.status(200).json({
      message: 'Avatar changed successfully!',
    })
  } catch (err) {
    next(err)
  }
}