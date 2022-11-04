import React from 'react'
import Navbar from '../components/Navbar'
import FormRegister from '../components/FormRegister'
import Footer from '../components/Footer'
import { BrowserRouter, Routes, Route} from 'react-router-dom'


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