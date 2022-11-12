import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../componentes/Home'
import  Login from '../componentes/Login'
import { PrivateHome } from '../componentes/PrivateHome'
import  ProtectedRoutes from './ProtectedRoutes'
import Layout from './Layout'

export const AppRoutes = () => {
	
	return (
		<BrowserRouter>
			<Routes>
				<Route path="*" element=
					{<ProtectedRoutes>
						<Layout>
							<Routes>
								
									<Route 
										path="/private-home"
										element={<PrivateHome />}
									/>
									<Route 
										path="/otra"
										element={<div>Otra Ruta</div>}
									/>
								
							</Routes>
						</Layout>
					</ProtectedRoutes>
					}
				/>
				<Route 
				path="/"
				element={<Home />}
				/>
				<Route 
				path="/login"
				element={<Login />}
				/>	
			</Routes>
		</BrowserRouter>
	
	);
	
}

