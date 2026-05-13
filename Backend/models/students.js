const mongoose = require('mongoose');

const studentsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    },
    marks: Number,
    course: {
        type: String,
        enum: ['MCA', 'BCA', 'Btech']
    }
})

module.exports = mongoose.model('Student', studentsSchema)