import React from 'react'
import styles from "../css/AddBook.module.css"
import { useState, useRef, useContext, useEffect } from "react"

function AddBookForm() {

    const [authors, setAuthors] = useState([]);
    const [editorials, setEditorials] = useState([])
    const [typeOp, setTypeOp] = useState()

    useEffect(() => {
        fetch('http://localhost:8080/author')
            .then(response => response.json())
            .then(data => setAuthors(data.data));

    }, [])

    useEffect(() => {
        fetch('http://localhost:8080/editorial')
            .then(response => response.json())
            .then(data => setEditorials(data.data));

    }, [])


    const form = useRef(null);

    const formA = useRef(null);

    const formE = useRef(null);

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
                authorId: author,
                editorialId: editorial,
                year: formData.get('year'),
                dateAdded: formData.get('yearAdded')
            })
        })
            .then(res => res.json())
            .catch(err => console.error(err))

    }

    function createAuthor(e) {
        e.preventDefault();

        fetch('http://localhost:8080/author', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: authorName
            })
        })
            .then(res => res.json())
            .catch(err => console.error(err))
    }

    function createEditorial(e) {
        e.preventDefault();

        fetch('http://localhost:8080/editorial', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: editorialName
            })
        })
            .then(res => res.json())
            .catch(err => console.error(err))
    }

    

    function handleChangeName(e) {
        const value = e.target.value;
        setBookName(value);
    }
    function handleChangeNameAuthor(e) {
        const value = e.target.value;
        console.log(value)
        setAuthorName(value);
    }
    function handleChangeNameEditorial(e) {
        const value = e.target.value;
        console.log(value)
        setEditorialName(value);
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
        {
            console.log(value)
        }
        setAuthor(value);
        return value
    }
    function handleChangeEditorial(e) {
        const value = e.target.value;
        {
            console.log(value)
        }
        setEditorial(value);
        return value
    }

    const [bookName, setBookName] = useState("");
    const [cover, setCover] = useState("");
    const [description, setDescription] = useState("");
    const [year, setYear] = useState("");
    const [price, setPrice] = useState("");
    const [author, setAuthor] = useState();
    const [editorial, setEditorial] = useState();
    const [authorName, setAuthorName] = useState("")
    const [editorialName, setEditorialName] = useState("")

    return (
        <div className={styles.addBookContainer}>
            <div className={styles.addBookForm}>
                <h2 className={styles.h2}>Add book</h2>
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
                        <span>Author</span>
                        <select onChange={handleChangeAuthor}>
                            <option selected>Select an author</option>
                            {
                                authors.map(author => {
                                    return (
                                        <option value={parseInt(author.id)} name="author" id='author'>{author.name}</option>

                                    );
                                })
                            }
                            <option value="new">New author</option>
                        </select>
                    </label>
                    <label className={styles.label}>
                        <span>Editorial</span>
                        <select onChange={handleChangeEditorial}>
                            <option selected>Select an editorial</option>
                            {
                                editorials.map(editorial => {
                                    return (                                     
                                            <option value={parseInt(editorial.id) } name='editorial' id='editorial'>{editorial.name}</option>
                                    );
                                })
                            }
                            <option value='new'>New editorial</option>
                        </select>
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
                        <span>Year of publication</span>
                        <input
                            onChange={handleChangeYear}
                            type="date"
                            name='year'
                            id='year'
                        />
                    </label>
                    <label className={styles.label}>
                        <span>Year of adition</span>
                        <input
                            onChange={handleChangeYear}
                            type="datetime"
                            name='yearAdded'
                            id='yearAdded'
                        />
                    </label>
                    <label className={styles.label}>
                        <span>Image link</span>
                        <input
                            onChange={handleChangeCover}
                            type="text"
                            name='cover'
                            id='cover'
                        />
                    </label>
                    <label>
                        <button type='submit' className={styles.btnAddBook}>Submit</button>
                    </label>
                </form>
            </div>
            <div className={styles.addForm}>
                <div className={styles.addAuthorEditorial}>
                    <form className={styles.formAuthorEditorial} method='' id='' onSubmit={createAuthor} ref={formA}>
                        <label className={styles.label}>
                            <span>Or create an author</span>
                            <input
                                onChange={handleChangeNameAuthor}
                                type="text"
                                name='authorS'
                                id='authorS'
                            />
                        </label>
                        <label>
                            <button type='submit' className={styles.btnAddBook}>Submit</button>
                        </label>
                    </form>
                </div>
                <div className={styles.addAuthorEditorial}>
                    <form className={styles.formAuthorEditorial} method='' id='' onSubmit={createEditorial} ref={formE}>
                    <label className={styles.label}>
                            <span>Or create an editorial</span>
                            <input
                                onChange={handleChangeNameEditorial}
                                type="text"
                                name='editorialS'
                                id='editorialS'
                            />
                        </label>
                        <label>
                            <button type='submit' className={styles.btnAddBook}>Submit</button>
                        </label>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default AddBookForm;