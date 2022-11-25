import React from "react";
import Navbar from "../components/NavbarForm";
import Footer from "../components/Footer";
import AddBookForm from "../components/AddBookForm";
import Advice from '../components/Advice'


function AddBook() {
    return ( 
        <>
        <Navbar/>
        <Advice/>
        <AddBookForm/>
        <Footer/>
        </>
     );
}

export default AddBook;