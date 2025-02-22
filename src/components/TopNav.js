import React from 'react'
import { BiLogoFacebook, BiLogoInstagram, BiLogoTelegram, BiLogoWhatsapp } from 'react-icons/bi'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const TopNav = () => {
  const { dark } = useSelector(state => state.mode)
  const mode = localStorage.getItem('dark') ? JSON.parse(localStorage.getItem('dark')) : dark
  const lang = useSelector(state => state.lang.arabic)
  const state = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : lang
  return (
    <div className={` blogs ${mode ? ' bg-gray-800  border-b- border-lighter' : 'bg-primary'}   `}>
      <div className="container mx-auto h-[60px]  px-3 md:px-[50px] lg:px-[80px] xl:px-[145px] flex justify-between items-center">
        <Link to={'/programms'}>
          <span className={`' hover:bg-secondary  hover:text-white transition-all  bg-lighter  ${mode ? ' bg-lighter shadow-md shadow-black text-textDark' : 'bg-white text-primary'} rounded-tl rounded-br  block py-2 px-3 '`}>
            {state ? 'ابدأ معنا الان' : 'Start with us now'}
          </span>
        </Link>
        <div className=' flex gap-3 items-center text-[20px]'>
          <a className={` hover:bg-secondary ${mode ? ' bg-lighter shadow-md shadow-black text-textDark' : 'bg-white text-primary'}  text-primary hover:text-white p-[7px] rounded-tl rounded-br transition-all `}
            href="https://wa.me/201013864939" target=' _blank'>
            <BiLogoWhatsapp />
          </a>
          <a className={` hover:bg-secondary ${mode ? ' bg-lighter shadow-md shadow-black text-textDark' : 'bg-white text-primary'} hover:text-white p-[7px] rounded-tl rounded-br transition-all `}
            href="https://www.facebook.com/share/1Uh7Wnc2QH/" target=' _blank'>
            <BiLogoFacebook />
          </a>
          <a
            className={`hover:bg-secondary bg-lighter  ${mode ? ' bg-lighter shadow-md shadow-black text-textDark' : 'bg-white text-primary'} hover:text-white p-[7px] rounded-tl rounded-br transition-all`}
            href="https://t.me/shatha_alquran"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoTelegram />
          </a>
          <a
            className={`hover:bg-secondary bg-lighter  ${mode ? ' bg-lighter shadow-md shadow-black text-textDark' : 'bg-white text-primary'} hover:text-white p-[7px] rounded-tl rounded-br transition-all`}
            href="https://www.instagram.com/shatha.alquran?igsh=MWg3OWc5Y3NtMzcwNA=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoInstagram />
          </a>

        </div>
      </div>
    </div >
  )
}

export default TopNav