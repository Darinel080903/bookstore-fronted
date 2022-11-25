import React from "react";
import Navbar from "../components/NavbarForm";
import Footer from "../components/Footer";
import AddBookForm from "../components/AddBookForm";

function AddBook() {
    return ( 
        <div className="addbook">
        <Navbar/>
        <AddBookForm/>
        <Footer/>
        </div>
     );
}

export default AddBook;