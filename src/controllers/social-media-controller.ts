import { Request, Response, NextFunction } from 'express'
import fs from 'fs'

import { SocialMedia } from 'models'
import { addSocialMediaSchema, editSocialMediaSchema } from 'schemas'
import { ErrorType } from 'types'
import { getApiUrl, getDefaultImagePath, getImagePath } from 'util'

export const getSocialMedias = async (_: Request, res: Response, next: NextFunction) => {
  try {
    const socialMedias = await SocialMedia.find().select('-__v')

    res.json(socialMedias)
  } catch (err) {
    next(err)
  }
}

export const getSocialMedia = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if(!req.params.id.match(/^[a-f\d]{24}$/i)) {
      const error: ErrorType = new Error("Invalid id.")
      error.statusCode = 422
      throw error
    }

    const socialMedia = await SocialMedia.findById(req.params.id).select('-__v')

    if(!socialMedia) {
      const error: ErrorType = new Error("Social media with this id not found.")
      error.statusCode = 404
      throw error
    }

    res.json(socialMedia)
  } catch (err) {
    next(err)
  }
}

export const addSocialMedia = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await addSocialMediaSchema.validateAsync(req.body)

    if(!req.body.iconUrl) {
      req.body.iconUrl = getDefaultImagePath('social-media')
    }

    const response = await SocialMedia.create(req.body)

    res.status(201).json({
      message: 'Social Media added successfully!',
      socialMediaId: response._id,
    })
  } catch (err) {
    next(err)
  }
}

export const changeSocialMediaIcon = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if(!req.body.socialMediaId.match(/^[a-f\d]{24}$/i)) {
      const error: ErrorType = new Error("Invalid id.")
      error.statusCode = 422
      throw error
    }

    const socialMedia = await SocialMedia.findById(req.body.socialMediaId)

    if(!req.file) {
      const error: ErrorType = new Error("Proper image is required.")
      error.statusCode = 422
      throw error
    }

    if (!socialMedia) {
      await fs.promises.unlink(req.file.path)
      
      const error: ErrorType = new Error("Social media with this id not found.")
      error.statusCode = 404
      throw error
    }

    if(socialMedia.iconUrl && socialMedia.iconUrl !== getDefaultImagePath('social-media')) {
      const path = getImagePath(socialMedia.iconUrl)

      if(fs.existsSync(path)) {
        await fs.promises.unlink(path)
      } 
    }

    socialMedia.iconUrl = `${getApiUrl()}/${req.file.path}`

    await socialMedia.save()

    res.status(200).json({
      message: 'Icon changed successfully!',
    })
  } catch (err) {
    next(err)
  }
}

export const editSocialMedia = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await editSocialMediaSchema.validateAsync(req.body)

    if(!req.body.id.match(/^[a-f\d]{24}$/i)) {
      const error: ErrorType = new Error("Invalid id.")
      error.statusCode = 422
      throw error
    }

    const socialMedia = await SocialMedia.findOneAndUpdate(
      {
        _id: req.body.id
      },
      req.body
    )

    if (!socialMedia) {
      const error: ErrorType = new Error('No social media found with this id')
      error.statusCode = 404
      throw error
    }

    res.status(200).json({
      message: 'Social media updated successfully!',
    })
  } catch (err) {
    next(err)
  }
}

export const deleteSocialMedia = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if(!req.body.id.match(/^[a-f\d]{24}$/i)) {
      const error: ErrorType = new Error("Invalid id.")
      error.statusCode = 422
      throw error
    }

    const socialMedia = await SocialMedia.findByIdAndRemove(req.body.id)  

    if (!socialMedia) {
      const error: ErrorType = new Error('No social media found with this id.')
      error.statusCode = 404
      throw error
    }

    if(socialMedia.iconUrl && socialMedia.iconUrl !== getDefaultImagePath('social-media')) {
      const path = getImagePath(socialMedia.iconUrl)

      if(fs.existsSync(path)) {
        await fs.promises.unlink(path)
      } 
    }

    res.status(200).json({
      message: 'Social media deleted successfully!',
    })
  } catch (err) {
    next(err)
  }
}