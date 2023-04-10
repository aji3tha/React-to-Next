import React from 'react'
import Footer from './Containers/Footer'
import Header from './Containers/Header'

function Layout({children}) {
  return (
    <>
    <Header/>
    <main>{children}</main>
    <Footer/>
    </>
  )
}

export default Layout