import "../css/Body.css"
import Card from "../components/Card"
import {useContext} from 'react'
import { UserContext } from "../context/UserContext"


function Body(params) {

    const value = useContext(UserContext);

    return (
        <>
            <h1></h1>
            <div className="body-distributed">
                <Card
                    image={'https://media.s-bol.com/m7krYROP5VR0/r01XkD6/550x782.jpg'}
                    titulo={value.isLogged}
                    texto={''}
                ></Card>
                <Card
                image={'https://m.media-amazon.com/images/I/81UUK4M0SoL.jpg'}
                title={'El Principito'}
                texto={''}></Card>
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