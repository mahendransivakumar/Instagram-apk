import React, { useState } from 'react'
import "./Login.css";
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../Firbase'
function Login() {
    const [email , setEmail] = useState("");
    const[password , setPassword] = useState("");

    const handleLogin = () => {
      signInWithEmailAndPassword(auth,email,password);
    };
  return (
    <div className='login'>
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png" alt='' />
         <input onChange={e => setEmail(e.target.value)} type="email" 
         placeholder='Email'
         value={email} 
         />
         <input  onChange={e => setPassword(e.target.value)} type= "password" 
         placeholder='Passworld'
         value={password}
         />
         <button onClick={handleLogin}>Log In</button>
    </div>
  )
}

export default Login