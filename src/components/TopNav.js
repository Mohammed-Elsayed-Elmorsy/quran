import React from 'react'
import { FaEnvelope, FaFacebook, FaWhatsapp } from 'react-icons/fa'

const TopNav = () => {
  return (
    <div className='p-2 bg-blue-500 upper-header'>
      <div className="container mx-auto px-5  py-2 flex justify-between items-center">
        <span className=' rounded-md capitalize bg-orange-400 block p-3 text-slate-100'>start with us now</span>
        <span className=' flex gap-3 items-center text-[25px] upper-span'>
          <span><FaWhatsapp /></span>
          <span><FaFacebook /></span>
          <span><FaEnvelope /></span>
        </span>
      </div>
    </div>
  )
}

export default TopNav