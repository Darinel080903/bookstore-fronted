import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Card from '../components/Card'
import styles from '../css/FormAdmin.module.css'

function FormAccount() {

    const [user, setUser] = useState(localStorage.getItem("user-info"))
    const[users, setUsers] = useState([]);
 
    useEffect(() => {
        fetch('http://localhost:8080/user')
            .then(response => response.json())
            .then(data => setUser(data.data));
    }, [])

    
    return(

        <div>
            {
                users.map (user =>{
                    return(

                            <div className={styles.content}>
                                <div className={styles.bodyDistributed}>
                                    <p className={styles.title}  key={user.id}>Hola {user.id}</p>

                                    <div className={styles.ContainerButton}>
                                        <div>
                                            <Link to={"/orderuser"}>
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
                     
                    )
                })
            }
        </div>
    )
}

export default FormAccount;