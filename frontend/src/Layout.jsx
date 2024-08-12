import React from 'react'
import { Footer, Navbar } from "./components";
import {Outlet} from 'react-router-dom'
const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout
