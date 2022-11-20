import{Link} from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../context/UserContext'


function FormAdmi() {
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

export default FormAdmi;