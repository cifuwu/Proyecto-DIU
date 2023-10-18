import React from 'react'
import { Link } from 'react-router-dom'
import Botones from '../../components/Botones'


export default function OpccionesPage() {
	return (
		<div className='flex h-screen justify-center items-center'>
			<div className='w-[80%] min-h-[500px] shadow-lg rounded-lg p-4 bg-green-600'>
				
				<div className='text-center text-gray-50 text-3xl font-medium'>
					¿Qué vas a reciclar hoy?
				</div>

				<div className='flex flex-wrap gap-4 mt-5'>
					<div className="flex items-center">
						<input id="papel" type="checkbox" defaultChecked value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"></input>
						<label htmlFor="papel" className="ml-2 text-base font-medium text-white ">Papel</label>
					</div>

					<div className="flex items-center">
						<input id="biodegradables" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"></input>
						<label htmlFor="biodegradables" className="ml-2 text-base font-medium text-white ">Biodegradables</label>
					</div>

					<div className="flex items-center">
						<input id="carton" type="checkbox" defaultChecked value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"></input>
						<label htmlFor="carton" className="ml-2 text-base font-medium text-white ">Cartón</label>
					</div>

					<div className="flex items-center">
						<input id="plasticos" type="checkbox" defaultChecked value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"></input>
						<label htmlFor="plasticos" className="ml-2 text-base font-medium text-white ">Plásticos</label>
					</div>

					<div className="flex items-center">
						<input id="latas" type="checkbox" value="" defaultChecked className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"></input>
						<label htmlFor="latas"  className="ml-2 text-base font-medium text-white ">Latas</label>
					</div>

					<div className="flex items-center">
						<input id="vidrio" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"></input>
						<label htmlFor="vidrio" className="ml-2 text-base font-medium text-white ">Vidrio</label>
					</div>

				</div>
				

				<div className='mt-10'>
					<Link to={'/recomendaciones'}>
						<button type="button" className=" w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Siguiente</button>
					</Link>
				</div>

			</div>

			<Botones />
			

		</div>
	)
}
