import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Card from '../components/Card'

function FormAccount() {

    const [user, setUser] = useState(localStorage.getItem("user-info"))
    const[users, setUsers] = useState([]);
 
    //FIXME:
    useEffect(() => {
        fetch('http://localhost:8080/user')
            .then(response => response.json())
            .then(data => setUser(data.data));
    }, [])

    
    return(
        <div>
            {
                users.map (user =>{
                    return(
                        <div key={user.id}>
                            <Card
                                id={user.id}
                                lastName={user.lastName}
                                birth={book.birth}
                                phoneNumber={book.phoneNumber}
                                email={book.email} 
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FormAccount;