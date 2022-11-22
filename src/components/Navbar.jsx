import styles from '../css/Navbar.module.css'
import { Outlet, Link, Navigate, useLocation } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import { AiOutlineSearch } from "react-icons/ai"
import { AiOutlinePoweroff } from "react-icons/ai"


import Menu from '../components/Menu';
import Imagen1 from '../assets/images/bookStoreLogo.png'




function Navbar(params) {

    const { user, setUser } = useContext(UserContext)

    const [bookSearched, setBookSearched] = useState()
    console.log(user)


    function handleSearch(e) {

        e.preventDefault();

        setBookSearched(e.target[0].value);



    }

    function ActionButton({ redirectTo, text }) {
        return (
            <Link className={styles.actionButton} to={redirectTo}>
                <span>{text}</span>
            </Link>
        )
    }


    return (
        <nav className={styles.navbarDistributed}>

            {
                bookSearched &&
                <Navigate to="/search" state={{ bookSearched: bookSearched }} replace={true} />
            }

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
                                <ActionButton redirectTo={"/compras"} text="Compras" />
                                <Link to={"/logout"} className={`${styles.actionButton} ${styles.actionButtonLogout}`}  >
                                    <AiOutlinePoweroff />
                                </Link>
                            </>
                        :
                        <ActionButton redirectTo={"/login"} text="Login" />


                }
            </div>


        </nav>
    )
}

export default Navbar;