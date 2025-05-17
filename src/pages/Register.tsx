import { useState, type FormEvent } from "react";
import { useNavigate } from 'react-router-dom'

function Register(){
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handelUsernameChange = (event: any) =>{
        setUsername(event.target.value);
    }

    const handleEmailChange = (event: any) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: any) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event: FormEvent) =>{
        
    }
    const goToLogin = () =>{
        navigate('/');
    }
    return (
        <>
            <div className='login-or-register-div'>
            <div className="login-page-header">
                <h1>To-Do<br/>Application</h1>
            </div>
            <div className="login-container">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="user-name">Username</label>
                    <input type="email" placeholder='email' id="user-name" onChange={handelUsernameChange} required/>
                    <label htmlFor="user-email">Email</label>
                    <input type="email" placeholder='email' id="user-email" onChange={handleEmailChange} required/>
                    <label htmlFor="user-password">Password</label>
                    <input type="password" placeholder='password' onChange={handlePasswordChange} id="user-password" required/>
                    <button type="submit">Login</button>
                </form>
                <p>Already have an account? <a onClick={goToLogin}>Login.</a></p>
            </div>
        </div>
        </>
    )
}
export default Register;