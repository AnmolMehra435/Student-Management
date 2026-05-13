import axios from 'axios'

const handleRegister = async (email, pass, role) => {
    const newUser = {
        email: email,
        password: pass,
        role: role
    }

    try{
        await axios.post(
            'http://localhost:5000/auth/register',
            newUser
        )

        return true;
    }catch(err){
        console.log(err.response.data)
    }
}

const handleLogin = async (email, pass, navigate) => {
    const user = {
        email: email, 
        password: pass
    }

    try{
        const response = await axios.post(
            'http://localhost:5000/auth/login',
            user
        )

        const token = response.data.token

        if(token){
            localStorage.setItem('token', token);
            
            const role = response.data.role;

            if(role === 'Admin'){
                navigate('/admindashboard')
            }else{
                navigate('/studentdashboard', {
                    state: {
                        'email': response.data.email
                    }
                })
            }

            return true;
        }
    }catch(err){
        console.log(err.response.data)
    }
}


export { handleLogin, handleRegister }