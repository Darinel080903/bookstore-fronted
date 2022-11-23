import React, { useEffect } from 'react'
import { Outlet, Link, Navigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { useState, useRef, useContext } from "react"

import Swal from 'sweetalert2'

import styles from "../css/FormLogin.module.css"



function FormLogin() {

  

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, setUser } = useContext(UserContext);

  async function login(e) {

    e.preventDefault()

    let item = { email, password }
    let result = await fetch("http://localhost:8080/user/login", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(item)
    });
    result = await result.json();
    
    if (result.success) {
      setUser(result.data)
      console.log(result)
      localStorage.setItem("user-info", JSON.stringify(result.data.email))
    }
    else {
      Swal.fire({
        position: 'bottom',
        title: 'La contraseña o usuario es incorrecta',
        color: '#fff',
        width: '800px',
        background: '#D0342C',
        showConfirmButton: false,
        timer: 1500
      })
      console.log(result)
    }


  }



  return (
    <div className={styles.loginContainer}>

  

      <div className={styles.login}>

        <h2 className={styles.titleLogin}>Login</h2>

        <form className={styles.loginForm} onSubmit={login} >

          <label className={styles.label}>
            <span >E-mail</span>
            <input className={styles.input} type="email" onChange={(e) => setEmail(e.target.value)} required />
          </label>

          <label className={styles.label}>
            <span>Password</span>
            <input className={styles.input} type="password" onChange={(e) => setPassword(e.target.value)} required />
          </label>

          <label className={styles.label}>
            <input type="submit" value="Log in" />
          </label>

          <Link to="/register" className={styles.register}>
            I don't have a account:<span>register</span>
          </Link>

        </form>

      </div>

    </div>
  )
}

export default FormLogin