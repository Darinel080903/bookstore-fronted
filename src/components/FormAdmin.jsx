import { useContext, useState, useEffect } from 'react'
import styles from '../css/FormAdmin.module.css'
import { Outlet, Link, Navigate, useLocation } from 'react-router-dom'


//carrousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function FormAdmin() {
    
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

            <div className={styles.content}>
                <div className={styles.bodyDistributed}>
                    <p className={styles.title}>Panel de Administrador</p>
           
                    <div className={styles.ContainerButton}>
                        <div>
                            <Link to={"/orderuser"}   >
                                <button type='submit' className={styles.ButtonForm}>Ordenes clientes</button>
                            </Link>
                        </div>
                    </div>

                    <div className={styles.ContainerButton}>
                        <div>
                            <Link to={"/addbook"}   >
                                <button type='submit' className={styles.ButtonForm}>Agregar libro</button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default FormAdmin;