import React from 'react'
import Navbar from '../components/Navbar'
import Body from '../components/Body'
import Footer from '../components/Footer'
import Advice from '../components/Advice'

function Home() {
  return (
    <div className='home'>
        <Navbar/>
        <Advice/>
        <Body/>
        <Footer/>
    </div>
  )
}

export default Home