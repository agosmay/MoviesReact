import React , { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext'
import { Link } from 'react-router-dom';

export const PrivateHome = ()=> {

	const { isAuth , user } = useContext(AuthContext)
	console.log(user)
	
	return (
		<>
			<h1>Este es el Home (Privado)</h1>
			<h1>{isAuth ? "Autenticado con exito" : "Por favor inicie sesion"}</h1>
			<h3>Bienvenido {isAuth ? user.email : "Invitado"}</h3>
			<Link to="/otra">Ir a Otra</Link>
	
		</>
	
	);
}