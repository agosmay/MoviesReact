import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import './App.css'
import MoviesGrid from './features/movies/components/MoviesGrid'
import SeriesGrid from './features/tv/components/SeriesGrid'
import Login from './features/auth/components/Login'
import Banner from './common/components/Banner'
import Layout from './common/components/layout/Layout'
import PageNotFound from './common/components/PageNotFound'


const App = () => {
  

  return (
    <div className="App">
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route 
						path="/"
						element={<Banner />}
					
					/>
					<Route
						path="/login"
						element={<Login />}
						
					/>
					<Route
						path="/popular-movies"
						element={<MoviesGrid />}
						
					/>
					<Route
						path="/popular-series"
						element={<SeriesGrid />}
						
					/>
					<Route 
							path="*"
							element={<PageNotFound />}
						/>
				</Routes>
			</Layout>
					
						
				
			
		</BrowserRouter>
		
      
    </div>
  );
}

export default App
