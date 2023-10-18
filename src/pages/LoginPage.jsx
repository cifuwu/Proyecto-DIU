import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginPage() {
	return (
		<div className='flex min-h-screen justify-center items-center'>
			<div className='w-[80%] min-h-[500px] shadow-lg rounded-lg p-4 bg-green-600'>
				
				<div className='text-center text-gray-50 text-3xl font-medium'>
					Iniciar sesión
				</div>

				<div className='mt-5 text-center text-gray-50 text-lg font-medium'>
					Ingrese sus crendenciales para ingresar a la aplicación.
				</div>

				<div className='mt-10'>
					<label htmlFor="mail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo</label>
					<input type="text" id="mail" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="correo" required></input>
        </div>

				<div className='mt-3'>
					<label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
					<input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Contraseña" required></input>
        </div>

				<div className='mt-10'>
					<Link to={'/opcciones'}>
						<button type="button" className=" w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Iniciar sesión</button>
					</Link>
				</div>

			</div>
		</div>
	)
}
