import React from 'react'
import {Link} from"react-router-dom"
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Avatar } from "@mui/material";
import { logoutUser } from "../features/Userslice";
import { auth } from "../Firbase";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import'../navigation/Navbar.css'
const Navbar = () => {const user = useSelector(state => state.data.user.user);
    const dispathch = useDispatch();
    const handleLogout =() =>{
        dispathch(logoutUser());
        signOut(auth);
    };

  return (
    <div className="sidenav">
      <img
        className="sidenav__logo"
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt="Instagram Logo"
      />
    <nav className='Hnavbars'>
        <ul>
            <li>
            <button className="sidenav__button">
          <HomeIcon />
          <span><Link to="/Home">Home</Link></span>
        </button>
            </li>
            <li>
            <button className="sidenav__button">
          <SearchIcon />
          <span><Link  to="/Search">Search</Link></span>
        </button>
            </li>
            <li>
            <button className="sidenav__button" >
          <ExploreIcon />
          <span className='Explore'><Link to="/Explore">Explore</Link></span>
        </button>
            </li>
            <li>
            <button className="sidenav__button">
          <SlideshowIcon />
          <span><Link to="/Reels">Reels</Link></span>
        </button>
            </li>
            <li>
            <button className="sidenav__button">
          <ChatIcon />
          <span><Link to='/Message'>Messages</Link></span>
        </button>
            </li>
            <li>
            <button className="sidenav__button">
          <AddCircleOutlineIcon />
          <span><Link to='/Create'>Create</Link></span>
        </button>
            </li>
            <li>
            <button className="sidenav__button">
          <FavoriteBorderIcon />
          <span><Link to ='/Notification'>Notifications</Link></span>
        </button>
            </li>
        </ul>
    </nav>
    <di>
    <button className="sidenav__button">
          <Avatar>A</Avatar>
          <span>
            {user.username}
            <button onClick={handleLogout}  
            className="logout__button">Log out</button>
          </span>
        </button>
    </di>
    <div className="sidenav__more">
        <button className="sidenav__button">
          <MenuIcon />
          <span className="sidenav__buttonText"><Link>More</Link></span>
        </button>
      </div>
    </div>
  )
}

export default Navbar