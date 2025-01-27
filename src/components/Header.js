import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import image from '../static/Quran.jpg'
import imagelang from '../static/united-states.png'
import imagearab from '../static/flag.png'
import { links, linksarabic } from '../utils/data'
import { FaAngleRight, FaBars } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { GoMoon, GoSun } from 'react-icons/go'
const Header = () => {
    const { dark } = useSelector(state => state.mode)
    const lang = useSelector(state => state.lang.arabic)
    const state = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : lang
    const mode = localStorage.getItem('dark') ? JSON.parse(localStorage.getItem('dark')) : dark
    const dispatch = useDispatch()
    const location = useLocation();
    const [bgToHeader, setBgToHeader] = useState(false)
    const [hidetext, setHidetext] = useState(false)
    const [showMenu, setShowMenu] = useState(false)

    const addBgToHeader = () => {
        if (window.scrollY > 120) {
            setBgToHeader(true)
        }
        else {
            setBgToHeader(false)
        }
    }
    const removelogotext = () => {
        if (window.scrollY > 250) {
            setHidetext(true)
        }
        else {
            setHidetext(false)
        }
    }
    const showlangover = () => {
        dispatch({ type: 'SHOWLANG' })
    }
    const showModeover = () => {
        dispatch({ type: 'SHOWMODE' })
    }
    window.addEventListener('scroll', addBgToHeader)
    window.addEventListener('scroll', removelogotext)
    return (
        <header className={` transition-all ${bgToHeader ? ' shadow-md ' : ''} `}>

            <div className={`container h-[90px]  flex items-center mx-auto justify-between px-4 md:px-[50px] lg:px-[70px] xl:px-[100px]`}>

                <div className="logo flex-1">
                    <Link to={'/'} className='flex gap-1 items-center'>
                        <img
                            src={image}
                            alt="Shatha Quran Logo"
                            className={` relative bottom-[5px] h-[55px] w-[55px] md:h-[60px] md:w-[60px] `} />
                        <h1
                            className={` md:text-[18px] text-[16px]  
                        ${hidetext ? 'hide-text' : 'show-text'}   
                        font-bold  text-[18px] relative left-[-15px]  `}>
                            {!state
                                ?
                                <span className=' flex flex-col relative left-[5px] top-[5px] md:top-[6px]'>
                                    <span>Shatha</span>
                                    <span className=' mt-[-12px] '>Alqur'an</span>
                                </span>
                                :

                                <span className='left-[5px] relative top-[5px]'>
                                    شذا القرآن
                                </span>
                            }
                        </h1>
                    </Link>
                </div>
                <nav className=' hidden lg:block'>
                    <ul className=' flex gap-1 items-center'>
                        {state ? linksarabic.map(link =>
                            <li key={link.id}>
                                <Link

                                    className={` ${link.chilren ? 'dropdown ' : ''} 
                                    ${location.pathname === (link.to === '/' ? '/' : '/' + link.to) ? 'active' : ''} 
                                    relative  transition capitalize flex items-center  text-[16px]`}
                                    to={link.to === '/' ? '/' : link.id === 4 ? '#' : '/' + link.to}>
                                    {link.text === '/' ? 'home' : link.text}
                                    {link.chilren && <FaAngleRight className='hide' />}
                                    {link.chilren ? <div
                                        className='drop'>
                                        {link.chilren ? link.chilren.map(i =>
                                            <Link
                                                to={!i.id ? '/' + i.path : '/programms/' + i.id}
                                                className=' text-[14px]'
                                                key={i.text}>
                                                {i.text}
                                            </Link>) : null}
                                    </div> : null}

                                </Link>
                            </li>
                        ) : links.map(link =>
                            <li key={link.id}>
                                <Link
                                    className={`  ${link.chilren ? 'dropdown ' : ''} 
                                    ${location.pathname === (link.to === '/' ? '/' : '/' + link.to) ? 'active' : ''} 
                                    relative  transition capitalize flex items-center  text-[16px]`}
                                    to={link.to === '/' ? '/' : link.id === 4 ? '#' : '/' + link.to}>
                                    {link.text === '/' ? 'home' : link.text}
                                    {link.chilren && <FaAngleRight className='hide' />}
                                    {link.chilren ? <div
                                        className='drop'>
                                        {link.chilren ? link.chilren.map(i =>
                                            <Link
                                                to={!i.id ? '/' + i.path : '/programms/' + i.id}
                                                className=' text-[14px]'
                                                key={i.text}>
                                                {i.text}
                                            </Link>) : null}
                                    </div> : null}

                                </Link>
                            </li>
                        )}
                        <div className='languages'>
                            <span className='p-[8px] block w-[45px] h-[45px] cursor-pointer transition
                             hover:bg-slate-200  '
                                onClick={() => showlangover()}>
                                {state ?
                                    <img src={imagearab} style={{ width: '50px' }} alt="" /> :
                                    <img src={imagelang} style={{ width: '50px' }} alt="" />}
                            </span>
                        </div>
                    </ul>
                </nav>
                <div onClick={() => setShowMenu(!showMenu)} className='bars mr-4 relative lg:hidden block'>
                    <FaBars />
                    <nav className={`nav-in-small ${showMenu ? 'show' : ''} lg:hidden right-[0]`}>
                        <ul className=' flex flex-col items-center'>
                            {state ? linksarabic.map(link => <li key={link.id}>
                                <Link className={``} to={link.to === '/' ? '/' : '/' + link.to}>
                                    {link.text === '/' ? 'home' : link.text}
                                </Link>
                            </li>) : links.map(link => <li key={link.id}>
                                <Link className={``} to={link.text === '/' ? '/' : '/' + link.text}>
                                    {link.text === '/' ? 'home' : link.text}
                                </Link>
                            </li>)}
                        </ul>
                    </nav>
                </div>
                <div className='lg:hidden block '>
                    <span className='p-[8px] block w-[45px] h-[45px] cursor-pointer transition
                              hover:bg-slate-200 '
                        onClick={() => showlangover()}>
                        {state ?
                            <img src={imagearab} style={{ width: '50px' }} alt="" /> :
                            <img src={imagelang} style={{ width: '50px' }} alt="" />}
                    </span>
                </div>
                <div onClick={() => showModeover()}>
                    {mode ?
                        <span
                            className='text-[24px] flex justify-center 
                            items-center w-[45px] h-[45px] cursor-pointer transition
                              hover:bg-slate-200 '>
                            <GoSun />
                        </span>
                        :
                        <span

                            className='text-[24px] flex justify-center
                    items-center w-[45px] h-[45px] cursor-pointer transition
                              hover:bg-slate-200 '>
                            <GoMoon />
                        </span>}
                </div>
            </div>
        </header >
    )
}

export default Header