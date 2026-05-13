import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { editStudent } from '../services/studentServices';
import '../styles/addPage.css'


function EditStudent(){

    const navigate = useNavigate()

    const location = useLocation();
    const student = location.state?.student;

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("")
    const [marks, setMarks] = useState("")
    const [course, setCourse] = useState("")

    const goBack = () => {
        navigate('/admindashboard')
    }

    useEffect(() => {
        if(student){
            setName(student.name);
            setEmail(student.email);
            setAge(student.age);
            setMarks(student.marks);
            setCourse(student.course);
        }

    }, [student])

    const editStu = async (e) => {
        e.preventDefault()
        await editStudent(name, email, age, marks, course);

        navigate('/admindashboard')
    }

    return (
        <>
        <h1 className='add-header'>Edit Student</h1>
        <div className="container">
            <form className='add-form' onSubmit={editStu}>
                <input type="text" placeholder='Enter Name' value={name} onChange={(e) => {setName(e.target.value)}} />
                <input type="email" placeholder='Enter Email' value={email} onChange={(e) => {setEmail(e.target.value)}} />
                <input type="number" placeholder='Enter Age' value={age} onChange={(e) => {setAge(e.target.value)}} />
                <input type="number" placeholder='Enter Marks' value={marks} onChange={(e) => {setMarks(e.target.value)}} />
                <select value={course} onChange={(e) => {setCourse(e.target.value)}}>
                    <option value="">Select Course</option>
                    <option value="Btech">Btech</option>
                    <option value="BCA">BCA</option>
                    <option value="MCA">MCA</option>
                </select>
                <div className="button">
                    <button type="submit">Submit</button>
                    <button onClick={goBack}>Cancel</button>
                </div>
            </form>
        </div>
        </>
    )
}

export default EditStudent