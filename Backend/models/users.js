const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ['Admin', 'Student']
    }
})

module.exports = mongoose.model('User', usersSchema)