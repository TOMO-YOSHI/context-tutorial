import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';

const Nav = () => {
    // const [ movies, setMovies ] = useContext(MovieContext);
    const { state: {movies} } = useContext(MovieContext);

    return (
        <div>
            <h3>Dev Tomo</h3>
            <p>List of Movies: {movies.length}</p>
        </div>
    );
};

export default Nav;