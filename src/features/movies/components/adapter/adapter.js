export const moviesAdapter = (movies)=> {
	
	
	return movies.map((movie)=> (
		{
		id: movie.id,
		adult: movie.adult,
		backdrop_path: movie.backdrop_path,
		original_language: movie.original_language,
		original_title: movie.original_title,
		overview: movie.overview,
		popularity: movie.popularity,
		poster_path: movie.poster_path,
		release_date: movie.release_date,
		title: movie.title,
		vote_average: movie.vote_average,
		vote_count: movie.vote_count	
	}		
))
	
}















