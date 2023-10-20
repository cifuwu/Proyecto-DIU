import React, { useState } from 'react'
import here from '../src/assets/reciclaje.png'
import Modal from './Modal';

export default function ReciclajeHere() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button className='bg-transparent' onClick={e=>setShow(true)}>
        <img className='bg-transparent'  src={here}></img>
      </button>
      <Modal setShow={setShow} show={show}/>
    </>
  )
}
