import { useState, type ChangeEvent, type ChangeEventHandler, type FormEvent, type FormEventHandler } from 'react'
import './styles/loginOrRegister.css'




function LoginOrRegister() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event: any) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: any) => {
        setPassword(event.target.value);
    };
    const handleSubmit= (event: FormEvent) =>{
        event.preventDefault();
        console.log(email, password);
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
                    <label htmlFor="user-email">Email</label>
                    <input type="email" placeholder='email' id="user-email" onChange={handleEmailChange} required/>
                    <label htmlFor="user-password">Password</label>
                    <input type="password" placeholder='password' onChange={handlePasswordChange} id="user-password" required/>
                    <button type="submit">Login</button>
                </form>
                <p>Don't have an account? <a href="./login.html">Create an account.</a></p>
            </div>
        </div>
        </>
    )
}

export default LoginOrRegister;