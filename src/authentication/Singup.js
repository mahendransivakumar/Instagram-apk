import React ,{useState} from 'react'
import "./Singup.css";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword , updateProfile} from 'firebase/auth'
import{auth} from '../Firbase';
function Singup() {

    const [email , setEmail] = useState("");
    const [username , setUsername] = useState("");
    const[password , setPassword] = useState("");

    
    const handleSingup =() =>{
      createUserWithEmailAndPassword(auth,email,password).then
      (signInWithEmailAndPassword(auth,email,password).then
      (updateProfile(auth.currentUser,{displayName:username}))
      ).catch(err => {
        alert(err);
      });
    }
  return (
    <div className='singup'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png" alt='' />
        <input onChange={e => setEmail (e.target.value)} type="email" 
        placeholder='Email'
         value={email}
         />
         <input onChange={e => setUsername (e.target.value)} type="text" 
         placeholder='UserName'
         value={username}
          />
         <input onChange={e => setPassword (e.target.value)} type= "password"
          placeholder='Passworld'
          value={password}
          />
         <button onClick={handleSingup}>Sing Up</button>
    </div>
  )
}

export default Singup