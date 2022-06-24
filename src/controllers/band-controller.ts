import { Request, Response, NextFunction } from 'express'
import fs from 'fs'

import { Band } from '../models'
import { ErrorType } from '../types'
import { getDefaultImagePath, getImagePath } from '../util'

export const setLogo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const band = await Band.findOne()

    if(!req.file) {
      const error: ErrorType = new Error("Proper image is required.")
      error.statusCode = 422
      throw error
    }

    if(!band) {
      fs.unlinkSync(req.file.path)

      const error: ErrorType = new Error("Band not found.")
      error.statusCode = 404
      throw error
    }

    if(band.logoUrl && band.logoUrl !== getDefaultImagePath('band')) {
      const path = getImagePath(band.logoUrl)

      if(fs.existsSync(path)) {
        fs.unlinkSync(path)
      } 
    }

    band.logoUrl = `http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/${req.file.path}`

    await band.save()

    res.status(200).json({
      message: 'Logo set successfully!',
    })
  } catch (err) {
    next(err)
  }
}