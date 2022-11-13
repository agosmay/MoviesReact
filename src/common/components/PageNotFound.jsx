import React from 'react';
import './stylesheets/PageNotFound.css';
import { Link } from 'react-router-dom';


const PageNotFound=() => {
	return (
		<>
	
			<h1 className="tituloNotFound">Page Not Found</h1>
			<Link className="ancla" to="/">Volver al inicio</Link>
		</>
	);
	
	
}

export default PageNotFound;