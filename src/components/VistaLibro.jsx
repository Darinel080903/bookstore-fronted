import styles from '../css/VistaLibro.module.css'
import { useContext, useState, useEffect } from 'react'
import { Link, useLocation, useNavigate, Navigate } from 'react-router-dom'
import { AiOutlineShoppingCart } from "react-icons/ai"

import Swal from 'sweetalert2'

import CarrouselBook from "./CarrouselBook";


function VistaLibro() {

    const [book, setBook] = useState([]);

    const location = useLocation();

    const { nBook } = location.state;

    const navigate = useNavigate();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user-info")));

    const [quantity, setQuantity] = useState(1);

    function addQuantity() {
        if (quantity < 10) {
            setQuantity(quantity + 1)
        }
    }

    function removeQuantity() {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    useEffect(() => {
        fetch('http://localhost:8080/book/' + nBook)
            .then(response => response.json())
            .then(data => setBook(data.data));

    }, [])



    const Car = (e) => {
        e.preventDefault();

        if (user == null) {
            navigate('/login')
        }
        else {

            fetch('http://localhost:8080/order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'bookId': nBook,
                    'userId': user.id,
                    'quantity': quantity,
                    'status': 'SHOPPING'
                })
            })
                .then(res => res.json())
                .then(data => {
                })
                .catch(err => console.error(err))

            Swal.fire({
                position: 'center-end',
                title: 'Agregado al carrito',
                color: '#fff',
                width: '400px',
                background: '#008AD4',
                showConfirmButton: false,
                timer: 1500
            })

        }
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
                nBook == null && <Navigate to="/home" replace={true} />

            }
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
                                <div className={styles.quantity}>
                                    <button onClick={removeQuantity}>-</button>
                                    <h3>{quantity}</h3>
                                    <button onClick={addQuantity}>+</button>
                                </div>
                                <Link to={'/buying'} state={{ book: book }} >

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


            <CarrouselBook
                title={'Otros que te podrían interesar'}
                endpoint={'http://localhost:8080/book/random'}
            />
        </div>
    );
}

export default VistaLibro;