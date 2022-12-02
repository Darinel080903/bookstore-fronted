import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import VistaLibro from '../components/VistaLibro'


function Book() {
  return (
    <div className='book'>
        <Navbar/>
        <VistaLibro/>
        <Footer/>
    </div>
  )
}

export default Book