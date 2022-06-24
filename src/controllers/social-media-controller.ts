import { Request, Response, NextFunction } from 'express'

import { SocialMedia } from '../models'
import { socialMediaSchema } from '../schemas'
import { getDefaultImagePath } from '../util'

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
