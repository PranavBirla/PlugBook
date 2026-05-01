import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Homepage from '../Pages/Homepage'
import Navbar from '../Components/Navbar'
import LoginPage from '../Pages/LoginPage'

const AppRoutes = () => {
  return (
    
      <Routes>
        <Route path='/home' element={<Homepage/>}  />
        <Route path='/login' element={<LoginPage/>}  />
      </Routes>
      
    
    
  )
}

export default AppRoutes
