import React, { useEffect } from 'react'
import { Outlet, Link, Navigate } from 'react-router-dom'
import { useState, useRef, useContext } from "react"

import Swal from 'sweetalert2'

import styles from "../css/FormLogin.module.css"



function FormLogin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [ user, setUser ] = useState();
  const [success, setSuccess] = useState();

  const login = (e) => {
    e.preventDefault();

    fetch('http://localhost:8080/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'email': email,
        'password': password
      })
    })
      .then(res => res.json())
      .then(data => {
        setUser(data.data)
        setSuccess(data.success)
      })
      .catch(err => console.error(err))

  }

  const UserCorrect = () => {
    localStorage.setItem("user-info", JSON.stringify(user))
    return (
      < Navigate to="/" replace={true} />
    )
  }

  const UserIncorrect = () => {
    console.log(user)
    Swal.fire({
      position: 'bottom',
      title: 'Usuario incorrecto',
      color: '#fff',
      width: '800px',
      background: '#D0342C',
      showConfirmButton: false,
      timer: 1500
    })
    setSuccess()
  }

  return (
    <div className={styles.loginContainer}>

      {
        success == true && (
          UserCorrect()
        )
      }

      {
        success == false && (
          UserIncorrect()
        )

      }



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