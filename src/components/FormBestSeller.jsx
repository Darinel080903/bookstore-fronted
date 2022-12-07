import styles from '../css/BestSeller.module.css'
import { useState, useEffect } from 'react'
import CarrouselBook from "./CarrouselBook";

function FormBestSeller() {
    return(
        
        <div className={styles.bodyContainer}>
            <div className={styles.content}>
                <div className={styles.bodyDistributed}>
                    <p className={styles.title}>Los mas vendidos</p>
                        <div className={styles.books}>
                            <CarrouselBook
                                endpoint={'http://localhost:8080/books_genders/books/gender/2'}
                            />
                        </div>
                        <div className={styles.books}>
                            <CarrouselBook 
                                endpoint={'http://localhost:8080/books_genders/books/gender/1'}
                            />
                        </div>
                </div>
            </div>
        </div>
        
    );
}

export default FormBestSeller;