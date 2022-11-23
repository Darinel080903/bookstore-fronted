import styles from "../css/Body.module.css"
import Card from "../components/Card"
import { Link } from 'react-router-dom'


import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../context/UserContext'


function Body(params) {

    const { user, setUser } = useContext(UserContext)


    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/book')
            .then(response => response.json())
            .then(data => setBooks(data.data));

    }, [])


    return (
        <div className={styles.bodyContainer}>

            <div className={styles.imgCarrousel}>
                <img src="https://images.unsplash.com/photo-1559133082-d15e8502d064?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
            </div>

            <div className={styles.content}>

                <div className={styles.bodyDistributed}>
                    <p className={styles.title}>Los mas populares</p>
                    <div className={styles.books}>
                        {
                            books.map(book => {
                                return (
                                    <Link className={styles.book} to='/book' state={{ nBook: book.id }} >
                                        <Card
                                            key={book.id}
                                            image={book.cover}
                                            titulo={book.name}
                                            texto={book.description}
                                            precio={book.price} />
                                    </Link>
                                )
                            })
                        }
                    </div>

                </div>


                <div className={styles.bodyDistributed}>
                    <p className={styles.title}>Lo nuevo</p>
                    <div className={styles.books}>
                        {
                            books.map(book => {
                                return (
                                    <Link className={styles.book} to='/book' state={{ nBook: book.id }} >
                                        <Card
                                            key={book.id}
                                            image={book.cover}
                                            titulo={book.name}
                                            texto={book.description}
                                            precio={book.price} />
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Body;