import '../css/Menu.css'
import { Outlet, Link} from 'react-router-dom'


function Menu() {
    return(
        <>
        <input type="checkbox" id="menu-toggle"/>
        <label id="trigger" for="menu-toggle"></label>
        <label id="burger" for="menu-toggle"></label>
        <ul id="menu">
            <li> <Link to="/home">Home</Link> </li>
            <li> <Link to="/bestseller">Best Sellers</Link> </li>
            <li> <Link to="/register">Register</Link> </li>
            <li> <Link to="/Acount">Account </Link> </li>

        </ul>
        </>
        )
}

export default Menu;