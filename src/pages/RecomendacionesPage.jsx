import React from 'react'
import { Link } from 'react-router-dom'
import Botones from '../../components/Botones'

export default function RecomendacionesPage() {
	return (
		<div className='flex min-h-screen justify-center items-center'>
			<div className='w-[80%] min-h-[500px] shadow-lg rounded-lg p-4 bg-green-600'>
				
				<div className='text-center text-gray-50 text-3xl font-medium'>
					Recomendaciones
				</div>

				<div className='flex justify-center mt-3 text-gray-50 text-xl font-medium mb-1'>
					<h2 className='border px-2 py-1 rounded-lg bg-slate-400/30'>Papel</h2>
				</div>

				<ul className='text-white'>
					<li>Depositar en contenedor azul.</li>
					<li>Comprimir el papel lo más posible.</li>
				</ul>

				<div className='flex justify-center mt-3 text-gray-50 text-xl font-medium mb-1'>
					<h2 className='border px-2 py-1 rounded-lg bg-slate-400/30'>Cartón</h2>
				</div>

				<ul className='text-white'>
					<li>Depositar en contenedor azul.</li>
					<li>Comprimir el cartón lo más posible.</li>
				</ul>

				<div className='flex justify-center mt-3 text-gray-50 text-xl font-medium mb-1'>
					<h2 className='border px-2 py-1 rounded-lg bg-slate-400/30'>Latas</h2>
				</div>

				<ul className='text-white'>
					<li>Depositar en contenedor amarillo.</li>
					<li>Evite aplastar las latas.</li>
					<li>Transporte en un contenedor para evitar arañazos de las latas.</li>
				</ul>


				<div className='mt-10'>
					<Link to={'/mapa'}>
						<button type="button" className=" w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Continuar</button>
					</Link>
				</div>

			</div>

			<Botones/>
		</div>
	)
}
