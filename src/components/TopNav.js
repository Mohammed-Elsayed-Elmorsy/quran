import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { GoMail } from 'react-icons/go'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const TopNav = () => {
  const lang = useSelector(state => state.lang.arabic)
  const state = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : lang
  return (
    <div className=' upper-header bg-primary'>
      <div className="container mx-auto h-[80px]  px-6 flex justify-between items-center">
        <Link to={'/programms'}>
          <span className=' hover:bg-white hover:text-black transition-all  bg-secondary   block py-2 px-3 text-[20px] text-slate-100'>
            {state ? 'ابدأ معنا الان' : 'Start with us now'}
          </span>
        </Link>
        <div className=' flex gap-3 items-center text-[28px] upper-span'>
          <a className=' hover:bg-white hover:text-black p-[4px] transition-all rounded'
            href="https://wa.me/201013864939" target=' _blank'>
            <FaWhatsapp />
          </a>
          <a className=' hover:bg-white hover:text-black p-[4px] transition-all rounded'
            href="https://www.facebook.com/share/1Uh7Wnc2QH/" target=' _blank'>
            <FaFacebook />
          </a>
          <a className=' hover:bg-white hover:text-black p-[4px] transition-all rounded'
            href="mailto:quranyway@gmail.com" target=' _blank'>
            <GoMail />
          </a>
        </div>
      </div>
    </div>
  )
}

export default TopNav