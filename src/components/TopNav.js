import React from 'react'
import { FaEnvelope, FaFacebook, FaPhone, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const TopNav = () => {
  return (
    <div className='p-2 bg-blue-500 upper-header'>
      <div className="container mx-auto px-5  py-2 flex justify-between items-center">
        <Link to={''}>
          <span className=' rounded-md capitalize bg-orange-400 block p-3 text-slate-100'>
            start with us now
          </span>
        </Link>
        <div className=' flex gap-3 items-center text-[25px] upper-span'>
          <a href="https://wa.me/201212659525" target=' _blank'>
            <FaWhatsapp />
          </a>
          <a href="https://www.facebook.com/yourprofile" target=' _blank'>

            <FaFacebook />
          </a>
          <a href="mailto:sallealamohammed@gmail.com" target=' _blank'>

            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
  )
}

export default TopNav