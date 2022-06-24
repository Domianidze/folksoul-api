import mongoose from 'mongoose'
import 'dotenv/config'

import { Band } from '../models'
import { getMongoUrl, getDefaultImagePath } from '../util'

const createBand = async () => {
  try {
    const database = await mongoose.connect(getMongoUrl())

    await Band.create({
        logoUrl: getDefaultImagePath('band'),
        information: 'No information yet.'
    })
    
    console.log('band created successfully')

    database.disconnect()
  } catch (err) {
    console.error(err)
  }
}

createBand()
