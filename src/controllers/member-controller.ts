import { Request, Response, NextFunction } from 'express'
import fs from 'fs'

import { Member } from 'models'
import { addMemberSchema, editMemberSchema } from 'schemas'
import { ErrorType } from 'types'
import { getApiUrl, getDefaultImagePath, getImagePath } from 'util'

export const getMembers = async (_: Request, res: Response, next: NextFunction) => {
  try {
    const members = await Member.find().select('-__v')

    res.json(members)
  } catch (err) {
    next(err)
  }
}

export const getMember = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if(!req.params.id.match(/^[a-f\d]{24}$/i)) {
      const error: ErrorType = new Error("Invalid id.")
      error.statusCode = 422
      throw error
    }

    const member = await Member.findById(req.params.id).select('-__v')

    if(!member) {
      const error: ErrorType = new Error("Member with this id not found.")
      error.statusCode = 404
      throw error
    }

    res.json(member)
  } catch (err) {
    next(err)
  }
}

export const addMember = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await addMemberSchema.validateAsync(req.body)

    if(!req.body.avatarUrl) {
      req.body.avatarUrl = getDefaultImagePath('member')
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

export const changeMemberAvatar = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if(!req.body.memberId.match(/^[a-f\d]{24}$/i)) {
      const error: ErrorType = new Error("Invalid id.")
      error.statusCode = 422
      throw error
    }
    
    const member = await Member.findById(req.body.memberId)

    if(!req.file) {
      const error: ErrorType = new Error("Proper image is required.")
      error.statusCode = 422
      throw error
    }

    if (!member) {
      await fs.promises.unlink(req.file.path)
      
      const error: ErrorType = new Error("Member with this id not found.")
      error.statusCode = 404
      throw error
    }

    if(member.avatarUrl && member.avatarUrl !== getDefaultImagePath('member')) {
      const path = getImagePath(member.avatarUrl)

      if(fs.existsSync(path)) {
        await fs.promises.unlink (path)
      } 
    }

    member.avatarUrl = `${getApiUrl()}/${req.file.path}`

    await member.save()

    res.status(200).json({
      message: 'Avatar changed successfully!',
    })
  } catch (err) {
    next(err)
  }
}

export const editMember = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await editMemberSchema.validateAsync(req.body)
    
    if(!req.body.id.match(/^[a-f\d]{24}$/i)) {
      const error: ErrorType = new Error("Invalid id.")
      error.statusCode = 422
      throw error
    }

    const member = await Member.findOneAndUpdate(
      {
        _id: req.body.id
      },
      req.body
    )

    if (!member) {
      const error: ErrorType = new Error('No member found with this id')
      error.statusCode = 404
      throw error
    }

    res.status(200).json({
      message: 'Member updated successfully!',
    })
  } catch (err) {
    next(err)
  }
}

export const deleteMember = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if(!req.body.id.match(/^[a-f\d]{24}$/i)) {
      const error: ErrorType = new Error("Invalid id.")
      error.statusCode = 422
      throw error
    }

    const member = await Member.findByIdAndRemove(req.body.id)

    if (!member) {
      const error: ErrorType = new Error('No member found with this id.')
      error.statusCode = 404
      throw error
    }

    if(member.avatarUrl && member.avatarUrl !== getDefaultImagePath('member')) {
      const path = getImagePath(member.avatarUrl)

      if(fs.existsSync(path)) {
        await fs.promises.unlink(path)
      } 
    }

    res.status(200).json({
      message: 'Member deleted successfully!',
    })
  } catch (err) {
    next(err)
  }
}
