import styles from "../css/Body.module.css"
import Card from "../components/Card"
import { Link } from 'react-router-dom'


//carrousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import { useState, useEffect } from 'react'


function Body(params) {

    const [user, setUser] = useState(localStorage.getItem("user-info"))


    const [recentBooks, setRecentBooks] = useState([]);
    const [fantasyBooks, setFantasyBooks] = useState([]);
    const [horrorBooks, setHorrorBooks] = useState([]);
    const [Sciencefiction, setSciencefiction] = useState([]);

    useEffect(() => {

        fetch('http://localhost:8080/book') //recien agregados (todos los libros)
            .then(response => response.json())
            .then(data => setRecentBooks(data.data));

        fetch('http://localhost:8080/books_genders/books/gender/2') //libros de fantasía
            .then(response => response.json())
            .then(data => setFantasyBooks(data));


        fetch('http://localhost:8080/books_genders/books/gender/1') //libros de horror
            .then(response => response.json())
            .then(data => setHorrorBooks(data));
        
        fetch('http://localhost:8080/books_genders/books/gender/3') //libros de ciencia ficcion
            .then(response => response.json())
            .then(data => setSciencefiction(data));
    }, [])


    return (
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

            <div className={styles.content}>

                
                <div className={styles.bodyDistributed}>
                    <p className={styles.title}>Fantasía</p>
                    <div className={styles.books}>
                        {
                            fantasyBooks.map(book => {
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

                <div className={styles.bodyDistributed}>
                    <p className={styles.title}>Horror</p>
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
                                            precio={book.price} />
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>

                <div className={styles.bodyDistributed}>
                    <p className={styles.title}>Ciencia Ficcion</p>
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
                                            precio={book.price} />
                                    </div>
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