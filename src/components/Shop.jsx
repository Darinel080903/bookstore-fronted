import React from 'react'
import styles from '../css/Shop.module.css'
import img from '../assets/images/imagen-01.png'
import { AiFillDelete } from "react-icons/ai"



function Shop() {
   return (

      <>
         <div className={styles.ContainerTitle}>
            <strong><p>Mi bolsa</p></strong>
         </div>

         <div className={styles.ContainerForm}>

            <div className={styles.ContainerBook}>



               <div className={styles.ContainerBookTitle}>

                  <div className={styles.ContainerImg}>
                     <h3>Tu libro</h3>
                  </div>

                  <div className={styles.ContainerBookPrice}>
                     <h3>Precio</h3>
                  </div>

                  <div className={styles.ContainerBookSub}>
                     <h3>Subtotal</h3>
                  </div>

                  <div className={styles.ContainerBookDelete}>
                     <h3>Eliminar</h3>
                  </div>

               </div>




               <div className={styles.ContainerBookContent}>

                  <div className={styles.ContainerImgCont}>

                     <img className={styles.ContentImg} src={img} />
                     <h3>Tu libro</h3>
                     <p>Cantidad</p>
                     <strong><p>{'('+'5'+')'}</p></strong>
                  </div>

                  <div className={styles.ContainerBookPriceCont}>
                     <p>{'$'+'----'}</p>
                  </div>

                  <div className={styles.ContainerBookSubCont}>
                  <p>{'$'+'----'}</p>
                  </div>

                  <div className={styles.ContainerBookDeleteCont}>
                     <AiFillDelete className={styles.DeleteIcon}/>
                  </div>

               </div>













            </div>



            <div className={styles.ContainerSell}>
               <div className={styles.ContainerSummary}>
                  <h2>Resumen del pedido</h2>
               </div>
               <div className={styles.ContainerSubtotal}>
                  <strong><p>Subtotal</p></strong>
                  <p>{'$' + '----'}</p>
               </div>

               <div className={styles.ContainerSent}>

                  <div className={styles.ContainerTextSent}>
                     <h3>Envío</h3>
                     <p>A partir de $399 envio gratis</p>
                     <strong><p> (Recíbelo de 1 a 3 días hábiles.) </p></strong>
                  </div>

                  <div className={styles.ContainerPriceSent}>
                     <p>{'$' + '----'}</p>
                  </div>

               </div>

               <div className={styles.ContainerTotal}>
                  <strong><p>Total</p></strong>
                  <p>{'$' + '----'}</p>
               </div>

               <div className={styles.ContainerButton}>
                  <div>
                     <button type='submit' className={styles.ButtonForm}>Comprar</button>
                  </div>
               </div>

               <div className={styles.ContainerPolicy}>
                  <h3>Envio y entrega</h3>
                  <p>Los pedidos son enviados diariamente con entregas de lunes a domingo (hasta las 10 pm).</p>
               </div>

            </div>

         </div>

      </>

   )
}

export default Shop