import styles from '../css/Navbar.module.css'
import { Outlet, Link } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import { AiOutlineSearch } from "react-icons/ai"

import Menu from '../components/Menu';
import Imagen1 from '../assets/images/bookStoreLogo.png'



function Navbar(params) {

    const { user, setUser } = useContext(UserContext)

    const { bookSearched, setBookSearched } = useState('')

    function handleSearch() {
        fetch('http://localhost:8080/book/name/' + bookSearched)
            .then(response => response.json())
            .then(data => setBooks(data.data));

    }

    return (
        <nav className={styles.navbarDistributed}>
            <div className={styles.menu}>
                <Menu />
            </div>

            <div className={styles.searcherContainer}>
                <div className={styles.searcher} id='searcher'>
                    <AiOutlineSearch className={styles.searchIcon} />
                    <form>
                        <input className={styles.inputSearcher} type="text" />
                    </form>
                </div>
            </div>

            <div className={styles.logoContainer}>
                <img className={styles.navbarLogoBook} src={Imagen1} />
            </div>

            <div className={styles.optionsContainer}>
                {user == null ?
                    <div className={styles.buttonLogin}>
                            <Link to="/login"><span>Log In</span></Link>


                    </div>
                    :

                    <div className={styles.buttonLogin}>
                        <div className={styles.userName}>{user.userName}</div>
                        <button>
                            <Link to="/compras">Compras</Link>
                        </button>

                    </div>
                }
            </div>
            

        </nav>
    )
}

export default Navbar;