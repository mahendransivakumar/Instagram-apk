import React from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Navbar from '../navigation/Navbar';

const images = [
  
  "https://picsum.photos/3000/2000",
  "https://loremflickr.com/640/360",
  "https://picsum.photos/2000/2000",
    "https://picsum.photos/1500/2000",
    "https://picsum.photos/2000/2000",
    "https://picsum.photos/2000/1500",
    "https://picsum.photos/640/360",
    "https://picsum.photos/200/300",
    "https://picsum.photos/2000/3000",
]
export const Explore = () => {
  
  return (
  <>
  <div className='flex'>
  <Navbar/>
 
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr"}}>
                {images.map((image, i) => (
                    <img
                        key={i}
                        src={image}
                       style={{width:"100%"}}
                    />
                ))}
          </div>
         </div>
        
         </>
  )
}
