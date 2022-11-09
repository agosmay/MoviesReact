import React from 'react';
import { useFetch } from '../../../common/hooks/useFetch'
import DisplayMovies from './DisplayMovies'
import './stylesheets/DisplayMovies.css'


const MoviesGrid = () => {
	
	const {data, isLoading, error} = useFetch();
	console.log(data)
	
	return(
		<>
			<h1 className="title">MOVIES</h1>
			<ul className="grid-container">
			{
				data.map(movie=> (
					<DisplayMovies
						key={movie.id}
						id={movie.id}
						title={movie.title}
						poster={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
						
						
						
					/>
				))
				
				
			}
			</ul>
		</>
	
	);



}

export default MoviesGrid;