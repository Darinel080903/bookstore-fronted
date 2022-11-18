import React from 'react'
import { Outlet, Link, Navigate} from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { useState, useRef, useContext  } from "react"

import styles from "../css/FormLogin.module.css"

function FormLogin() {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {user, setUser} = useContext(UserContext);

  const form = useRef(null);

  function handleSubmit(e){
    e.preventDefault();

    const formData = new FormData(form.current);

    fetch('http://localhost:8080/user/login',{
      method:  'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: formData.get('email'),
        password: formData.get('password')
      })
    })
    .then(res => res.json())
    .then(data => setUser(data.data))
    .catch(err => console.error(err))
  }

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

      {
        user && 
        <Navigate to="/" replace={true} />
      }

      <div className={styles.loginForm}>


        <h2 className={styles.titleLogin}>Login</h2>

        <form action="" id='form' onSubmit={handleSubmit} ref={form} >

          <label className={styles.label}>
            <span>E-mail</span>
            <input className={styles.input}
              onChange={handleChangeEmail}
              name='email'
              type="email"
              id='email'
              placeholder='Write a e-mail adreess'
              required
            />
          </label>

          <label className={styles.label}>
            <span>Password</span>
            <input className={styles.input}
              onChange={handleChangePassword}
              name='password'
              type="password"
              id='password'
              placeholder='Write a password'
              required
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