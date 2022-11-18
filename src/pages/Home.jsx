import React from 'react'
import Navbar from '../components/Navbar'
import Body from '../components/Body'
import Footer from '../components/Footer'
import Search from '../components/Search'

function Home() {
  return (
    <div className='home'>
        <Navbar/>
        <Body/>
        <Footer/>
    </div>
  )
}

export default Home