import React from 'react'
import { useState, useEffect } from 'react'
import styles from "../css/CarrouselBook.module.css"
import Card from "../components/Card"
import { Link } from 'react-router-dom'

function CarrouselBook({ endpoint, title }) {

    const [books, setBooks] = useState([]);

    useEffect(() => {

        fetch(endpoint)
            .then(response => response.json())
            .then(data => setBooks(data.data));

    }, [])

    return (


        <div className={styles.bodyDistributed}>
            <p className={styles.title}>{title}</p>
            <div className={styles.books}>
                {
                    books.map(book => {
                        return (
                            <div key={book.id} className={styles.book}  >
                                <Card
                                    id={book.id}
                                    image={book.cover}
                                    titulo={book.name}
                                    texto={book.description}
                                    precio={book.price} />
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default CarrouselBook