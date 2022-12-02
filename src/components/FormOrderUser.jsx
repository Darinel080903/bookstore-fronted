import styles from '../css/OrderUser.module.css'

import { useState, useEffect } from 'react'

function FormOrderUser() {

    const [ user, setUser ] = useState(JSON.parse(localStorage.getItem("user-info")));


    const [orders, setOrders] = useState([]);

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/order/user/'+ user.id)
            .then(response => response.json())
            .then(data => setOrders(data.data));
    }, [])

        function coverImagen (){
            fetch('http://localhost:8080/book/')
                .then(response => response.json())
                .then(data => setBooks(data.data));
        }

    return(
        <div className={styles.container}>
            <div className={styles.contenedorCuadro}>
                <div className={styles.containerLetter}>
                    <h2 className={styles.title}>Ordernes entrantes</h2>
                </div>

                {
                    orders.map(order => {
                        return (
                            <div className={styles.cuadro}>
                                <div className={styles.upPart}>
                                    <h2 className={styles.letterTop}>Id: {order.id}</h2>
                                    <h2 className={styles.letterTop}>Cantidad: {order.quantity}</h2>
                                    <h2 className={styles.letterTop}>Precio total: {order.price}</h2>
                                    <img src={books.cover} className={styles.imagen} />
                                    {
                                        coverImagen(order.bookId)
                                    }
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default FormOrderUser;