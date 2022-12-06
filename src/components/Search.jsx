import React from 'react'
import { useLocation } from 'react-router'
import { useEffect, useState } from 'react'
import styles from '../css/Search.module.css'
import { Link  } from 'react-router-dom'
import { AiOutlineFrown } from "react-icons/ai"



function Search() {



  const location = useLocation();

  const { bookSearched } = location.state;

  const [results, setResults] = useState();

  useEffect(() => {
    fetch('http://localhost:8080/book/name/' + bookSearched)
      .then(response => response.json())
      .then(data => setResults(data.data));
  }, [bookSearched])


  function Result({ cover, name, authorName, description, price }) {
    return (
      <>

        <img className={styles.cover} src={cover} alt="" />
        <div className={styles.info}>

          <div className={styles.left}>
            <div>
              <h1 className={styles.name}>{name}</h1>
              <p className={styles.author}>{authorName}</p>
            </div>
            <p className={styles.description}>{description}</p>
          </div>

          <div className={styles.right}>
            <p className={styles.price}>$ {price} </p>
          </div>

        </div>
      </>
    )
  }

  return (
    <div className={styles.searchContainer}>
      <div className={styles.filters}>
        <img src="https://images.unsplash.com/photo-1637681068516-2b22116e68cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
      </div>

      {
        results && (

          results.length != 0 ?
            <div className={styles.resultsContainer}>
              {
                results.map(result => {
                  return (
                    <Link className={styles.result} to='/book' state={{ nBook: result.id }} >
                      <Result
                        key={result.id}
                        cover={result.cover}
                        name={result.name}
                        authorName={result.authorName}
                        description={result.description}
                        price={result.price}
                      />

                    </Link>
                  )
                })
              }
            </div>


            :
            <div className={styles.notResults}>
              <p className={styles.notTitle}>No hay libros con ese nombre</p>
              <p className={styles.iconFrown}><AiOutlineFrown /></p>
            </div>

        )
      }

    </div>
  )
}

export default Search