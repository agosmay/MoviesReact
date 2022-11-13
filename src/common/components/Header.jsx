import react from 'react';
import './stylesheets/Header.css'
import { Link } from 'react-router-dom'



const Header = () => {
	return (
		<nav>
			<ul className="navList">
				<Link className="ancla" to="/"><li className="navItem">Home</li></Link>
				<Link className="ancla" to="/popular-series"><li className="navItem">Series</li></Link>
				<Link className="ancla" to="/popular-movies"><li className="navItem">Peliculas</li></Link>
				<Link className="ancla" to="/login"><li className="navItem">Login</li></Link>
			</ul>
		</nav>
	
	);
	
	
}

export default Header;