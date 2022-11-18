import styles from '../css/Navbar.module.css'
import { Outlet, Link } from 'react-router-dom'


import Menu from './Menu';
import Imagen1 from '../assets/images/bookStoreLogo.png'



function Navbar(params) {
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

         

        </nav>
    )
}

export default Navbar;