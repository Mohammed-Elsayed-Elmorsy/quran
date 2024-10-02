import React, { useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import image from '../static/q2.png'
import { links } from '../utils/data'
import { FaAngleRight, FaBars } from 'react-icons/fa'
const Header = () => {
    const path = useLocation().pathname.substring(1)
    console.log(path);

    const [bgToHeader, setBgToHeader] = useState(false)
    const [hidetext, setHidetext] = useState(false)
    const [minmizelogo, setMinmizelogo] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
    const addBgToHeader = () => {
        if (window.scrollY > 100) {
            setBgToHeader(true)
        }
        else {
            setBgToHeader(false)
        }
    }
    const removelogotext = () => {
        if (window.scrollY > 150) {
            setHidetext(true)
            setMinmizelogo(true)
        }
        else {
            setHidetext(false)
            setMinmizelogo(false)
        }
    }
    window.addEventListener('scroll', addBgToHeader)
    window.addEventListener('scroll', removelogotext)
    return (
        <header className={` transition-all ${bgToHeader ? ' shadow-md' : ''} bg-white`}>
            <div className=' container h-[110px] flex items-center mx-auto justify-between px-5'>

                <div className="logo w-[200px]">
                    <Link to={'/'} className=' flex gap-1 items-center'>
                        <img src={image} alt="logo" className={`${minmizelogo ? ' md:w-[120px]' : ' md:w-[120px]'} w-[90px]`} />
                        <span className={` md:text-[22px] text-[18px] ${hidetext ? 'hide-text' : 'show-text'} font-bold text-[20px] mt-[10px] ml-[5px]`}>
                            Quran way
                        </span>
                    </Link>
                </div>
                <nav className=' hidden lg:block'>
                    <ul className=' flex gap-1 items-center'>
                        {links.map(link =>
                            <li key={link.id}>
                                <Link
                                    className={` ${link.chilren ? 'dropdown ' :
                                        link.text === path.substring(1) ? 'active' : ''} relative  transition capitalize flex items-center gap-1 text-[20px]`}
                                    to={link.text == '/' ? '/' : link.id === 4 ? '#' : '/' + link.text}>
                                    {link.text == '/' ? 'home' : link.text}
                                    {link.chilren ? <FaAngleRight className='hide' /> : null}
                                    {link.chilren ? <div
                                        className='drop'>
                                        {link.chilren ? link.chilren.map(i =>
                                            <Link
                                                to={'/' + i.path}
                                                className=' text-[18px]'
                                                key={i.text}>
                                                {i.text}
                                            </Link>) : null}
                                    </div> : null}

                                </Link>
                            </li>
                        )}
                    </ul>
                </nav>
                <div onClick={() => setShowMenu(!showMenu)} className='bars relative lg:hidden block'>
                    <FaBars />
                    <nav className={`nav-in-small ${showMenu ? 'show' : ''} lg:hidden right-[0]`}>
                        <ul className=' flex flex-col items-center'>
                            {links.map(link => <li key={link.id}>
                                <Link className={``} to={link.text == '/' ? '/' : '/' + link.text}>
                                    {link.text == '/' ? 'home' : link.text}
                                </Link>
                            </li>)}
                        </ul>
                    </nav>
                </div>
            </div>
        </header >
    )
}

export default Header