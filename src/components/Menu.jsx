import '../css/Menu.css'
import { Outlet, Link} from 'react-router-dom'


function Menu() {
    return(
        <div className='menu'>
        <input type="checkbox" id="menu-toggle"/>
        <label id="trigger" for="menu-toggle"></label>
        <label id="burger" for="menu-toggle"></label>
        <ul id="menu">
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/bestseller">Best Sellers</Link> </li>
            <li> <Link to="/register">Register</Link> </li>
            <li> <Link to="/Acount">Account </Link> </li>

        </ul>
        </div>
        )
}

export default Menu;