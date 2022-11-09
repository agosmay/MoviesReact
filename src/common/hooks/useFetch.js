import React , { useState , useEffect } from 'react';
import axios from 'axios';
import { ENV } from '../../environment/environment'

export const useFetch = () => {
	
	const [data, setData]=useState([]);
	const [isLoading, setIsLoading]=useState(true);
	const [error, setError]=useState(null);

	
	const fetchingData = async () => {
		const url=`https://api.themoviedb.org/3/movie/popular?api_key=${ENV.API_KEY}`
		try{
			const res= await axios(url)
			setData(res.data.results)
			
		
			
			
			
		}catch(err){
			
			console.log(err)
			
		}
		
		
	}
	
	useEffect(()=> {
		fetchingData();
		
	},[])
	
	
	
	return {data, isLoading, error}
	
	
}