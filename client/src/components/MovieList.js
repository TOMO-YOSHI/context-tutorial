import React, { useContext, useEffect, useState } from 'react';
import Movie from './Movie';
import { MovieContext } from '../context/MovieContext';

const MovieList = () => {
    const [ loading, setLoading ] = useState(false);
    const { state: {movies}, getMovies } = useContext(MovieContext);

    useEffect(()=>{
        setLoading(true)
        getMovies()
        setLoading(false)
    }, []);

    // useEffect(()=>{
    //     console.log(movies.length)
    // }, [movies])

    if(movies.length == 0) {
        return <div>No Data</div>
    }

    if (loading) {
        return <div>No Data</div>
    }

    return (
        <div>
            {
                movies ?
                movies.map(movie => (
                    <Movie key={movie.id} name={movie.name} price={movie.price} id={movie.id} />
                ))
                :
                <p>No Data</p>
            }
        </div>
    );
};

export default MovieList;