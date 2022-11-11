import React , { useState, useEffect } from 'react';
import axios from 'axios';
import DisplaySeries from './DisplaySeries';
import './stylesheets/DisplaySeries.css';
import { useFetch } from '../../../common/hooks/useFetch'
import { serviceGetPopularSeries } from './services/serviceGetPopularSeries'


const SeriesGrid = () => {
	
	const { data, isLoading , error } = useFetch(serviceGetPopularSeries)
	
	return (
		<>
			<h1 className="title">SERIES</h1>
			<ul  className="grid-container">
			{
				data.map((serie)=> (
					<DisplaySeries 
						key={serie.id}
						id={serie.id}
						title={serie.name}
						poster={serie.poster_path}
						overview={serie.overview}
					
					/>
				
				))
			}
			</ul>
			
		</>
	);
}

export default SeriesGrid;