import React, { useState, useContext } from 'react';
import { MovieContext } from './MovieContext';
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
        // const id = uuidv4();
        // dispatch({
        //     type: 'ADD_MOVIE',
        //     payload: {...input, id}
        // })
        addMovie({ ...input})
    }

    return (
        <form onSubmit={addMovieHandler}>
            <input type='text' name='name' onChange={onChangeHandler} value={input.name} />
            <input type='text' name='price' onChange={onChangeHandler} value={input.price} />
            <button>Submit</button>
        </form>
    );
};

export default AddMovie;