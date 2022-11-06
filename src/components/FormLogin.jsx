import React from 'react'
import { Outlet, Link } from 'react-router-dom'

import styles from "../css/FormLogin.module.css"

import { useState } from "react"
import axios from "axios"

const baseURL = "localhost:8080/order/login";


function FormLogin() {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleChangeEmail(e) {
    const value = e.target.value;
    setEmail(value);
  }

  function handleChangePassword(e) {
    const value = e.target.value;
    setPassword(value);
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginForm}>


        <h2 className={styles.titleLogin}>Login</h2>

        <form action="" id='form' >

          <label className={styles.label}>
            <span>E-mail</span>
            <input
              onChange={handleChangeEmail}
              type="email"
              id='email'
              placeholder='Write a e.mail adreess'

            />
          </label>

          <label className={styles.label}>
            <span>Password</span>
            <input
              onChange={handleChangePassword}
              type="password"
              id='password'
              placeholder='Write a password'

            />
          </label>

          <label className={styles.label}>
            <input type="submit" value="Log in" id='btn-login' />
          </label>
          
          <Link to="/register" className={styles.register}>
            <p>I don't have a account: <span> register</span> </p>
          </Link>

        </form>

      </div>
    </div>
  )
}

export default FormLogin