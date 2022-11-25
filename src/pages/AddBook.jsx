import React from "react";
import Navbar from "../components/NavbarForm";
import Footer from "../components/Footer";
import AddBookForm from "../components/AddBookForm";
import Advice from '../components/Advice'


function AddBook() {
    return ( 
        <div className="addbook">
        <Navbar/>
        <Advice/>
        <AddBookForm/>
        <Footer/>
        </div>
     );
}

export default AddBook;