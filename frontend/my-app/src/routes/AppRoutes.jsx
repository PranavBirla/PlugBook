import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Homepage from '../Pages/Homepage'
import Navbar from '../Components/Navbar'
import LoginPage from '../Pages/LoginPage'
import SignUpPage from '../Pages/SignUpPage'
import MapPage from '../Pages/MapPage';
import SlotsBooking from '../Pages/SlotsBooking'
import TicketPage from '../Pages/TicketPage'

const AppRoutes = () => {
  return (
    
      <Routes>
        <Route path='/home' element={<Homepage/>}  />
        <Route path='/login' element={<LoginPage/>}  />
        <Route path='/register' element={<SignUpPage/>}  />
        <Route path="/map" element={<MapPage />} />
        <Route path="/slots" element={<SlotsBooking />} /> 
        <Route path="/tickets" element={<TicketPage/>} /> 

        <Route path="/loader" element={<Loader />} />
      </Routes>
      
    
    
  )
}

export default AppRoutes
