import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import styles from '../css/FormAdmin.module.css'
import { Outlet, Link, Navigate, useLocation } from 'react-router-dom'

function FormAdmin() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/book')
            .then(response => response.json())
            .then(data => setBooks(data.data));

    }, [])

    return(
        <div className={styles.bodyContainer}>

            <div className={styles.content}>
                <div className={styles.bodyDistributed}>
                    <p className={styles.title}>Libros en stock</p>
                    <Link to={"/orderuser"}   >
                        <button>ordenes</button>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default FormAdmin;