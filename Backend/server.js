const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
const verifyJwt = require("./middleware/verifyJwt")
require('dotenv').config()
const app = express();

const port = process.env.PORT || 5000

app.use(cors());
app.use(express.json());

app.use('/auth', require('./routes/authRoutes'))
app.use('/api/student', require('./routes/studentRoutes'))

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL)

        console.log("MongoDB connected....")

        app.listen(port, () => {
            console.log("Server is running...")
        })
    }catch(err){
        console.log(err.message)
    }
}


app.get('/', (req, res) => {
    res.json({
        "message": "connected to server"
    })
})

app.get('/dashboard', verifyJwt, (req, res) => {
    res.json({
        "verified": true,
        "role": req.user.role
    })
})


connectDB()
