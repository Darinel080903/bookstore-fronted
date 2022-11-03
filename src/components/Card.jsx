import '../css/Card.css'
import { Outlet, Link } from 'react-router-dom'


function Card({image, titulo, texto}) {
    return(
        <Link to="/Book" >

            <div className='card'>
                <img className="imagen" src={image} />
                <h4 className="titulo">{titulo}></h4>
                <p className="texto">{texto}></p>
                <a href="" target="_blank">Comprar</a>
            </div>
         </Link> 
    )
}

export default Card;