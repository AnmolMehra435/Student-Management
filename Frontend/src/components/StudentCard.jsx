import { deleteStudent } from "../services/studentServices"
import { useNavigate } from "react-router-dom";

function StudentCard({ student }) {

    const navigate = useNavigate();
    const stuEmail = student.email

    const deleteRecord = async () => {
        await deleteStudent(stuEmail);

        window.location.reload();
    }

    const editRecord = () => {
        navigate('/editstudent', {
            state:{
                student: student
            }
        })
    }

    return(
        <div className="student-card">

            <h2>{student.name}</h2>

            <p>Age: {student.age}</p>

            <p>Email: {student.email}</p>

            <p>Marks: {student.marks}</p>

            <p>Course: {student.course}</p>

            <div className="card-buttons">
                <button onClick={editRecord}>Edit</button>
                <button onClick={deleteRecord}>Delete</button>
            </div>

        </div>
    )
}

export default StudentCard