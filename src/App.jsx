import React from 'react';
import './App.css'
import MoviesGrid from './features/movies/components/MoviesGrid'
import SeriesGrid from './features/tv/components/SeriesGrid'


const App = () => {
  

  return (
    <div className="App">
		<MoviesGrid />
		<SeriesGrid />
		
      
    </div>
  );
}

export default App
