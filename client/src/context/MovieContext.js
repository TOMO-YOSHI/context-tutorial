import React, { useState, createContext, useReducer } from 'react';

export const MovieContext = createContext();

const initialState = {
    movies: [
        // {
        //     name: 'No data',
        //     price: '--',
        //     id: 999999
        // },
        // {
        //     name: 'Game of Thrones',
        //     price: '$10',
        //     id: 2566124
        // },
        // {
        //     name: 'Inception',
        //     price: '$10',
        //     id: 23524
        // }
    ]
}

const movieReducer = (state, action) => {
    switch (action.type) {
        case 'GET_MOVIES':
            return {
                ...state,
                movies: action.payload.movies
            }
        case 'ADD_MOVIE':
            return {
                ...state,
                movies: [
                    ...state.movies, action.payload
                ]
            }
        case 'DELETE_MOVIE':
            const updatedMoviesList = state.movies.filter(movie => movie.id !== action.payload.id);
            return {
                ...state,
                movies: [...updatedMoviesList]
            }
        default:
            return state;
    }
}

export const MovieProvider = (props) => {
    const [state, dispatch] = useReducer(movieReducer, initialState);

    // const getMovies = (dispatch) => async() => {
    const getMovies = async() => {
        const movies = await fetch('http://localhost:8888/api/movies')
        .then(response => response.json())
        .then(response => response)
        .catch(error => console.log(error))

        dispatch({
            type: 'GET_MOVIES' ,
            payload: { movies }
        })
    }

    const addMovie = async ({ name, price }) => {
        const {id} = await fetch('http://localhost:8888/api/movies', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, price })
        })
        .then(response => response.json())
        .then(response => response)
        .catch(error => console.log(error))

        // console.log(id)

        dispatch({
            type: 'ADD_MOVIE',
            payload: { name, price, id }
        })
    }

    const deleteMovie = async({id}) => {
        await fetch('http://localhost:8888/api/movies', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id})
        })
        .then(response => response.json())
        .then(response => response)
        .catch(error => console.log(error))

        dispatch({
            type: 'DELETE_MOVIE',
            payload: {id}
        })
    }

    const value = {state, dispatch, getMovies, addMovie, deleteMovie}

    return(
        <MovieContext.Provider value={value}>
            {props.children}
        </MovieContext.Provider>
    );
}