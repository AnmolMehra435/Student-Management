import axios from 'axios'
const API_URL = import.meta.env.VITE_API_URL

const getStudent = async () => {
    try{
        const response = await axios.get(
            `${API_URL}/api/student`
        )

        const studentsDB = response.data.students;

        return studentsDB;
    }catch(err){
        console.log(err.response?.data || err.message);
    }
}

const addStudent = async (name, email, age, marks, course) => {
    
    const newStudent = {
        name: name,
        email: email,
        age: age,
        marks: marks,
        course: course
    }
    
    try{
        const response = await axios.post(
            `${API_URL}/api/student/addstudent`,
            newStudent
        )

        console.log(response.data)
    }catch(err){
        console.log(err.response?.data || err.message)
    }
}


const deleteStudent = async (email) => {
    const useremail = email;
    try{
        const response = await axios.post(
            `${API_URL}/api/student/deletestudent`,
            {
                email: useremail
            }
        )

        console.log(response.data)
    }catch(err){
        console.log(err.response?.data || err.message)
    }
}


const getOneStudent = async (email) => {
    const useremail = email;

    try{
        const response = await axios.post(
            `${API_URL}/api/student/getonestudent`,
            {
                email: useremail
            }
        )

         const student = response.data.student

         if(student){
            return student
         }
         
    }catch(err){
        console.log(err.response?.data || err.message) 
    }
}

const editStudent = async (name, email, age, marks, course) => {
    const student = {
        name: name,
        email: email,
        age: age,
        marks: marks,
        course: course
    }

    try{
       await axios.post(
            `${API_URL}/api/student/editstudent`,
            student
        )

        console.log("success")
    }catch(err){
        console.log(err.response?.data || err.message)
    }
}


export { getStudent, addStudent, deleteStudent, getOneStudent, editStudent }