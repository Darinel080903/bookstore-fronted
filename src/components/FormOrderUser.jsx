import styles from '../css/OrderUser.module.css'
import Card from "../components/Card"

import { useState, useEffect } from 'react'
import { Outlet, Link, Navigate, useLocation } from 'react-router-dom'

function FormOrderUser() {

    const [ user, setUser ] = useState(JSON.parse(localStorage.getItem("user-info")));


    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/order/user/'+ user.id)
            .then(response => response.json())
            .then(data => setOrders(data.data));
    }, [])


    return(
        <div className={styles.bodyContainer}>
            <div className={styles.bodyDistributed}>
                <p className={styles.title}>Pedidos entrantes</p>
                <div className={styles.orders}>
                    {
                        orders.map(order => {
                            return (
                                <Link className={styles.order}  to='/orderuser' state={{ nOrder: order.id }} >
                                    <Card
                                        key={order.id}
                                        user={order.userId}
                                        cantidad={order.quantity}
                                        fecha={order.orderDate}
                                        entrega={order.deliveryDate}
                                        estatus={order.status} 
                                    />
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default FormOrderUser;