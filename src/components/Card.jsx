import '../css/Card.css'
import { Outlet, Link } from 'react-router-dom'


function Card(props) {
    return(
        <Link to="/Book" >

            <div className='card'>
                <img className="imagen" src={(`../src/assets/images/imagen-${props.imagen}.png`)} />
                <h4 className="titulo">{props.titulo}</h4>
                <p className="texto">{props.texto}</p>
                <a href="" target="_blank">Comprar</a>
            </div>
        </Link> 
    )
}

export default Card;