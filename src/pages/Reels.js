import React from 'react'
import ReactPlayer from 'react-player'
import Navbar from '../navigation/Navbar'
export const Reels = () => {


  
  return (
    <div className='flex'>
      <Navbar/>
      <div>
      <ReactPlayer url="https://video.vidyard.com/watch/YBvcF2BEfvKdowmfrRwk57" style={{padding:"20px" , margin:"20px"}}  />
      <ReactPlayer url="https://streamable.com/ifjh" style={{padding:"20px" , margin:"20px"}} />
      <ReactPlayer url="https://home.wistia.com/medias/29b0fbf547" style={{padding:"20px" , margin:"20px"}}/>
      <ReactPlayer url ="https://home.wistia.com/medias/e4a27b971d" style={{padding:"20px" , margin:"20px"}} />
      </div>
    </div>
  )
}
