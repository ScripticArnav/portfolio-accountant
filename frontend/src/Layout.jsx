import React from 'react'
import {  Footer, Navbar } from "./components";
import {Outlet} from 'react-router-dom'
const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <div className="flex-1">
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout
