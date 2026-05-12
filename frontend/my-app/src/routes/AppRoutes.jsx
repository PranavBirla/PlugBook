import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Homepage from '../Pages/Homepage'
import Navbar from '../Components/Navbar'
import LoginPage from '../Pages/LoginPage'
import SignUpPage from '../Pages/SignUpPage'
import MapPage from '../Pages/MapPage';
import SlotsBooking from '../Pages/SlotsBooking'
import TicketPage from '../Pages/TicketPage'
import AvailabilityPage from '../Pages/AvailabilityPage'
import Loader from "../Components/Loader"
import LandingPage from "../Pages/LandingPage"
import BgIcons from "../Components/BgIcons"
import ActiveSlotBookings from '../Pages/ActiveSlotBookingsPage'
import HistorySlotBookings from '../Pages/HistorySlotBookings'
import UserProfilePage from "../Pages/UserProfilePage"
import StationUploadPage from '../Pages/StationUploadPage'

const AppRoutes = () => {
  return (
    
      <Routes>
        <Route path="/" element={<LandingPage/>} /> 
        <Route path='/home' element={<Homepage/>}  />
        <Route path='/login' element={<LoginPage/>}  />
        <Route path='/register' element={<SignUpPage/>}  />
        <Route path="/map" element={<MapPage />} />
        <Route path="/slots" element={<SlotsBooking />} /> 
        <Route path="/tickets" element={<TicketPage/>} /> 
        <Route path="/bgicons" element={<BgIcons/>} /> 
        <Route path="/availability" element={<AvailabilityPage/>} /> 
        <Route path="/activebooking" element={<ActiveSlotBookings/>} /> 
        <Route path="/historybooking" element={<HistorySlotBookings/>} /> 
        <Route path="/user" element={<UserProfilePage/>} /> 
        <Route path="/station-upload" element={<StationUploadPage/>} /> 

        <Route path="/loader" element={<Loader />} />
      </Routes>
      
    
    
  )
}

export default AppRoutes
