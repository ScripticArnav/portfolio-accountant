import React from 'react'
import {  HeroSection, Navbar } from "./components";
import {Outlet} from 'react-router-dom'
const Layout = () => {
  return (
    <>
    <Navbar/>
    <div className='max-w-7xl mx-auto pt-20 px-6'>
      <HeroSection/>
    </div>
    
    <Outlet/>
    
    </>
  )
}

export default Layout
