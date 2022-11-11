import React from 'react';
import './App.css'
import MoviesGrid from './features/movies/components/MoviesGrid'
import SeriesGrid from './features/tv/components/SeriesGrid'
import Login from './features/auth/components/Login'

const App = () => {
  

  return (
    <div className="App">
		<Login />
		<MoviesGrid />
		<SeriesGrid />
		
      
    </div>
  );
}

export default App
