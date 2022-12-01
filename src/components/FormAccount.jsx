import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function FormAccount() {

    const [user, setUser] = useState(localStorage.getItem("user-info"))
 
    useEffect(() => {
        fetch('http://localhost:8080/user')
            .then(response => response.json())
            .then(data => setUser(data.data));
    }, [])


    return(
    
        <p>Nombre {user}</p>
            
    )
}

export default FormAccount;