import { useState } from "react";
import '../styles/loginPage.css'
import { handleLogin, handleRegister } from "../services/authServices";
import { useNavigate } from "react-router-dom"

function Login(){

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [role, setRole] = useState("");
    const [toggle, setToggle] = useState(true)

    const handleToggler = () => {
        setToggle(!toggle)
    }

    const register = async (e) => {
        e.preventDefault()
        
        const work = await handleRegister(email,pass,role)

        if(!work){
            alert('Wrong credentials')
        }
        
        setEmail("");
        setPass("");
        setRole("");
    }
    
    const login = async (e) => {
        e.preventDefault();
        
        const work = await handleLogin(email, pass, navigate) 

        if(!work){
            alert('Wrong credentials')
        }

        setEmail("");
        setPass("");
        setRole("");
    }

    if(!toggle){
        return(
                <>
                <div className="container">
                <form className="register-form" onSubmit={register}>
                    <h1>Register User</h1>
                    <input type="email" placeholder="Enter your email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                    <input type="password" placeholder="Create your password" value={pass} onChange={(e) => {setPass(e.target.value)}}/>
                    <select name="roles" value={role} onChange={(e) => {setRole(e.target.value)}}>
                        <option value="">Choose your role</option>
                        <option value="Student">Student</option>
                        <option value="Admin">Admin</option>
                    </select>
                    <button type="submit">Register</button>
                </form>
                <p>Already Have an account? <button onClick={handleToggler}>Login</button></p>
                </div>
                </>
            )              
    }else{
        return(
            <>
            <div className="container">
            <form className="register-form" onSubmit={login}>
                <h1>Login User</h1>
                <input type="email" placeholder="Enter your email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                <input type="password" placeholder="Create your password" value={pass} onChange={(e) => {setPass(e.target.value)}}/>
                <button className="login-btn" type="submit">Login</button>
            </form>
            <p>Don't Have an account? <button onClick={handleToggler}>Register</button></p>
            </div>
            </>
        )
    }

}

export default Login