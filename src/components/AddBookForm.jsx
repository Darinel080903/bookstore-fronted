import React from 'react'
import styles from "../css/AddBook.module.css"
import { UserContext } from '../context/UserContext'
import { useState, useRef, useContext } from "react"
import { Outlet, Link, Navigate } from 'react-router-dom'

function AddBookForm() {

    const { user, setUser } = useContext(UserContext);

    const form = useRef(null);

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(form.current);

        fetch('http://localhost:8080/book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: formData.get('bookName'),
                cover: formData.get('cover'),
                description: formData.get('description'),
                price: formData.get('price'),
                author: formData.get('author'),
                editorial: formData.get('editorial'),
                year: formData.get('year'),
            })
        })
            .then(res => res.json())
            .then(data => setUser(data))
            .catch(err => console.error(err))

    }

    function handleChangeName(e) {
        const value = e.target.value;
        setBookName(value);
    }
    function handleChangeCover(e) {
        const value = e.target.value;
        setCover(value);
    }
    function handleChangeDescription(e) {
        const value = e.target.value;
        setDescription(value);
    }
    function handleChangeYear(e) {
        const value = e.target.value;
        setYear(value);
    }
    function handleChangePrice(e) {
        const value = e.target.value;
        setPrice(value);
    }
    function handleChangeAuthor(e) {
        const value = e.target.value;
        setAuthor(value);
    }
    function handleChangeEditorial(e) {
        const value = e.target.value;
        setEditorial(value);
    }

    const [bookName, setBookName] = useState("");
    const [cover, setCover] = useState("");
    const [description, setDescription] = useState("");
    const [year, setYear] = useState("");
    const [price, setPrice] = useState("");
    const [author, setAuthor] = useState("");
    const [editorial, setEditorial] = useState("");

    return (
        <div className={styles.addBookContainer}>
            <div className={styles.addBookForm}>
                <form className={styles.form} method='' id='' onSubmit={handleSubmit} ref={form} >
                    <label className={styles.label}>
                        <span>Book name</span>
                        <input
                            onChange={handleChangeName}
                            type="text"
                            name='bookName'
                            id='bookName'

                        />
                    </label>
                    <label className={styles.label}>
                        <span>Cover</span>
                        <input
                            onChange={handleChangeCover}
                            type="text"
                            name='cover'
                            id='cover'

                        />
                    </label>
                    <label className={styles.label}>
                        <span>Description</span>
                        <input
                            onChange={handleChangeDescription}
                            type="text"
                            name='description'
                            id='description'

                        />
                    </label>
                    <label className={styles.label}>
                        <span>Price</span>
                        <input
                            onChange={handleChangePrice}
                            type="number"
                            name='price'
                            id='price'

                        />
                    </label>
                    <label className={styles.label}>
                        <span>Author</span>
                        <input
                            onChange={handleChangeAuthor}
                            type="text"
                            name='author'
                            id='author'

                        />
                    </label>
                    <label className={styles.label}>
                        <span>Editorial</span>
                        <input
                            onChange={handleChangeEditorial}
                            type="text"
                            name='editorial'
                            id='editorial'
                        />
                    </label>
                    <label className={styles.label}>
                        <span>Year of publication</span>
                        <input
                            onChange={handleChangeYear}
                            type="date"
                            name='year'
                            id='year'
                        />
                    </label>
                    <label className={styles.label}>
                        <span>Image link</span>
                        <input
                            onChange={handleChangeYear}
                            type="text"
                            name='link'
                            id='link'
                        />
                    </label>
                    <label>
                        <button type='submit' className={styles.btnAddBook}>Submit</button>
                    </label>
                </form>
            </div>
        </div>
    );
}

export default AddBookForm;