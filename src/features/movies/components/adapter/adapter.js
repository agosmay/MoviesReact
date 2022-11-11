import { TMDB } from '../../../../config/tmdb'
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
		poster_path: TMDB.images.base_url + TMDB.images.backdrop_sizes.w300 + movie.poster_path,
		release_date: movie.release_date,
		title: movie.title,
		vote_average: movie.vote_average,
		vote_count: movie.vote_count	
	}		
))
	
}



/*
backdrop_path
: 
"/3XjDhPzj7Myr8yzsTO8UB6E2oAu.jpg"
first_air_date
: 
"2011-02-28"
genre_ids
: 
(2) [18, 80]
id
: 
31586
name
: 
"La Reina del Sur"
origin_country
: 
['US']
original_language
: 
"es"
original_name
: 
"La Reina del Sur"
overview
: 
"After years of blood, sweat and tears, a woman of humble origin ends up becoming a drug trafficking legend, with all that that means..."
popularity
: 
3668.16
poster_path
: 
"/p11t8ckTC6EiuVw5FGFKdc2Z7GH.jpg"
vote_average
: 
7.8
vote_count
: 
1375*/














