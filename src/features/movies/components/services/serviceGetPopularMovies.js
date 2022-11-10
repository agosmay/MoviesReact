import { ENV } from '../../../../environment/environment';
import { TMDB } from '../../../../config/tmdb';
import axios from 'axios';
import { moviesAdapter } from '../adapter/adapter'


export const serviceGetPopularMovies = async () => {
		const url = TMDB.api(TMDB.path.movies.popular)
			const res = await(url)
			
			const adaptedResponse = moviesAdapter(res.data.results)

			
			return adaptedResponse;
		
			
	
}



