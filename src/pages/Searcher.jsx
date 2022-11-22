import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Search from '../components/Search'
import Advice from '../components/Advice'

function Searcher() {
    return (
        <div className="searcherContainer">
            <Navbar />
            <Advice/>
            <Search/>
            <Footer />
        </div>
    )

}

export default Searcher