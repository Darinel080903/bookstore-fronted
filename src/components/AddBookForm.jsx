import React from 'react'
import styles from "../css/AddBook.module.css"
import { useState, useRef, useContext, useEffect } from "react"
import Swal from 'sweetalert2'

function AddBookForm() {

    const [authors, setAuthors] = useState([]);
    const [editorials, setEditorials] = useState([])
    const [typeOp, setTypeOp] = useState()
    const [bearerToken, setBearerToken] = useState(JSON.parse(localStorage.getItem("user-token")));


    useEffect(() => {
        fetch('http://localhost:8080/author', {
            headers: {
                'Content-Type': 'application/json',
                'authorization': 'Bearer ' + bearerToken,
            },
        })
            .then(response => response.json())
            .then(data => setAuthors(data.data));

    }, [])

    useEffect(() => {
        fetch('http://localhost:8080/editorial', {
            headers: {
                'Content-Type': 'application/json',
                'authorization': 'Bearer ' + bearerToken,
            },
        })
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
                'Content-Type': 'application/json',
                'authorization': 'Bearer ' + bearerToken, 
            },
            body: JSON.stringify({
                name: formData.get('bookName'),
                cover: formData.get('cover'),
                description: formData.get('description'),
                price: formData.get('price'),
                authorId: author,
                editorialId: editorial,
                year: formData.get('year'),
                dateAdded: dateAdded
            })
        })
            .then(res => res.json())
            .catch(err => console.error(err))

    }

    function createAuthor(e) {
        e.preventDefault();

        fetch('http://localhost:8080/author', {
            method: 'POST',
            hheaders: {
                'Content-Type': 'application/json',
                'authorization': 'Bearer ' + bearerToken, 
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
                'Content-Type': 'application/json',
                'authorization': 'Bearer ' + bearerToken, 
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
    function handleChangeDate(e){
        const value = e.target.value;
        setDateAdded(value);
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
    const [dateAdded, setDateAdded] = useState("")
    const [year, setYear] = useState("");
    const [price, setPrice] = useState("");
    const [author, setAuthor] = useState();
    const [editorial, setEditorial] = useState();
    const [authorName, setAuthorName] = useState("")
    const [editorialName, setEditorialName] = useState("")

    return (

        <div className={styles.addBookContainer}>
            <div className={styles.addBookForm}>
                <h2 className={styles.h2}>Agregar Libro</h2>
                <form className={styles.form} method='' id='' onSubmit={handleSubmit} ref={form} >
                    <label className={styles.label}>
                        <span>Nombre del Libro</span>
                        <input
                            onChange={handleChangeName}
                            type="text"
                            name='bookName'
                            id='bookName'

                        />
                    </label>
                    <label className={styles.label}>
                        <span>Precio</span>
                        <input
                            onChange={handleChangePrice}
                            type="number"
                            name='price'
                            id='price'

                        />
                    </label>
                    <label className={styles.label}>
                        <span>Autor</span>
                        <select onChange={handleChangeAuthor}>
                            <option selected>Selecciona un Autor</option>
                            {
                                authors.map(author => {
                                    return (
                                        <option value={parseInt(author.id)} name="author" id='author'>{author.name}</option>

                                    );
                                })
                            }
                        </select>
                    </label>
                    <label className={styles.label}>
                        <span>Editorial</span>
                        <select onChange={handleChangeEditorial}>
                            <option selected>Selecciona una editorial</option>
                            {
                                editorials.map(editorial => {
                                    return (
                                        <option value={parseInt(editorial.id)} name='editorial' id='editorial'>{editorial.name}</option>
                                    );
                                })
                            }
                        </select>
                    </label>
                    <label className={styles.label}>
                        <span>Año de publicacion</span>
                        <input
                            onChange={handleChangeDate}
                            type="date"
                            name='year'
                            id='year'
                        />
                    </label>
                    <label className={styles.label}>
                        <span>Link de la imagen</span>
                        <input
                            onChange={handleChangeCover}
                            type="text"
                            name='cover'
                            id='cover'
                        />
                    </label>
                    <label className={styles.label}>
                        <span>Descripcion</span>
                        <input
                            onChange={handleChangeDescription}
                            type="text"
                            name='description'
                            id='description'
                        />
                    </label>
                    <label className={styles.label}>
                        <span>Fecha de adicion</span>
                        <input
                            onChange={handleChangeYear}
                            type="datetime"
                            name='dateAdded'
                            id='dateAdded'
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
                            <span>Ingresar nuevo autor</span>
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