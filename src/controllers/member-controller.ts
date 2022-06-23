import { Request, Response, NextFunction } from 'express'

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