import { useState } from 'react'
import { addStudent } from '../services/studentServices'
import { useNavigate } from 'react-router-dom'
import '../styles/addPage.css'


function AddStudent(){

    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("")
    const [marks, setMarks] = useState("")
    const [course, setCourse] = useState("")

    const goBack = () => {
        navigate('/admindashboard')
    }

    const addStu = async (e) => {
        e.preventDefault();

        await addStudent(name, email, age, marks, course)

        navigate('/admindashboard')
    }

    return (
        <>
        <h1 className='add-header'>Add Student</h1>
        <div className="container">
            <form className='add-form' onSubmit={addStu}>
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

export default AddStudent