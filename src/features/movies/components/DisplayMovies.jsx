import React from 'react';
import './stylesheets/DisplayMovies.css'

const DisplayMovies= ( { title , poster } ) => {
	return(
		<>
				<li className="grid-item title">
					<div>{title}</div>
					<img src={poster} alt={title} />
				</li>
		</>
		
	);
	
}


export default DisplayMovies;