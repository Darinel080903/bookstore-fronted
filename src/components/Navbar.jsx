import styles from '../css/Navbar.module.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { AiOutlineSearch } from "react-icons/ai"
import { AiOutlinePoweroff } from "react-icons/ai"


import Advice from './Advice'

import Menu from '../components/Menu';
import Imagen1 from '../assets/images/bookStoreLogo.png'




function Navbar(params) {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user-info")))


    const navigate = useNavigate();

    function handleSearch(e) {

        e.preventDefault();

        navigate('/search', {state:{bookSearched: e.target[0].value}})

    }

    function ActionButton({ redirectTo, text }) {
        return (
            <Link className={styles.actionButton} to={redirectTo}>
                <span>{text}</span>
            </Link>
        )
    }


    return (
        <div className={styles.navbarContainer}>
            <nav className={styles.navbarDistributed}>

                <div className={styles.menu}>
                    <Menu />
                </div>

                <div className={styles.searcherContainer}>
                    <div className={styles.searcher} id='searcher'>
                        <AiOutlineSearch className={styles.searchIcon} />
                        <form onSubmit={handleSearch}>
                            <input className={styles.inputSearcher} type="text" />
                        </form>
                    </div>
                </div>

                <div className={styles.logoContainer}>
                    <Link to={'/'}>
                        <img className={styles.navbarLogoBook} src={Imagen1} />
                    </Link>
                </div>


                <div className={styles.optionsContainer}>

                    {

                        user
                            ?
                            user.admin
                                ?
                                <>
                                    <ActionButton redirectTo={"/admin"} text="Admin" />
                                    <Link to={"/logout"} className={`${styles.actionButton} ${styles.actionButtonLogout}`} >
                                        <AiOutlinePoweroff />
                                    </Link>

                                </>
                                :
                                <>
                                    <ActionButton redirectTo={"/order"} text="Compras" />
                                    <ActionButton redirectTo={"/cart"} text="Carrito" />
                                    <Link to={"/logout"} className={`${styles.actionButton} ${styles.actionButtonLogout}`} >
                                        <AiOutlinePoweroff />
                                    </Link>


                                </>
                            :
                            <ActionButton redirectTo={"/login"} text="Login" />


                    }
                </div>
            </nav>

            <Advice />
        </div>

    )
}

export default Navbar;