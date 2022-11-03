import "../css/Body.css"
import Card from "../components/Card"


function Body(params) {
    return (
        <>
            <div className="body-distributed">
                <Card
                    image={'https://media.s-bol.com/m7krYROP5VR0/r01XkD6/550x782.jpg'}
                    title={''}
                    texto={''}
                ></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
            <div className="body-distributed">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
        </>
    )
}

export default Body;