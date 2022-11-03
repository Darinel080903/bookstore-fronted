import '../css/VistaLibro.css'

function VistaLibro(props) {
    return(
        <div className="contenedor_cuadro">
            <img className="imagen" 
            src= {props.imagen} />

            <div className="contenedor_texto">
                <p className="nombre-tema"><strong>{props.tema}</strong></p>
                <p className="sub-tema">{props.subTema}</p>
                <p className="texto-contenedor">{props.textoContenedor}</p>
            </div>

        </div>
    );
}

export default VistaLibro;