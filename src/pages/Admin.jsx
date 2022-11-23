import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FormAdmin from '../components/FormAdmin'

function Admin() {
  return (
    <div className='admin'>
        <Navbar/>
        <FormAdmin/>
        <Footer/>
    </div>
  )
}

export default Admin;