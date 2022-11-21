import { useContext } from "react";
import { Outlet } from "react-router";

function PrivateRoute({children}) {
    const {user} = useContext(useContext)

    return(
        user ? Outlet : Navigate
    )
}

export default PrivateRoute;