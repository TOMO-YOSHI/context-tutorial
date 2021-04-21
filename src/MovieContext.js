import React, { useState, createContext, useReducer } from 'react';

export const MovieContext = createContext();

const initialState = {
    movies: [
        {
            name: 'Harry Poter',
            price: '$10',
            id: 23124
        },
        {
            name: 'Game of Thrones',
            price: '$10',
            id: 2566124
        },
        {
            name: 'Inception',
            price: '$10',
            id: 23524
        }
    ]
}

const movieReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_MOVIE':
            return {
                ...state,
                movies: [
                    ...state.movies, action.payload
                ]
            }
        default:
            return state;
    }
}

export const MovieProvider = (props) => {
    const [state, dispatch] = useReducer(movieReducer, initialState);

    return(
        <MovieContext.Provider value={{state, dispatch}}>
            {props.children}
        </MovieContext.Provider>
    );
}