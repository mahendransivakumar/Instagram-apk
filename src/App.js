import {useDispatch, useSelector} from 'react-redux';
import './App.css';
import Authetication from './authentication/Authentication';
import { useEffect } from 'react';
import { auth } from './Firbase';
import { LoginUser, Userslice, setLoading } from './features/Userslice';
import Sidenav from './navigation/Sidenav';
import Timeline from './timeline/Timeline';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Explore from './pages/Explore';
import Navbar from './navigation/Navbar';
import Homepages from './Homepages';




function App() {
  const dispathch = useDispatch();


  useEffect(()=>{
    auth.onAuthStateChanged(authUser => {
      if (authUser){
        dispathch(LoginUser({
          uid:authUser.uid,
          username: authUser.displayName, 
          email: authUser.email,
        })
        );
        dispathch(setLoading(false));
      }else{
        console.log("User is not logged in ");
      }
    })
  }, []);

  const user = useSelector (state => state.data.user.user );
  const isLoading = useSelector((state) => state.data.user.isLoading);
  return (
    
    
    <div className="App">
     
     
     <>{user ? (<Homepages/>): (<Authetication/>)}</> 
      
      </div>
    
  );
  
}

export default App;
