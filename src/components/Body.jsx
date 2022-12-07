import styles from "../css/Body.module.css"
import { Link } from 'react-router-dom'


//carrousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import { useState, useEffect } from 'react'

import CarrouselBook from "./CarrouselBook";


function Body(params) {

    const [user, setUser] = useState(localStorage.getItem("user-info"))


    const [recentBooks, setRecentBooks] = useState([]);
    const [fantasyBooks, setFantasyBooks] = useState([]);
    const [horrorBooks, setHorrorBooks] = useState([]);
    const [Sciencefiction, setSciencefiction] = useState([]);





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


                <CarrouselBook
                    title={'Agregados recientemente'}
                    endpoint={'http://localhost:8080/book/new'}
                />

                <CarrouselBook
                    title={'Fantasía'}
                    endpoint={'http://localhost:8080/books_genders/books/gender/2'}
                />

                <CarrouselBook
                    title={'Horror'}
                    endpoint={'http://localhost:8080/books_genders/books/gender/1'}
                />

                <CarrouselBook
                    title={'Ciencia Ficcion'}
                    endpoint={'http://localhost:8080/books_genders/books/gender/3'}
                />

               


            </div>
        </div>
    )
}

export default Body;