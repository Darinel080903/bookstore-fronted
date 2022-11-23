import FormOrderUser from "../components/FormOrderUser";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function OrderUser() {
    return(
        <div className="OrderUser">
            <Navbar/>
            <FormOrderUser/>
            <Footer/>
        </div>
    );
}

export default OrderUser;