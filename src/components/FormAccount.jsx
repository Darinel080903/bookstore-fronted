import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Card from '../components/Card'
import styles from '../css/FormAdmin.module.css'

//carrousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function FormAccount() {

    const [user, setUser] = useState(localStorage.getItem("user-info"))
    const[users, setUsers] = useState([]);
 
    useEffect(() => {
        fetch('http://localhost:8080/user')
            .then(response => response.json())
            .then(data => setUser(data.data));
    }, [])

    
    return(
        <div className={styles.bodyContainer}>
            <Carousel className={styles.imgCarrousel} autoPlay={true} infiniteLoop={true} showIndicators={false} showThumbs={false} showStatus={false}>
                <div>
                    <img src="https://images.unsplash.com/photo-1559133082-d15e8502d064?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1475243907012-e01b4e4b0a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1618351468077-56adb973bab6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            <div>
                <div className={styles.content}>
                    <div className={styles.bodyDistributed}>
                        <div className={styles.ContainerButton}>
                            <div>
                                <Link to={"/order"}>
                                    <button type='submit' className={styles.ButtonForm}>Mis Ordenes</button>
                                </Link>
                            </div>
                        </div>

                        <div className={styles.ContainerButton}>
                            <div>
                                <Link to={"/cart"}   >
                                    <button type='submit' className={styles.ButtonForm}>carrito</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </div> 
    )
}

export default FormAccount;