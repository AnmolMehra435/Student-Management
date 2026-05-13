const User = require("../models/users")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const registerController = async (req, res) => {
    
    const email = req.body.email;
    const password = req.body.password;
    const role = req.body.role

    if(!email || !password || !role){
        return res.status(401).json({
            message: "missing credentials"
        })
    }

    const duplicate = await User.findOne({
        "email": email
    })

    if(duplicate){
        return res.status(403).json({
            "message": "User already exists"
        })
    }

    const hashPwd = await bcrypt.hash(password, 10);

    const user = await User.create({
        'email': email,
        'password': hashPwd,
        'role': role
    })

    res.json(user.email);
}

const loginController = async (req, res) =>{
    const email = req.body.email;
    const password = req.body.password;

    if(!email || !password){
        return res.status(403).json({
            "message": "Missing credentials"
        })
    }

    const existingUser = await User.findOne({
        "email": email
    })

    if(!existingUser){
        return res.status(403).json({
            "message": "User does not exist"
        })
    }

    const match = await bcrypt.compare(password, existingUser.password)

    if(match){
        const token = jwt.sign({
            email: existingUser.email,
            role: existingUser.role
        }, process.env.SUPER_SECRET_KEY)

        return res.json({
            'token': token,
            'email': email,
            'role': existingUser.role
        })
    }else{
        return res.status(403).json({
            "message": "invalid credentials"
        })
    }
}

module.exports = { registerController, loginController }