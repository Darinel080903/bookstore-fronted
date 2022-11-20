import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FormAdmi from '../components/FormAdmi'

function Admi() {
  return (
    <div className='admi'>
        <Navbar/>
        <FormAdmi/>
        <Footer/>
    </div>
  )
}

export default Admi;