import '../css/Navbar.css'
import Menu from '../components/Menu';
import Imagen1 from '../assets/images/BookLogo.png'

function Navbar(params) {
    return (
        <nav className='navbar-distributed'>
            <Menu />
            <div className="navbar-left">
            </div>
            <div className="navbar-right">
                <div>
                    <img className="navbar-logo-book" src={Imagen1} />
                </div>

            </div>

        </nav>
    )
}

export default Navbar;