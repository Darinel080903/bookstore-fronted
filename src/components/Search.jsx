import React from 'react'
import { useLocation } from 'react-router'
import { useEffect, useState } from 'react'
import styles from '../css/Search.module.css'
import { Link } from 'react-router-dom'




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
            {
              results.map(result => {
                return (
                  <Link className={styles.result} to='/book' state={{ nBook: result.id }} >

                    <img className={styles.cover} src={result.cover} alt="" />
                    <div className={styles.info}>

                      <div className={styles.left}>
                        <div>
                          <h1 className={styles.name}>{result.name}</h1>
                          <p className={styles.author}>{result.authorName}</p>
                        </div>
                        <p className={styles.description}>{result.description}</p>
                      </div>

                      <div className={styles.right}>
                        <p className={styles.price}>$ {result.price} </p>
                      </div>

                    </div>
                  </Link>
                )
              })
            }
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