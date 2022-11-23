import{Link} from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../context/UserContext'

import styles from "../css/FormAdmin.module.css"

function FormAdmi() {
    const {user, setUser} = useContext(UserContext);

    const form = useRef(null);
  
    function handleSubmit(e){
      e.preventDefault();
  
      const formData = new FormData(form.current);
  
      fetch('http://localhost:8080/book',{
        method:  'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then(res => res.json())
      .then(data => setUser(data.data))
      .catch(err => console.error(err))
    }

    return(
        <div className={styles.loginContainer}>
            {
                user && <Navigate to="/" replace={true} />
            }

            <div className={styles.login}>

                <h2 className={styles.titleLogin}>Agregar nuevo libro</h2>

                <form className={styles.loginForm} action="" id='form' onSubmit={handleSubmit} ref={form} > 
                
                <label className={styles.label}>
                    <span>Nombre del libro</span>
                    <input className={styles.input}
                        name='name'
                        type="name"
                        id='name'
                        required
                    />
                </label>

                <label className={styles.label}>
                    <span>Precio</span>
                    <input className={styles.input}
                        name='price'
                        type="price"
                        id='price'
                        required
                    />
                </label>
                
                
                
                
                </form>

            </div>

        </div>
    );
    
}

export default FormAdmi;