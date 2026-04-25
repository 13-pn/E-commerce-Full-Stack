import React from 'react'
import Nav from './Nav'
import NavLinkes from '../Navbar/NavLinkes'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'


const Layout = () => {
  return (
    <div>
    <Nav />
    <NavLinkes />
    <div className='pe-md-5 ps-md-5' style={{background:'linear-gradient(to right bottom,rgb(255, 235, 220),rgb(252, 200, 200))',paddingTop:'120px'}}>
      <Outlet />
    </div >
    <Footer />
    </div>
  )
}

export default Layout
