import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import Auth from './Pages/Auth/Auth.jsx'

const RoutesCollect = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element ={<Home />}/>
        <Route path="/Auth" element = {<Auth />}/>
      </Routes>
    </div>
  )
}

export default RoutesCollect
