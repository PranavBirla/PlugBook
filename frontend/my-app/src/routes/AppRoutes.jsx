import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Homepage from '../Pages/Homepage'
import Navbar from '../Components/Navbar'
import LoginPage from '../Pages/LoginPage'
import Login from '../Pages/SignUpPage'
import SignUpPage from '../Pages/SignUpPage'

const AppRoutes = () => {
  return (
    
      <Routes>
        <Route path='/home' element={<Homepage/>}  />
        <Route path='/login2' element={<LoginPage/>}  />
        <Route path='/register' element={<SignUpPage/>}  />
      </Routes>
      
    
    
  )
}

export default AppRoutes
