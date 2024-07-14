import React, { useState } from 'react';
import "./Login.css";
import {Link, useNavigate} from 'react-router-dom';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e => {
        e.preventDefault()

        signInWithEmailAndPassword(auth, email,password).then(auth => {
            history('/');
        })
        .catch(error=>alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email,password).then((auth) => {
            if (auth) {
                history('/')
            }
        })
        .catch(error => alert(error.message))
    }



  return (
    <div className='login'>
        <Link to='/'>
            <img className='login_logo' src="https://th.bing.com/th/id/OIP.Ku4iy6JfyZOZAKxOkfp0ewAAAA?rs=1&pid=ImgDetMain" alt='login'/>
        </Link>

        <div className='login_container'>
            <h1>Sign-in or create account</h1>
            <form>
                <h5>E-mail</h5>
                <input onChange={e => setEmail(e.target.value)} value={email} type='email' />

                <h5>Password</h5>
                <input onChange={e => setPassword(e.target.value)} value={password} type='password' />

                <button onClick={signIn} type='submit' className='login_signInButton'>Sign In</button>
            </form>

            <p>By signing-in you agree to the AMAZON CLONE conditions of use & sale. Please see our privacy notice, our cookies notice and our interest-based ads notice.</p>

            <button onClick={register} className='login_registerButton'>Create a new account</button>
        </div>

    </div>
  )
}

export default Login
