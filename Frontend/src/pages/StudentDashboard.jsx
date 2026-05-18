import axios from 'axios'
import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getOneStudent } from '../services/studentServices';
import '../styles/dashboard.css'


function StudentDashboard(){

    const navigate = useNavigate()
    const [loading, setLoading] = useState(true);
    const [validate, setValidate] = useState(false);
    const [student, setStudent] = useState({});
    const location = useLocation();
    const email = location.state?.email
    const [isStudent, setIsStudent] = useState(true)

    const logout = () => {
        localStorage.removeItem('token');
        navigate('/')
    }

    useEffect(() => {
        const token = localStorage.getItem('token');

        const verifyToken = async () => {
            try{
                const response = await axios.get(
                    '/api/dashboard',
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        } 
                    }
                )

                if(response.data.verified){
                    if(response.data.role === 'Student'){
                         setValidate(true);
                    }
                }
            }catch(err){
                console.log(err.response.data)
            }finally{
                setLoading(false);
            }
        }

        verifyToken()
    }, [])

    useEffect(() => {

        if(!email){
            return
        }
        const getStudent = async () => {
            try{
                const resStudent = await getOneStudent(email);

                if(!resStudent){
                    return setIsStudent(false);
                }

                setStudent({
                    'name': resStudent.name,
                    'email': resStudent.email,
                    'age': resStudent.age,
                    'marks': resStudent.marks,
                    'course': resStudent.course
                })
            }catch(err){
                console.log(err.message)
            }
        }
        getStudent();
    }, [email])

    if(loading){
        return(
            <h1>loading...</h1>
        )
    }

    if(validate){
        if(!isStudent){
            return (
                <h1>Didn't find any record with this email: {email}</h1>
            )
        }else{
            return(
                <>
                <h1>Student Dashboard</h1>
                <div className="container">
                    <h1>{student.name}</h1>
                    <h3>Email: {student.email}</h3>
                    <h3>Age: {student.age}</h3>
                    <h3>Marks: {student.marks}</h3>
                    <h3>Course: {student.course}</h3>
                    <button className='logout-btn' onClick={logout}>Logout</button>
                </div>
                </>
            )
        }
       
    }

    return(
        <h1>Forbidden</h1>
    )
}

export default StudentDashboard