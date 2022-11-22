import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Search from '../components/Search'

function Searcher() {
    return (
        <div className="searcherContainer">
            <Navbar />
            <Search/>
            <Footer />
        </div>
    )

}

export default Searcher