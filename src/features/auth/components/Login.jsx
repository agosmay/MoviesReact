import React from 'react';
import './stylesheets/Login.css'
import { useForm } from '../../../common/hooks/useForm'
import { form } from '../../../common/hooks/objetoInicial/form';


const Login = () => {
	
	const {datos, handleChange, handleSubmit} = useForm(form);
	
	return (
		<>
		
			<div className="contenedorLogin">
				<p className="tituloLogin">Sign in with your account</p>
				<form onSubmit={handleSubmit}>
					<div className="contenedorInput">
						<label htmlFor="username" className="labelStyle">Username</label>
						<input type="text" id="username" className="inputStyle" name="username" onChange={handleChange} value={datos.username} required/>
					</div>
					<div className="contenedorInput">
						<label htmlFor="password">Password</label>
						<input type="password" id="password" className="inputStyle" name="password"  onChange={handleChange} value={datos.password} required />
					</div>
					<div className="botonera">
						<button type="submit" className="buttonSignIn">Sign in</button>
					</div>
				</form>
			</div>
		</>
	);
	
}

export default Login;