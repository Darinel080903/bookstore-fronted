import styles from '../css/VistaLibro.module.css'
import { useContext, useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineShoppingCart } from "react-icons/ai"



function VistaLibro() {

    const [book, setBook] = useState([]);

    const location = useLocation();

    const { nBook } = location.state;


    const [ user, setUser ] = useState(JSON.parse(localStorage.getItem("user-info")));


    useEffect(() => {
        fetch('http://localhost:8080/book/' + nBook)
            .then(response => response.json())
            .then(data => setBook(data.data));

    }, [])



    const Car = (e) => {
        e.preventDefault();

        fetch('http://localhost:8080/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'bookId': nBook,
                'userId': user.id,
                'quantity':3,
                'status':'SHOPPING'
            })
        })
            .then(res => res.json())
            .then(data => {
            })
            .catch(err => console.error(err))

    }

    const Shop = (e) => {
        e.preventDefault();

        fetch('http://localhost:8080/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'bookId': nBook,
                'userId': user.id,
                'quantity':1,
                'status':'IN PROCESS'
            })
        })
            .then(res => res.json())
            .then(data => {
            })
            .catch(err => console.error(err))

    }

    return (
        <div className={styles.contenedorCuadro}>
            {
                book ?

                    <div className={styles.cuadro}>

                        <img className={styles.imagen}
                            src={book.cover} />

                        <div className={styles.contenedorTexto}>
                            <div className={styles.fullName}>
                                <p className={styles.name}>{book.name}</p>
                                <p className={styles.author}>{book.authorName}</p>
                            </div>
                            <p className={styles.textoContenedor}>{book.description}</p>
                            <p className={styles.price}>$ {book.price}</p>
                            <div className={styles.actions}>

                                <Link to={'/buying'} state={{book: book}} >
                                    <button className={styles.buy}>Comprar</button>
                                </Link>
                                <button onClick={Car} className={styles.addCart}><AiOutlineShoppingCart /></button>
        

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