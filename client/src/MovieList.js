import React, { useContext, useEffect } from 'react';
import Movie from './Movie';
import { MovieContext } from './MovieContext';

const MovieList = () => {
    // const [movies, setMovies] = useContext(MovieContext)
    const { state: {movies}, getMovies } = useContext(MovieContext);

    useEffect(()=>{
        getMovies()
    }, []);

    // useEffect(()=>{
    //     console.log(movies)
    // }, [movies])

    if(movies.length === 0) {
        <div>Loading...</div>
    }

    return (
        <div>
            {movies.map(movie => (
                <Movie key={movie.id} name={movie.name} price={movie.price} id={movie.id} />
            ))}
        </div>
    );
};

export default MovieList;