import { useState, type FormEvent } from 'react'
  import { createClient } from '@supabase/supabase-js'
  import { Auth } from '@supabase/auth-ui-react'
import './styles/loginOrRegister.css'
import { useNavigate } from 'react-router-dom';
import { supabase_client } from '../supabase';
import { useEffect } from 'react';




function Login() {
    const [userEmail, setEmail] = useState('');
    const [userPassword, setPassword] = useState('');
    const navigator = useNavigate();

    const handleEmailChange = (event: any) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: any) => {
        setPassword(event.target.value);
    };
    const handleSubmit= (event: FormEvent) =>{
        event.preventDefault();
        console.log(userEmail, userPassword);
        async function signUpNewUser() {
            const { data, error } = await supabase_client.auth.signInWithPassword({
                email: userEmail,
                password: userPassword,
            });
            if(data.user){
                localStorage.setItem('user-is-logged-in', "true");
                navigator('/home');
            }
        }
        signUpNewUser();
        
    }
    const goToRegisterPage = () => {
        navigator('/register')
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
                <p>Don't have an account? <a onClick={goToRegisterPage}>Create an account.</a></p>
            </div>
        </div>
        </>
    )
}

export default Login;