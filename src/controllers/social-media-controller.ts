import { Request, Response, NextFunction } from 'express'
import fs from 'fs'

import { SocialMedia } from '../models'
import { socialMediaSchema } from '../schemas'
import { ErrorType } from '../types'
import { getDefaultImagePath, getImagePath } from '../util'

export const addSocialMedia = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await socialMediaSchema.validateAsync(req.body)

    if(!req.body.iconUrl) {
      req.body.iconUrl = getDefaultImagePath('social-media')
    }

    const response = await SocialMedia.create(req.body)

    res.status(201).json({
      message: 'Social Media added successfully!',
      memberId: response._id,
    })
  } catch (err) {
    next(err)
  }
}

export const changeIcon = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const socialMedia = await SocialMedia.findById(req.body.socialMediaId)

    if(!req.file) {
      const error: ErrorType = new Error("Proper image is required.")
      error.statusCode = 422
      throw error
    }

    if (!socialMedia) {
      fs.unlinkSync(req.file.path)
      
      const error: ErrorType = new Error("Social media with this id not found.")
      error.statusCode = 404
      throw error
    }

    if(socialMedia.iconUrl && socialMedia.iconUrl !== getDefaultImagePath('social-media')) {
      const path = getImagePath(socialMedia.iconUrl)

      if(fs.existsSync(path)) {
        fs.unlinkSync(path)
      } 
    }

    socialMedia.iconUrl = `http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/${req.file.path}`

    await socialMedia.save()

    res.status(200).json({
      message: 'Icon changed successfully!',
    })
  } catch (err) {
    next(err)
  }
}
