import React from 'react'
import mapa from '../assets/mapa.png'
import YouHere from '../../components/YouHere'
import ReciclajeHere from '../../components/ReciclajeHere'
import Botones from '../../components/Botones'

export default function MapaPage() {
  return (
    <div>
			<div className='fixed z-10 top-72 left-64 w-20 h-20'>
				<YouHere />
			</div>

			<div className='fixed z-10 top-40 left-60 w-20 h-20'>
				<ReciclajeHere />
			</div>

			<div className='fixed z-10 top-44 left-28 w-20 h-20'>
				<ReciclajeHere />
			</div>

			<div className='fixed z-10 top-64 left-44 w-20 h-20'>
				<ReciclajeHere />
			</div>
			
			<img className='h-screen w-auto object-cover' src={mapa}></img>

			<Botones/>
			
		</div>
  )
}
