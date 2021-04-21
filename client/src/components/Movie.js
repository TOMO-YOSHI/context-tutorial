import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';

const Movie = ({name, price, id}) => {
    const { dispatch, deleteMovie } = useContext(MovieContext);

    const deleteMovieHandler = (e) => {
        // console.log(id);
        // dispatch({
        //     type: 'DELETE_MOVIE',
        //     payload: {id}
        // })
        deleteMovie({id});
    }

    return (
        <div>
            <h3>{name} <span id={id} style={{color: 'red', cursor: 'pointer'}} onClick={deleteMovieHandler}>x</span></h3>
            {
                price ? <p>${price}</p> : <p>No price data</p>
            }
        </div>
    );
};

export default Movie;