import React from 'react'
import { FaEnvelope, FaEnvelopeSquare, FaFacebook, FaPhone, FaWhatsapp } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const TopNav = () => {
  const lang = useSelector(state => state.lang.arabic)
  const state = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : lang
  return (
    <div className='p-2 bg-blue-500 upper-header'>
      <div className="container mx-auto px-5  py-2 flex justify-between items-center">
        <Link to={'/programms'}>
          <span className=' hover:bg-white hover:text-black transition-all  bg-slate-500 rounded shadow-md block p-3 text-[20px] text-slate-100'>
            {state ? 'ابدا معنا الان' : 'Start with us now'}
          </span>
        </Link>
        <div className=' flex gap-3 items-center text-[25px] upper-span'>
          <a className=' hover:bg-white hover:text-black p-[4px] transition-all rounded' href="https://wa.me/201212659525" target=' _blank'>
            <FaWhatsapp />
          </a>
          <a className=' hover:bg-white hover:text-black p-[4px] transition-all rounded' href="https://www.facebook.com/yourprofile" target=' _blank'>
            <FaFacebook />
          </a>
          <a className=' hover:bg-white hover:text-black p-[4px] transition-all rounded' href="mailto:sallealamohammed@gmail.com" target=' _blank'>
            <FaEnvelopeSquare />
          </a>
        </div>
      </div>
    </div>
  )
}

export default TopNav