import mongoose from 'mongoose'
import 'dotenv/config'

import { Band } from 'models'
import { getMongoUrl, getDefaultImagePath } from 'util'

const createBand = async () => {
  try {
    const database = await mongoose.connect(getMongoUrl())

    const band = await Band.findOne()

    if(band) {
      throw new Error('band already exists')
    }

    await Band.create({
        logoUrl: getDefaultImagePath('band'),
        information: 'ინფორმაცია ჯერ–ჯერობით არ არის.'
    })
    
    console.log('band created successfully')

    database.disconnect()
  } catch (err) {
    console.error(err)
  }
}

createBand()
