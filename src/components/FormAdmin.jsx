import { useContext, useState, useEffect } from 'react'
import styles from '../css/FormAdmin.module.css'
import { Outlet, Link, Navigate, useLocation } from 'react-router-dom'

function FormAdmin() {
    
    return(
        <div className={styles.bodyContainer}>

            <div className={styles.content}>
                <div className={styles.bodyDistributed}>
                    <p className={styles.title}>Panel de Administrador</p>
                    <Link to={"/orderuser"}   >
                        <button>ordenes</button>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default FormAdmin;