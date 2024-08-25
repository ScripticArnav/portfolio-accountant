import React from 'react'
<<<<<<< HEAD
import {  FrontSection, Navbar } from "./components";
=======
import {  Footer, Navbar } from "./components";
>>>>>>> 23b60de782d26166554797a345f3bb23ae6d5664
import {Outlet} from 'react-router-dom'
const Layout = () => {
  return (
    <>
    <Navbar/>
<<<<<<< HEAD
    <div className='max-w-7xl mx-auto pt-20 px-6'>
      <FrontSection/>
      </div>
    
=======
>>>>>>> 23b60de782d26166554797a345f3bb23ae6d5664
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout
