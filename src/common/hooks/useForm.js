import React , { useState } from 'react'


export const useForm = (form)=> {
	
const [datos, setDatos]=  useState(form)
	
	const handleChange =(e) => {
		const { name , value } = e.target;
		setDatos({
			...datos, 
			[name]: value
		})
		
	
		
	}
	
	const handleSubmit = (e)=> {
		e.preventDefault();
		console.log('iniciaste sesion')
		console.log(datos)
		
	}
	
	return {datos, handleChange, handleSubmit};
	
	
	
}
