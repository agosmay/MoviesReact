import React , { useState , useEffect } from 'react';
import { serviceGetPopularMovies } from '../../features/movies/components/services/serviceGetPopularMovies'


export const useFetch = () => {
	
	const [data, setData]=useState([]);
	const [isLoading, setIsLoading]=useState(true);
	const [error, setError]=useState(null);

	
	const fetchingData = async () => {
		try{
			const data= await serviceGetPopularMovies()
			setData(data)		
		}catch(err){
			console.log(err)
		}finally{
			setIsLoading(false)
		}
		
		
	}
	
	useEffect(()=> {
		fetchingData();
		
	},[])
	
	
	
	return {data, isLoading, error}
	
	
}