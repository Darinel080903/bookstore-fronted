import React from 'react'
import styles from "../css/FormRegister.module.css"
import { useState, useRef, useContext } from "react"
import { Outlet, Link, Navigate } from 'react-router-dom'




function Register() {

    

    const [ user, setUser ] = useState(localStorage.getItem("user-info"));

    const form = useRef(null);

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(form.current);

        fetch('http://localhost:8080/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: formData.get('name'),
                lastName: formData.get('lastname'),
                userName: formData.get('username'),
                email: formData.get('email'),
                password: formData.get('password'),
                address: formData.get('address'),
                phoneNumber: formData.get('phone'),
                birth: formData.get('birthday')

            })
        })
            .then(res => res.json())
            .then(data => setUser(data))
            .catch(err => console.error(err))

    }

    



    return (
        <div className={styles.registerContainer}>

            {
                user &&
                <Navigate to="/" replace={true} />
            }

            <div className={styles.register}>
                <h2 className={styles.registerTitle}>Register</h2>
                <form  className={styles.registerForm} method="" id="form" onSubmit={handleSubmit} ref={form}>
                    <label className={styles.label}>
                        <span>Name</span>
                        <input className={styles.input}
                            type="text"
                            id='name'
                            name='name'

                        />
                    </label>
                    <label className={styles.label}>
                        <span>Last Name</span>
                        <input className={styles.input}
                            type="text"
                            name='lastname'
                            id='lastname'

                        />
                    </label>
                    <label className={styles.label}>
                        <span>E-mail</span>
                        <input className={styles.input}
                            type="email"
                            name='email'
                            id='email'

                        />
                    </label>
                    <label className={styles.label}>
                        <span>Username</span>
                        <input className={styles.input}
                            type="text"
                            name='username'
                            id='username'

                        />
                    </label>
                    <label className={styles.label}>
                        <span>Password</span>
                        <input className={styles.input}
                            type="password"
                            name='password'
                            id='password'

                        />
                    </label>
                    <label className={styles.label}>
                        <span>Phone number</span>
                        <input className={styles.input}
                            type="text"
                            name='phone'
                            id='phone'
                        />
                    </label>
                    <label className={styles.label}>
                        <span>Adress</span>
                        <input className={styles.input}
                            type="text"
                            name='address'
                            id='address'

                        />
                    </label>
                    <label className={styles.label}>
                        <span>B-day</span>
                        <input className={styles.input}
                            type="date"
                            name='birthday'
                            id='birthday'
                        />
                    </label>
                    <label className={styles.labelButton}>
                        <button type='submit' className={styles.btnRegister}>Register</button>
                    </label>
                </form>
            </div>
        </div>
    );
}

export default Register;