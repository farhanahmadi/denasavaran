import React from 'react'


//import components
import NavbarComponent from '../navbar/NavbarComponent'
import Footer from '../footer/Footer'
import Drawer from '../drawer/Drawer'



const Layout = ({children}) => {
  return (
    <>
    <NavbarComponent />

    <Drawer />
    {children}

    <Footer />
    </>
  )
}

export default Layout