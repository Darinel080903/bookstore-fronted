import { UserContext } from '../context/UserContext'
import { useState, useRef, useContext, useEffect } from "react"
import styles from '../css/Orders.module.css'

function Orders() {

    const [user, setUser] = useState(localStorage.getItem("user-info"));


    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/order/user/'+ user.id+ '/AllOrders')
            .then(response => response.json())
            .then(data => setOrders(data.data));

    }, [])

    return (
        <div className='container'>
            <h2>My orders</h2>
            <div className={styles.contenedorCuadro}>
                {
                    orders ?
                    <div className={styles.cuadro}>
                        <div className={styles.upPart}>
                           <h2>{orders.status}</h2>
                           <h2>{orders.quantity}</h2>
                            <h2>{orders.price}</h2> 
                        </div>
                        
                    </div>
                    :
                    <div className={styles.cuadro}>
                    </div>
                }
            </div>
        </div>
      );
}

export default Orders;