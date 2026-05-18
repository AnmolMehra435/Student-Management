import axios from 'axios'
import { useState, useEffect } from 'react'
import StudentCard from '../components/StudentCard';
import { getStudent } from '../services/studentServices';
import { useNavigate } from 'react-router-dom';
import '../styles/dashboard.css'


function AdminDashboard(){
    const API_URL = import.meta.env.VITE_API_URL

    const navigate = useNavigate()

    const [loading, setLoading] = useState(true);
    const [validate, setValidate] = useState(false);
    const [students, setStudents] = useState([])
    const [allStudents, setAllStudents] = useState([])

    const logout = () => {
        localStorage.removeItem('token');
        navigate('/')
    }


    useEffect(() => {
        const token = localStorage.getItem('token');

        const verifyToken = async () => {
            try{
                const response = await axios.get(
                    `${API_URL}/dashboard`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        } 
                    }
                )

                if(response.data.verified){
                    if(response.data.role === 'Admin'){
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
        const fetchStudents = async () => {
            const studentsDB = await getStudent();

            setStudents(studentsDB)
            setAllStudents(studentsDB)
        }

        fetchStudents()
    }, [])


    const redirectAddPage = () => {
        navigate('/addstudent')
    }

    const searchStudent = (e) => {
        const name = e.target.value;

        if(name === ""){
            setStudents(allStudents)
        }else{
            const filterStudents = allStudents.filter((student) => student.name.toLowerCase().includes(name.toLowerCase()))
            setStudents(filterStudents)
        }
    }

    if(loading){
        return(
            <h1>loading...</h1>
        )
    }

   
if(validate){
  
    return(
        <>
            <h1>Admin Dashboard</h1>
            <div className="container">

                <div className="admin-controls">

                    <button onClick={redirectAddPage}>Add Student</button>

                    <input
                        type="text"
                        placeholder="Search student..."
                        onChange={searchStudent}
                    />
                    
                    <button onClick={logout}>Logout</button>
                </div>

                <div className="students-container">

                    {
                        students.map((student) => (
                            <StudentCard 
                                key={student.id}
                                student={student}
                            />
                        ))
                    }
                
                </div>
            </div>
        </>
    )

    }

    return(
        <h1>Forbidden</h1>
    )
}

export default AdminDashboard