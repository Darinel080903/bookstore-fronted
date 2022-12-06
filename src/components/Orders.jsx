import { useState, useRef, useContext, useEffect } from "react"
import styles from '../css/Orders.module.css'
import { Link } from 'react-router-dom'

function Orders() {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user-info")));

    const [books, setBooks] = useState([])

    const [orders, setOrders] = useState([]);


    useEffect(() => {
        fetch('http://localhost:8080/order/user/' + user.id + '/AllOrders')
            .then(response => response.json())
            .then(data => setOrders(data.data));

    }, [])


    function getData(id) {
        fetch('http://localhost:8080/book')
            .then(response => response.json())
            .then(data => setBooks(data.data))

        return (
            <div className={styles.downPart}>
                {
                    books.map(book => {
                        return (
                            book.id == id
                                ?
                                <>  
                                    <Link to='/book' state={{ nBook: book.id }} >
                                        <img src={book.cover} className={styles.imagen} />
                                    </Link>
                                    
                                    <div className={styles.details}>
                                        <h2 className={styles.letter}>{book.name}</h2>
                                        <p className={styles.description}>{book.description}</p>
                                    </div>

                                </>
                                :
                                <>

                                </>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <div className={styles.contenedorCuadro}>
                <div className={styles.containerLetter}>
                    <h2 className={styles.title}>Mis compras</h2>
                </div>

                {
                    orders.map(order => {
                        return (
                            <div className={styles.cuadro}>
                                <div className={styles.upPart}>
                                    <h2 className={styles.letterTop}>Estado: {order.status}</h2>
                                    <h2 className={styles.letterTop}>Cantidad: {order.quantity}</h2>
                                    <h2 className={styles.letterTop}>Precio total: {order.price}</h2>
                                    <h2 className={styles.letterTop}> Fecha de entrega: {order.deliveryDate}</h2>
                                </div>
                                <>
                                    {

                                        getData(order.bookId)
                                    }
                                </>
                            </div>

                        );
                    })

                }
            </div>
        </div>
    );
}

export default Orders;