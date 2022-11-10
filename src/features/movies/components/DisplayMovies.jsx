import React from 'react';
import './stylesheets/DisplayMovies.css'

const DisplayMovies= ( { title , poster , overview } ) => {
	return(
		<>
				<li className="grid-item title">
					<div>{title}</div>
					<img src={poster} alt={title} />
					<p className="movieOverview">{overview}</p>
					<button className="buttonPlay" onClick={()=> alert(`Watch Movie ${title}`)}>Play</button>
				</li>
		</>
		
	);
	
}


export default DisplayMovies;