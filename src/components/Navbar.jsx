import styles from '../css/Navbar.module.css'
import { Outlet, Link } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../context/UserContext'

import Menu from '../components/Menu';
import Imagen1 from '../assets/images/bookStoreLogo.png'



function Navbar(params) {

    const { user, setUser } = useContext(UserContext)

    return (
        <nav className={styles.navbarDistributed}>
            <div className={styles.menu}>
                <Menu />
            </div>

            <div className={styles.search}>
            </div>

            <div className={styles.logoContainer}>
                <img className={styles.navbarLogoBook} src={Imagen1} />
            </div>

            {user == null ?
                <div className={styles.buttonLogin}>
                    <button>
                        <Link to="/login">Log In</Link>
                    </button>

                </div>
                : 
                <div className={styles.buttonLogin}>
                    <button>
                        <Link to="/compras">Compras</Link>
                    </button>

                </div>
            }

        </nav>
    )
}

export default Navbar;