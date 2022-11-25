import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import VistaLibro from '../components/VistaLibro'
import Advice from '../components/Advice'


function Book() {
  return (
    <div className='book'>
        <Navbar/>
        <Advice/>
        <VistaLibro/>
        <Footer/>
    </div>
  )
}

export default Book