import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai"
import styles from '../css/Advice.module.css'


function Advice() {




  return (
    <div className={styles.adviceContainer}>
      <p>¡Envios gratis a partir de $399 pesos!<AiOutlineShoppingCart /></p>
      
    </div>
  )
}

export default Advice