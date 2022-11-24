import styles from '../css/VistaLibro.module.css'
import { useContext, useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineShoppingCart } from "react-icons/ai"



function VistaLibro() {

    const [books, setBooks] = useState([]);

    const location = useLocation();

    const { nBook } = location.state;


    const [ user, setUser ] = useState(localStorage.getItem("user-info"))

    const [date, setDate] = useState(today.getDate()
    );

    useEffect(() => {
        fetch('http://localhost:8080/book/' + nBook)
            .then(response => response.json())
            .then(data => setBooks(data.data));

    }, [])



    const login = (e) => {
        e.preventDefault();

        fetch('http://localhost:8080/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'email': email,
                'password': password
            })
        })
            .then(res => res.json())
            .then(data => {
                setUser(data.data)
                setSuccess(data.success)
            })
            .catch(err => console.error(err))

    }


    return (
        <div className={styles.contenedorCuadro}>
            {
                books ?

                    <div className={styles.cuadro}>

                        <img className={styles.imagen}
                            src={books.cover} />

                        <div className={styles.contenedorTexto}>
                            <div className={styles.fullName}>
                                <p className={styles.name}>{books.name}</p>
                                <p className={styles.author}>{books.authorName}</p>
                            </div>
                            <p className={styles.textoContenedor}>{books.description}</p>
                            <p className={styles.price}>$ {books.price}</p>
                            <div className={styles.actions}>
                                <button className={styles.buy}>Comprar</button>
                                <button onClick={Alert} className={styles.addCart}><AiOutlineShoppingCart /></button>

                            </div>

                        </div>

                    </div>


                    :


                    <div className={styles.cuadro}>
                    </div>

            }
        </div>
    );
}

export default VistaLibro;