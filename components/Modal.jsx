import React from 'react'
import modal from '../src/assets/modal.png'

export default function Modal({show, setShow=()=>{}}) {
	
	return (
		<>
		{show &&
			<>
			<div className='fixed top-0 left-0 h-screen w-screen z-40' onClick={e=>{e.preventDefault(); setShow(false)}}></div>
			<div className='fixed top-48 right-14 border-2 z-50'>
				<div className='absolute top-0 right-3'><button className='text-xl font-bold' onClick={e=>setShow(false)}>cerrar</button></div>
				<img src={modal} className='w-72'></img>
			</div> 
			</>
		}
		</>
	)
}
