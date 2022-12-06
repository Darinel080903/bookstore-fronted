import Card from "./Card";
import styles from '../css/BestSeller.module.css'
import { useState, useEffect } from 'react'

function FormBestSeller() {

    const [horrorBooks, setHorrorBooks] = useState([]);

    const [Sciencefiction, setSciencefiction] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/books_genders/books/gender/1') //libros de horror
            .then(response => response.json())
            .then(data => setHorrorBooks(data));

        fetch('http://localhost:8080/books_genders/books/gender/3') //libros de ciencia ficcion
            .then(response => response.json())
            .then(data => setSciencefiction(data));
    }, [])


    return(
        <>
        <div className={styles.bodyContainer}>
            <div className={styles.content}>
                <div className={styles.bodyDistributed}>
                    <p className={styles.title}>Los mas vendidos</p>
                        <div className={styles.books}>
                            {
                                horrorBooks.map(book => {
                                    return (
                                        <div key={book.id} className={styles.book}  >
                                            <Card
                                                id={book.id}
                                                image={book.cover}
                                                titulo={book.name}
                                                texto={book.description}
                                                precio={book.price} 
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className={styles.bodyDistributed}>
                        <div className={styles.books}>
                            {
                                Sciencefiction.map(book => {
                                    return (
                                        <div key={book.id} className={styles.book}  >
                                            <Card
                                                id={book.id}
                                                image={book.cover}
                                                titulo={book.name}
                                                texto={book.description}
                                                precio={book.price} 
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default FormBestSeller;