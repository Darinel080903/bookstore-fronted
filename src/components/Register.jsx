import React from 'react'
import "../css/Register.css"

import {useState} from "react"

const baseURL = "localhost:8080/order/register";


function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] =  useState("");
    const [name, setName] = useState("");
    const [username, setUsername] =  useState("");
    const [lastname, setLastname] = useState("");
    const [phone, setPhone] =  useState("");
    const [adress, setAdress] = useState("");
    const [bday, setBday] =  useState("");

    function handleChangeEmail(e){
        const value = e.target.value;
        setEmail(value);
      }

      function handleChangeName(e){
        const value = e.target.value;
        setName(value);
      }
      function handleChangeUsername(e){
        const value = e.target.value;
        setUsername(value);
      }
      function handleChangeLastname(e){
        const value = e.target.value;
        setLastname(value);
      }
      function handleChangePhone(e){
        const value = e.target.value;
        setPhone(value);
      }
      function handleChangePassword(e){
        const value = e.target.value;
        setPassword(value);
      }
      function handleChangeAdress(e){
        const value = e.target.value;
        setAdress(value);
      }
      function handleChangeBday(e){
        const value = e.target.value;
        setBday(value);
      }



    return (
        <div className="registerContainer">
            <div className="registerForm">
                <h2>Register</h2>
                <form method="" id="form">
                    <label className='label'>
                        <span>Name</span>
                        <input
                            onChange={handleChangeName}
                            type="text"
                            id='name'
                            placeholder='Write your name'

                        />
                    </label>
                    <label className='label'>
                        <span>Last Name</span>
                        <input
                            onChange={handleChangeLastname}
                            type="text"
                            id='lastname'
                            placeholder='Write your last name'

                        />
                    </label>
                    <label className='label'>
                        <span>E-mail</span>
                        <input
                            onChange={handleChangeEmail}
                            type="email"
                            id='email'
                            placeholder='Write your E-mail'

                        />
                    </label>
                    <label className='label'>
                        <span>Username</span>
                        <input
                            onChange={handleChangeUsername}
                            type="text"
                            id='username'
                            placeholder='Write a username'

                        />
                    </label>
                    <label className='label'>
                        <span>Password</span>
                        <input
                            onChange={handleChangePassword}
                            type="password"
                            id='password'
                            placeholder='Write your password'

                        />
                    </label>
                    <label className='label'>
                        <span>Phone number</span>
                        <input
                            onChange={handleChangePhone}
                            type="number"
                            id='phone'
                            placeholder='Write your phone number'

                        />
                    </label>
                    <label className='label'>
                        <span>Adress</span>
                        <input
                            onChange={handleChangeAdress}
                            type="text"
                            id='adress'
                            placeholder='Write your adress'

                        />
                    </label>
                    <label className='label'>
                        <span>B-day</span>
                        <input
                            onChange={handleChangeBday}
                            type="date"
                            id='birthday'
                            placeholder='Enter your b-day'

                        />
                    </label>
                    <label className='label'>
                        <input type="submit" value="Log in" id='btn-login' />
                    </label>
                </form>
            </div>
        </div>
    );
}

export default Register;