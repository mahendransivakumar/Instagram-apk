 import React , {useState} from 'react'
import Login from './Login'
import "./Authetication.css";
import Singup from './Singup';


function Authetication() {

  const [active , setActive] = useState("Singup");
  const handleChange =() => {
    setActive (active === "Login" ? "Signup" :"Login");
  }

  return ( <div className='authetication'>
    <div className="auth__left">
      <img src="https://i.insider.com/5fad6ca0355f4100197e5dd7?width=700" alt='' />
    </div>
    <div className='auth__right'>
      {active === "Login" ? (<Login/>):(<Singup/>) }
    
      <div className='auth__more'>
        
        <span >
        {active === "login" ?(<>Don't have an account ?<button onClick={handleChange}>
          Sign up</button></>) : (<>have an account ? <button onClick={handleChange}>Log In</button></>) }
          
        </span>
      </div>
    </div>
  </div>
  )
}

export default Authetication