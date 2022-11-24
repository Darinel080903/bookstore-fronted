import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { Outlet, Link, Navigate, useLocation } from 'react-router-dom'


function Logout() {

    const clear = () => {
        {localStorage.clear()}
    }

    return (
        <div>
            {clear()}
            <Navigate to="/home" replace={true} />
        </div>
    )
}

export default Logout