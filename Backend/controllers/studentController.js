const Student = require('../models/students');

const addStudent = async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const age = req.body.age;
    const marks = req.body.marks;
    const course = req.body.course;

    if(!name || !email || !age){
        return res.status(403).json({
            "message": "missing fields"
        })
    }

    const duplicate = await Student.findOne({
        email: email
    })

    if(duplicate){
        return res.status(403).json({
            "message": "user already exists"
        })
    }

    const user = await Student.create({
        name: name,
        email: email,
        age: age,
        marks: marks,
        course: course
    })

    res.json(user)
}

const getStudent = async (req, res) => {
    const students = await Student.find();

    res.json({
        students: students
    })
}

const deleteStudent = async (req, res) => {
    const email = req.body.email;

    if(!email){
        return res.status(400).json({
            message: "Email required"
        })
    }

    try{
        await Student.deleteOne({
            email: email
        })

        res.json({
            "message": "deleted Successfully"
        })
    }catch(err){
        console.log(err.message)
    }
}

const getOneStudent = async (req, res) => {
    const email = req.body.email;

    if(!email){
        return res.status(400).json({
            message: "Email required"
        })
    }

    try{
        const student = await Student.findOne({
            email: email
        })

        res.json({
            'student': student
        })
    }catch(err){
        console.log(err.message)
    }
}

const editStudent = async (req, res) => {
    const email = req.body.email
    const name = req.body.name
    const age = req.body.age
    const marks = req.body.marks
    const course = req.body.course

    try{
        await Student.replaceOne(
            { email: email},
            {
                name: name,
                email: email,
                age: age,
                marks: marks,
                course: course
            }
        )

        res.json({
            "message": "success"
        })
    }catch(err){
        console.log(err.message)
    }
}

module.exports = { addStudent, getStudent, deleteStudent, getOneStudent, editStudent }