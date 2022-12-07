import { useState, useEffect, Component } from 'react'
import styles from '../css/Shop.module.css'
import img from '../assets/images/imagen-01.png'
import { AiFillDelete } from "react-icons/ai"
import { useRef } from 'react';

function Shop() {
   const [user, setUser] = useState(JSON.parse(localStorage.getItem("user-info")));

   const [books, setBooks] = useState([])

   const [orders, setOrders] = useState([]);

   const [orderId, setOrderId] = useState([]);

   useEffect(() => {
      fetch('http://localhost:8080/order/user/' + user.id + '/status/SHOPPING')
         .then(response => response.json())
         .then(data => setOrders(data.data));
   }, [orders])

   function handleChangeStatus(e) {
      const value = e.target.value
      setOrderId(value)
      console.log(value)
   }

   const form = useRef(null)

   function deleteOrder(e) {
      e.preventDefault();
      const formData = new FormData(form.current)
      console.log('Entro a la funcion')
      console.log(formData.get('status'))
      fetch('http://localhost:8080/order/' + formData.get('status'), {
         method: 'DELETE',
         headers: {
            'Content-type': 'application/json'
         },
         body: JSON.stringify({
            'status': 'DELETE'
         })
      })
         .then(res => res.json())
         .catch(err => console.error(err))
   }

   function getData(id) {
      fetch('http://localhost:8080/book')
         .then(response => response.json())
         .then(data => setBooks(data.data))

      return (

         <>
            {
               books.map(book => {
                  return (

                     book.id == id
                        ?
                        <>
                           <img className={styles.ContentImg} src={book.cover} />
                           <h3 className={styles.ContentTitle}>{book.name}</h3>
                        </>
                        :
                        <>
                        </>

                  )
               })
            }

         </>

      )
   }

   return (


      <div className={styles.shopContainer}>
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

               {
                  orders.map(order => {
                     return (

                        <div className={styles.ContainerBookContent}>
                           <div className={styles.ContainerImgCont}>
                              {
                                 getData(order.bookId)


                              }
                              <p className={styles.ContentQuantity}>{"Cantidad"}</p>
                              <p><strong>{"("}</strong>{order.quantity}<strong>{")"}</strong></p>
                           </div>
                           <div className={styles.ContainerBookPriceCont}>
                              <p>{'$' + order.price}</p>

                           </div>
                           <div className={styles.ContainerBookSubCont}>
                              <p>{'$' + order.total}</p>
                              <p>{'---' + order.total}</p>
                           </div>
                           <div className={styles.ContainerBookDeleteCont}>
                              <form method='' id='' onSubmit={deleteOrder} ref={form} >
                                 <input onChange={handleChangeStatus} type='hidden' value={order.id} name='status' id='status' />
                                 <button type='submit' className={styles.deleteButton}><AiFillDelete className={styles.DeleteIcon} /></button>
                                 
                              </form>
                           </div>
                        </div>





                     )
                  })
               }


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
      </div>

   )
}

export default Shop