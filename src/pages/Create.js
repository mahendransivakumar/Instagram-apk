import React, { useState } from 'react'
import Navbar from '../navigation/Navbar'
import "./common.css"

export const Create = () => {
  const[files , setFile]= useState()
  const handleChange =(event) =>{
    setFile(event.targer.files);
  }
  function handkleUplode() {
    const fromData = new FormData();
    for (let i=0 ; i< files.length; i++){
      FormData.append('Image[${i}]',files[0])
    }
    fetch('https://httpbin.org/post', {method: 'POST',body: FormData
  }).then (res=>res.json()).then(data=>console.log(data));
  }
  return (
    <div>
      <div className='create-main-container flex'>
      <Navbar/>
    <div>
      <input type='file' multiple onChange={handleChange}/>
      <button>upload</button>
    </div>
    </div>
    </div>
  )
}
