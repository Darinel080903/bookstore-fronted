import React from 'react'
import styles from "../css/FormRegister.module.css"
import { useState, useRef, useContext } from "react"
import { Outlet, Link, Navigate } from 'react-router-dom'

import Swal from 'sweetalert2'

function Register() {



    const [user, setUser] = useState(localStorage.getItem("user-info"));

    const form = useRef(null);

    const [success, setSuccess] = useState();

    const [password, setPassword] = useState("")

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
                userName: formData.get('username'),
                email: formData.get('email'),
                password: formData.get('password')
            })
        })
            .then(res => res.json())
            .then(data => setUser(data))
            .catch(err => console.error(err))

    }

    function handelChangePassword(e){
        const value = e.target.value
        setPassword(value)
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

    const UserCorrect = () => {
        localStorage.setItem("user-info", JSON.stringify(user))
        window.location.reload(true);
        return (
            < Navigate to="/" replace={true} />
        )
    }

    return (
        <div className={styles.registerContainer}>
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

            <div className={styles.register}>
                <h2 className={styles.registerTitle}>Registro</h2>
                <form className={styles.registerForm} method="" id="form" onSubmit={handleSubmit} ref={form}>
                    <label className={styles.label}>
                        <span>Nombre</span>
                        <input className={styles.input}
                            type="text"
                            id='name'
                            name='name'

                        />
                    </label>
                    <label className={styles.label}>
                        <span>Apellido</span>
                        <input className={styles.input}
                            type="text"
                            name='lastname'
                            id='lastname'

                        />
                    </label>
                    <label className={styles.label}>
                        <span>Correo</span>
                        <input className={styles.input}
                            type="email"
                            name='email'
                            id='email'

                        />
                    </label>
                    <label className={styles.label}>
                        <span>Usuario</span>
                        <input className={styles.input}
                            type="text"
                            name='username'
                            id='username'

                        />
                    </label>
                    <label className={styles.label}>
                        <span>Contraseña</span>
                        <input className={styles.input}
                        onChange={handelChangePassword}
                            type="password"
                            name='password'
                            id='password'

                        />
                    </label>
                    <label className={styles.label}>
                        <span>Numero de telefono</span>
                        <input className={styles.input}
                            type="text"
                            name='phone'
                            id='phone'
                        />
                    </label>
                    <label className={styles.label}>
                        <span>Direccion</span>
                        <input className={styles.input}
                            type="text"
                            name='address'
                            id='address'

                        />
                    </label>
                    <label className={styles.label}>
                        <span>Año de nacimiento</span>
                        <input className={styles.input}
                            type="date"
                            name='birthday'
                            id='birthday'
                        />
                    </label>
                    <label className={styles.labelButton}>
                        <button type='submit' className={styles.btnRegister}>Registrar</button>
                    </label>
                </form>
            </div>
        </div>
    );
}

export default Register;