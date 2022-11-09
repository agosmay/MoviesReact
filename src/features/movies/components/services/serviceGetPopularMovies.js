import { ENV } from '../../../../environment/environment';
import { TMDB } from '../../../../config/tmdb';
import axios from 'axios';


export const serviceGetPopularMovies = async () => {
		const url = TMDB.api(TMDB.path.movies.popular)
			const res = await(url)
			return res.data.results;
	
}


