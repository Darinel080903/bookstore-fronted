import Navbar from "../components/NavbarForm";
import Footer from "../components/Footer";
import Orders from "../components/Orders";
import Advice from "../components/Advice";
import React from 'react'

function Order() {
    return ( 
        <div className="order">
            <Navbar/>
            <Advice/>
            <Orders/>
            <Footer/>
        </div>
     );
}

export default Order;