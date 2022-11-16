import '../css/VistaLibro.css'
import { useContext, useState, useEffect, } from 'react'
import {Link, useLocation } from 'react-router-dom'



function VistaLibro() {

    const [books, setBooks] = useState([]);

    const location = useLocation();

    const { nBook } = location.state;


    useEffect(() => {
        fetch('http://localhost:8080/book/'+nBook)
            .then(response => response.json())
            .then(data => setBooks(data.data));

    }, [])

    return(
        <div className="contenedor_cuadro">
            <img className="imagen" 
            src= {books.cover}/>

            <div className="contenedor_texto">
                <p className="nombre-tema"><strong>{books.name}</strong></p>
                <p className="sub-tema">{'$'+books.price}</p>
                <p className="texto-contenedor">{books.description}</p>
            </div>

        </div>
    );
}

export default VistaLibro;