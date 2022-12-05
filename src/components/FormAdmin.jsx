import { useContext, useState, useEffect } from 'react'
import styles from '../css/FormAdmin.module.css'
import { Outlet, Link, Navigate, useLocation } from 'react-router-dom'

function FormAdmin() {
    
    return(
        <div className={styles.bodyContainer}>

            <div className={styles.content}>
                <div className={styles.bodyDistributed}>
                    <p className={styles.title}>Panel de Administrador</p>
           
                    <div className={styles.ContainerButton}>
                        <div>
                            <Link to={"/orderuser"}   >
                                <button type='submit' className={styles.ButtonForm}>Ordenes</button>
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