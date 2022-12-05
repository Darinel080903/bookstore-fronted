import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FormAccount from '../components/FormAccount'

function Account() {
    return (
      <div className='account'>
          <Navbar/>
          <FormAccount/>
          <Footer/>
      </div>
    )
  }
  
  export default Account;