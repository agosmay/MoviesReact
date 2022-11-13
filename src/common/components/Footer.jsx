import React from 'react';
import './stylesheets/Footer.css';



const Footer  = () => {
	return (
		<nav>
			<ul className="navList">
				<a className="ancla" href="https://www.facebook.com/"><li className="navItem">Facebook</li></a>
				<a className="ancla" href="https://www.instagram.com/"><li className="navItem">Instagram</li></a>
				<a className="ancla" href="https://twitter.com"><li className="navItem">Twitter</li></a>
				<li className="ancla" className="navItem">@Copyright 2022</li>
			</ul>
		</nav>
	);
	
}

export default Footer;