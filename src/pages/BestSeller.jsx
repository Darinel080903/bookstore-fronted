import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FormBestSeller from '../components/FormBestSeller'
import Advice from '../components/Advice'



function BestSeller() {
  return (
    <div className='login'>
        <Navbar/>
        <Advice/>
        <FormBestSeller/>
        <Footer/>
    </div>
  )
}

export default BestSeller;