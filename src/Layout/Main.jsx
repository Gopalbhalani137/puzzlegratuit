import React from 'react'
import Navbar from '../Components/NavBar'
import { Outlet } from 'react-router-dom'
import '../assets/css/style.css'
import Footer from '../Components/Footer'
function Main() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer />
    </div>
  )
}

export default Main
