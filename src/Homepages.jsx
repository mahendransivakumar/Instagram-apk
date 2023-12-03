import React from "react";
import "./Homepage.css";
import{BrowserRouter, Route, Routes}from'react-router-dom'
import { Explore } from "./pages/Explore";
import { Home } from "./pages/Home";
import { Reels } from "./pages/Reels";
import { Searching } from "./pages/Searching";
import { Create } from "./pages/Create";
import { Messages } from "./pages/Messages";
import { Notifications } from "./pages/Notifications";
import Navbar from "./navigation/Navbar";
import App from "./App";

function Homepages() {
  return (
    
    <div className="homepage">
      
      <div className="homepage__navWraper">
      
        <BrowserRouter>
        <Routes>
          <Route path="/Explore" element={<Explore/>}/>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/home" exact element={<Home/>}/>
          <Route path="/Reels" element={<Reels/>}/>
          <Route path="/Search" element={<Searching/>}/>
          <Route path="/create" element={<Create/>}/>
          <Route path="/message" element={<Messages/>}/>
          <Route path="/Notification" element={<Notifications/>}/>
        </Routes>
        </BrowserRouter>
      </div>
      
    </div>
  );
}

export default Homepages;