import React from 'react'
import Navbar from '../navigation/Navbar'
import { Avatar } from "@mui/material";

export const Messages = () => {
  return (
    <div className='flex'><Navbar/>
    <div>
    <span className="avatar">
              <Avatar>M</Avatar>
            </span>
            <div>
            <span className="username">Atlee</span>
            </div>
    </div>
    </div>

  )
}
