import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import { Outlet, Link, Navigate, useLocation } from 'react-router-dom'


function Logout() {

    const { user, setUser } = useContext(UserContext)

    return (
        <div>
            {setUser(null)}
            <Navigate to="/home" replace={true} />
            
        </div>
    )
}

export default Logout