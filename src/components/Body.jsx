import "../css/Body.css"
import Card from "../components/Card"

function Body(params) {
    return (
<>
    <div className="body-distributed">
        <Card></Card>
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