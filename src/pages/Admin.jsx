import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FormAdmi from '../components/FormAdmin'

function Admin() {
  return (
    <div className='admin'>
        <Navbar/>
        <FormAdmi/>
        <Footer/>
    </div>
  )
}

export default Admin;