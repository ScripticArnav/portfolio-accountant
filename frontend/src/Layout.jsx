import React from 'react'
import {  FrontSection, Navbar } from "./components";
import {Outlet} from 'react-router-dom'
const Layout = () => {
  return (
    <>
    <Navbar/>
    <div className='max-w-7xl mx-auto pt-20 px-6'>
      <FrontSection/>
      </div>
    
    <Outlet/>
    
    </>
  )
}

export default Layout
