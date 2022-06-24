import mongoose from 'mongoose'

const { Schema } = mongoose

const bandSchema = new Schema({
    logoUrl: {
        type: String,
        required: true,
    },
    information: {
        type: String,
        required: true,
    }
}, {
    collection: 'band',
    capped: { max: 1 }
})

const Band = mongoose.model('band', bandSchema)

export default Band
