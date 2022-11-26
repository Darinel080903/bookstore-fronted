import FormOrderUser from "../components/FormOrderUser";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function OrderUser() {
    return(
        <div className="OrderUser">
            <Navbar/>
            <br/>
            <br/>
            <FormOrderUser/>
            <Footer/>
        </div>
    );
}

export default OrderUser;