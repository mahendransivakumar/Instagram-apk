import React from 'react'
import Timeline from '../timeline/Timeline'
import Navbar from '../navigation/Navbar'
import "./common.css"
import Story from './Story'
export const Home = () => {
  return (
    <div className="homepage__timeline flex">
      <Navbar/>
      <Story/>
        <Timeline />
      </div>
  )
}
