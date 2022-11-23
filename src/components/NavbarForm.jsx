import styles from '../css/Navbar.module.css'
import { Outlet, Link } from 'react-router-dom'


import Menu from './Menu';
import Imagen1 from '../assets/images/bookStoreLogo.png'



function Navbar(params) {
    return (
        <nav className={styles.navbarDistributedForm}>
            <div className={styles.menu}>
                <Menu />
            </div>

            <div className={styles.search}>
            </div>

            <div className={styles.logoContainer}>
                <Link to={'/'}>
                    <img className={styles.navbarLogoBook} src={Imagen1} />
                </Link>
            </div>



        </nav>
    )
}

export default Navbar;