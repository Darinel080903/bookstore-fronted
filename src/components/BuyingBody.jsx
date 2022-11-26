import React from 'react'
import styles from "../css/BuyingBody.module.css"


function BuyingBody() {


  const Adresses = () => {
    return (
      <>
        <p>Selecciona tu dirección</p>
      </>
    )

  }

  const Payment = () => {

  }

  const Confirmation = () => {

  }

  return (
    <div className={styles.buyingContainer}>
      <div className={styles.contents}>
        <Adresses />

      </div>
      <div className={styles.aside}>
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
    </div>
  )
}

export default BuyingBody 