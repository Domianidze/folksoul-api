import mongoose from 'mongoose'

const { Schema } = mongoose

const memberSchema = new Schema({
  avatarUrl: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  instrument: {
    type: String,
    required: true,
  },
  orbitWidth: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  biography: {
    type: String,
    required: true,
  },
})

const Member = mongoose.model('Member', memberSchema)

export default Member
