import React from 'react'


//import components
import NavbarComponent from '../navbar/NavbarComponent'
import Footer from '../footer/Footer'



const Layout = ({children}) => {
  return (
    <>
    <NavbarComponent />

    {children}
    <Footer />
    </>
  )
}

export default Layout