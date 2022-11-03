import React from 'react'
import "../css/Login.css"

import {useState} from "react"
import axios from "axios"

const baseURL = "localhost:8080/order/login";


function Login() {


  const [email, setEmail] = useState("");
  const [password, setPassword] =  useState("");

  function handleChangeEmail(e){
    const value = e.target.value;
    setEmail(value);
  }

  function handleChangePassword(e){
    const value = e.target.value;
    setPassword(value);
  }

  return (
    <div className='loginContainer'>
      <div className="loginForm">


        <h2 className='title'>Login</h2>

        <form action="" id='form' >

          <label className='label'>
            <span>E-mail</span>
            <input 
              onChange={handleChangeEmail}
              type="email"
              id='email'
              placeholder='Write a e.mail adreess'
             
            />
          </label>

          <label className='label'>
            <span>Password</span>
            <input
              onChange={handleChangePassword}
              type="password"
              id='password'
              placeholder='Write a password'
              
            />
          </label>

          <label className='label'>
            <input type="submit" value="Log in" id='btn-login' />
          </label>

        </form>
      </div>
    </div>
  )
}

export default Login