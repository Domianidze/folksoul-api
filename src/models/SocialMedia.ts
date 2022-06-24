import mongoose from 'mongoose'

const { Schema } = mongoose

const socialMediaSchema = new Schema({
  iconUrl: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
})

const SocialMedia = mongoose.model('SocialMedia', socialMediaSchema)

export default SocialMedia