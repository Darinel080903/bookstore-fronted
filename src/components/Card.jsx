import styles from '../css/Card.module.css'
import {Link } from 'react-router-dom'

function Card({ image, titulo, texto, precio, id }) {
    return (
        <Link to={'/book'} className={styles.card} state={{ nBook: id }}>
            <img className={styles.imagen} src={image} />
            <div className={styles.info}>
                <h4 className={styles.titulo}>{titulo}</h4>
                <p className={styles.texto}>{texto}</p>
                <p className={styles.precio}> ${precio} </p>
                <a className={styles.comprar} href="" target="_blank">Comprar</a>
            </div>  
        </Link>      
    )
}

export default Card;