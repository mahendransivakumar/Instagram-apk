import React from 'react'
import { Avatar } from "@mui/material";
const Story = () => {
  return (
    <div>
        <div className='flex'>
    <div>
    <span className="avatar">
              <Avatar>A</Avatar>
            </span>
            <div>
            <span className="username">Arul</span>
            </div>
    </div>
    <br/>
    <div>
    <span className="avatar">
              <Avatar style={{marginLeft:"10px"}}>G</Avatar>
            </span>
            <div>
            <span className="username" style={{marginLeft:"10px"}}>Gopi</span>
            </div>
    </div>
    <div>
        
    </div>
    </div>
    </div>
  )
}

export default Story