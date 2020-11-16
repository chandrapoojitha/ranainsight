import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/footer'
import  './layout.css'

const layout = ({children}) => {
  return (
      <>
        <Navbar /> 
        <main>
          {children}
        </main> 
        <Footer />
      </>
  )
}

export default layout
