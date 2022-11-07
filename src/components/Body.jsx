import "../css/Body.css"
import Card from "../components/Card"

function Body() {
    return (
        <>
            <div className="body-distributed">
                <Card
                    imagen="01"
                    titulo=""
                    texto=""
                />
                <Card
                    imagen="02"
                    titulo=""
                    texto=""
                />
                <Card
                    imagen="03"
                    titulo=""
                    texto=""
                />
                <Card
                    imagen="04"
                    titulo=""
                    texto=""
                />
            </div>
            <div className="body-distributed">
            <Card
                    imagen="05"
                    titulo=""
                    texto=""
                />
                <Card
                    imagen="02"
                    titulo=""
                    texto=""
                />
                <Card
                    imagen="03"
                    titulo=""
                    texto=""
                />
                <Card
                    imagen="04"
                    titulo=""
                    texto=""
                />
            </div>
        </>
    )
}

export default Body;