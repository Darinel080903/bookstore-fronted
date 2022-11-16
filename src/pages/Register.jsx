import React from 'react'
import Navbar from '../components/Navbar'
import FormRegister from '../components/FormRegister'
import Footer from '../components/Footer'

function Register() {
  return (
    <div className='register'>
        <Navbar/>
        <FormRegister/>
        <Footer/>
    </div>
  )
}

export default Register;