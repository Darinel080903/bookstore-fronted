import styles from '../css/VistaLibro.module.css'
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
        <div className={styles.contenedor_cuadro}>
            <img className={styles.imagen} 
            src= {books.cover}/>

            <div className={styles.contenedorTexto}>
                <p className={styles.nombreTema}><strong>{books.name}</strong></p>
                <p className={styles.subTema}>{'$'+books.price}</p>
                <p className={styles.textoContenedor}>{books.description}</p>
            </div>

        </div>
    );
}

export default VistaLibro;