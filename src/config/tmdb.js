import axios from 'axios';
import { ENV } from '../environment/environment'

export const TMDB = {
	api: axios.create({
		baseURL: 'https://api.themoviedb.org/3',
		params : {
			api_key: ENV.API_KEY,
			
		},
		timeout: 2000,
		
		
	}),
	path: {
	
		movies: {
			latest: '/movie/latest',
			now_playing: '/movie/now_playing',
			popular: '/movie/popular',
			top_rated: '/movie/top_rated',
			upcoming: '/movie/upcoming'
		},
		
		tv : {
			latest: '/tv/latest',
			airing_today: '/tv/airing_today',
			on_the_air: '/tv/on_the_air',
			popular: '/tv/popular',
			top_rated: '/tv/top_rated',
		
		}
	}
}


