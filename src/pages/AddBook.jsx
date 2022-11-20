import React from "react";
import Navbar from "../components/NavbarForm";
import Footer from "../components/Footer";
import AddBookForm from "../components/AddBookForm";

function AddBook() {
    return ( 
        <>
        <Navbar/>
        <AddBookForm/>
        <Footer/>
        </>
     );
}

export default AddBook;