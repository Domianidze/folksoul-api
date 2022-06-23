import { Request, Response, NextFunction } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import { User } from '../models'
import { authSchema } from '../schemas'
import { ErrorType } from '../types'

export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await authSchema.validateAsync(req.body)

    const existingUser = await User.findOne({ username: req.body.username })

    if (existingUser) {
      const error: ErrorType = new Error('Username is already taken.')
      error.statusCode = 422
      throw error
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 12)

    const response = await User.create({
      username: req.body.username,
      password: hashedPassword,
    })

    res.status(201).json({
      message: 'Registered successfully!',
      userId: response._id,
    })
  } catch (err) {
    next(err)
  }
}

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await authSchema.validateAsync(req.body)

    const loadedUser = await User.findOne({ username: req.body.username })
    if (!loadedUser) {
      const error: ErrorType = new Error("User with this username doesn't exist.")
      error.statusCode = 404
      throw error
    }
    const correctPassword = await bcrypt.compare(
      req.body.password,
      loadedUser.password
    )
    if (!correctPassword) {
      const error: ErrorType = new Error('Invalid Password')
      error.statusCode = 401
      throw error
    }

    const token = jwt.sign(
      {
        username: loadedUser.username,
        userId: loadedUser.id.toString(),
        expiresIn: '1h',
      },
      '~5N2wZsiGkP;l_+BeK*{>)y"))C[fM',
      { expiresIn: '1h' }
    )

    res.status(200).json({
      token,
      userId: loadedUser.id.toString(),
    })
  } catch (err) {
    next(err)
  }
}
