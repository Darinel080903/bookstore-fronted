import styles from '../css/Navbar.module.css'
import { Outlet, Link } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import { AiOutlineSearch } from "react-icons/ai"

import Menu from '../components/Menu';
import Imagen1 from '../assets/images/bookStoreLogo.png'



function Navbar(params) {

    const { user, setUser } = useContext(UserContext)

    return (
        <nav className={styles.navbarDistributed}>
            <div className={styles.menu}>
                <Menu />
            </div>

            <div className={styles.searcher} id='searcher'>
                <AiOutlineSearch className={styles.searchIcon}/>
                <input className={styles.inputSearcher}     type="text" />
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
                    <div className={styles.userName}>{ user.userName }</div>
                    <button>
                        <Link to="/compras">Compras</Link>
                    </button>

                </div>
            }

        </nav>
    )
}

export default Navbar;