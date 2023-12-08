import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import Auth from './Pages/Auth/Auth.jsx'
import Questions from './Pages/Questions/Questions.jsx'
import AskQuestion from './Pages/AskQuestion/AskQuestion.jsx'

const RoutesCollect = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element ={<Home />}/>
        <Route path="/Auth" element = {<Auth />}/>
        <Route path="/Questions" element = {<Questions />}/>
        <Route path="/AskQuestion" element = {<AskQuestion />}/>
      </Routes>
    </div>
  )
}

export default RoutesCollect
