import bcrypt from 'bcrypt'

import { User } from '../models/index.js'

export const register = async (req, res) => {
  try {
    const existingUser = await User.findOne({ username: req.body.username })

    if (existingUser) {
      const error = new Error('Username is already taken.')
      error.statusCode = 422
      throw error
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 12)
    const user = new User({
      username: req.body.username,
      password: hashedPassword,
    })

    const response = await user.save()

    res.status(201).json({
      message: 'Registered successfully!',
      userId: response._id,
    })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    res.status(err.statusCode).json({
      message: err.message,
    })
  }
}
