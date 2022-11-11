import React , { useState, useEffect } from 'react';
import axios from 'axios';
import { TMDB } from '../../../config/tmdb';
import DisplaySeries from './DisplaySeries';
import './stylesheets/DisplaySeries.css';

const SeriesGrid = () => {
	
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading]=useState(true);
	const [error, setError]= useState(null);
	
	const fetchingData = async ()=> {
		
		console.log('funcionando')
	
		
		try{
			
			
			
			const url = 'https://api.themoviedb.org/3/tv/popular?api_key=f13cb44e3714892abaf11fbceca2df42';
			const datos = await axios(url)
			setData(datos.data.results)
			console.log(datos.data.results)
		
			
		}catch(err){
			
			setError(err);
		}finally {
			setIsLoading(false)
		}
		
	}
	
	
	
	
	
	useEffect(()=> {
		fetchingData();
		
	},[])
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
						poster={`http://image.tmdb.org/t/p/w300/${serie.poster_path}`}
						overview={serie.overview}
					
					/>
				
				))
			}
			</ul>
			
		</>
	);
}

export default SeriesGrid;