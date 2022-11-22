import React from 'react'
import { useLocation } from 'react-router'
import { useEffect, useState } from 'react'
import styles from '../css/Search.module.css'



function Search() {



  const location = useLocation();

  const { bookSearched } = location.state;

  const [results, setResults] = useState();

  useEffect(() => {
    fetch('http://localhost:8080/book/name/' + bookSearched)
      .then(response => response.json())
      .then(data => setResults(data.data));

  }, [])




  return (
    <div className={styles.searchContainer}>

      <div className={styles.filters}></div>

      {
        results ?

          <div className={styles.resultsContainer}>
            <div className={styles.result}>
              <img className={styles.cover} src={results[0].cover} alt="" />
              <div className={styles.info}>

                <div className={styles.left}>
                  <div>
                    <h1 className={styles.name}>{results[0].name}</h1>
                    <p className={styles.author}>{results[0].authorName}</p>
                  </div>  
                  <p className={styles.description}>{results[0].description}</p>
                </div>

                <div className={styles.right}>
                  <p className={styles.price}>$ {results[0].price} </p>
                </div>

              </div>
            </div>
          </div>


          :
          <div className={styles.notResults}>
            <p>Not results found</p>
          </div>

      }

    </div>
  )
}

export default Search