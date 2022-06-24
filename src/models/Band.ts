import mongoose from 'mongoose'

const { Schema } = mongoose

const bandSchema = new Schema({
    logoUrl: {
        type: String,
    },
    information: {
        type: String,
    }
}, {
    collection: 'band',
    capped: { max: 1 }
})

const Band = mongoose.model('band', bandSchema)

export default Band
