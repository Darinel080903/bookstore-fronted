import '../css/Menu.css'

function Menu() {
    return(
        <>
        <input type="checkbox" id="menu-toggle"/>
        <label id="trigger" for="menu-toggle"></label>
        <label id="burger" for="menu-toggle"></label>
        <ul id="menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">Best sellers</a></li>
            <li><a href="#">Genders</a></li>
            <li><a href="#">Account</a></li>
            <li><a href="#"></a></li>
        </ul>
        </>
        )
}

export default Menu;