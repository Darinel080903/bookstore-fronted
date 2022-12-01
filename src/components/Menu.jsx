import styles from '../css/Menu.module.css'
import { Outlet, Link} from 'react-router-dom'


function Menu() {
    return(
        <div className={styles.menuContainer}>
        <input type="checkbox" className={styles.menuToggle} id="menu-toggle"/>
        <label className={styles.trigger} htmlFor="menu-toggle"></label>
        <label className={styles.burger} htmlFor="menu-toggle"></label>
        <ul   className={styles.menu}>
            <li className={styles.li}> <Link to="/">Home</Link> </li>
            <li className={styles.li}> <Link to="/bestseller">Best Sellers</Link> </li>
            <li className={styles.li}> <Link to="/register">Registrar</Link> </li>
            <li className={styles.li}> <Link to="/account">Account </Link> </li>

        </ul>
        </div>
        )
}

export default Menu;