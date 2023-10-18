import React from 'react'
import {FaSliders, FaHouseChimney, FaMapLocation} from 'react-icons/fa6'
import { Link } from 'react-router-dom'


export default function Botones() {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-20 bg-white border-t border-gray-200 ">
      <div className="grid h-full max-w-lg grid-cols-3 mx-auto font-medium">
        <Link to={'/opcciones'} className='inline-flex flex-col items-center justify-center px-5 border-gray-200 border-x hover:bg-gray-50 '>
          <FaHouseChimney className='w-9 h-9'/>	
          <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 ">Home</span>
        </Link>
        
        <Link to={'/mapa'} className="inline-flex flex-col items-center justify-center px-5 border-gray-200 border-x hover:bg-gray-50 ">
          <FaMapLocation className='w-9 h-9'/>	
          <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Mapa</span>
        </Link>
        
        <Link to={'/'} className="inline-flex flex-col items-center justify-center px-5 border-gray-200 border-x hover:bg-gray-50 ">
          <FaSliders className='w-9 h-9'/>
          <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Preferencias</span>        
        </Link>
      </div>
    </div>
  )
}
