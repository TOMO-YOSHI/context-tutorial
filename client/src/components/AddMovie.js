import React, { useState, useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
// import { v4 as uuidv4 } from 'uuid';

const AddMovie = () => {
    // const [name, setName] = useState('');
    // const [price, setPrice] = useState('');
    const [input, setInput] = useState({
        name: '',
        price: ''
    })
    // const [movies, setMovies] = useContext(MovieContext);
    const { state: { movies }, dispatch, addMovie } = useContext(MovieContext);

    const onChangeHandler = (e) => {
        setInput(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const addMovieHandler = e => {
        e.preventDefault();
        addMovie({ ...input})
    }

    return (
        <form onSubmit={addMovieHandler}>
            <input type='text' name='name' onChange={onChangeHandler} value={input.name} placeholder="Enter movie name" />
            <input type='text' name='price' onChange={onChangeHandler} value={input.price} placeholder="Enter place" />
            <button>Submit</button>
        </form>
    );
};

export default AddMovie;