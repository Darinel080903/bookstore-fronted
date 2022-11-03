import '../css/VistaLibro.css'

function VistaLibro(props) {
    return(
        <div className="contenedor_cuadro">
            <img className="imagen" 
            src= "https://media.s-bol.com/m7krYROP5VR0/r01XkD6/550x782.jpg" />

            <div className="contenedor_texto">
                <p className="nombre-tema"><strong>{props.tema}</strong></p>
                <p className="sub-tema">{props.subTema}</p>
                <p className="texto-contenedor">{props.textoContenedor}</p>
            </div>

        </div>
    );
}

export default VistaLibro;