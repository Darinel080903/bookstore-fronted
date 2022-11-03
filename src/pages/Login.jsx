import React from 'react'
import Navbar from '../components/Navbar'
import FormLogin from '../components/FormLogin'
import Footer from '../components/Footer'
import { BrowserRouter, Routes, Route} from 'react-router-dom'


function Login() {
  return (
    <div className='login'>
        <Navbar/>
        <FormLogin/>
        <Footer/>
        
    </div>
  )
}

export default Login