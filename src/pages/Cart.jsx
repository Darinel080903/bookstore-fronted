import React from 'react'

import Navbar from '../components/Navbar'
import Advice from '../components/Advice'
import Shop from '../components/Shop'
import Footer from '../components/Footer'


function Cart() {
  return (
    <div className='cart'>
        <Navbar/>
        <Advice/>
        <Shop/>
        <Footer/>
    </div>
  )
}

export default Cart