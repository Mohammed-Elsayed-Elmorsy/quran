import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoDark from '../static/Quran__4_-removebg-preview.png'
import logoLight from '../static/Quran.png'
import imagelang from '../static/united-states.png'
import imagearab from '../static/flag.png'
import { links, linksarabic } from '../utils/data'
import { FaAngleRight, FaBars } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { BiMoon, BiSun } from 'react-icons/bi'
const Header = () => {
    const { dark } = useSelector(state => state.mode)
    const mode = localStorage.getItem('dark') ? JSON.parse(localStorage.getItem('dark')) : dark
    const lang = useSelector(state => state.lang.arabic)
    const state = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : lang
    const dispatch = useDispatch()
    const location = useLocation();
    const [bgToHeader, setBgToHeader] = useState(false)
    const [hidetext, setHidetext] = useState(false)
    const [showMenu, setShowMenu] = useState(false)

    const addBgToHeader = () => {
        if (window.scrollY > 85) {
            setBgToHeader(true)
        }
        else {
            setBgToHeader(false)
        }
    }
    const removelogotext = () => {
        if (window.scrollY > 220) {
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
        <header className={` transition-all
        ${bgToHeader && mode ? 'shadow-header-dark' : bgToHeader && !mode ? ' shadow-header-light' : ''}  
        ${mode ? ' bg-dark border-b border-lighter' : ' bg-white'} `}>
            <div className={`container h-[100px]  flex items-center mx-auto justify-between 
                px-4  md:px-[40px] lg:px-[100px] xl:px-[140px]`}>
                <div className="logo flex-1">
                    <Link to={'/'} className='flex gap-1 items-center'>
                        <img
                            src={mode ? logoDark : logoLight}
                            alt="Shatha Quran شذا القرآن"
                            className={` h-[70px] ${mode ? '' : ' rounded-full'}`} />
                        <h1
                            className={` md:text-[17px] text-[16px]  
                        ${hidetext ? 'hide-text' : 'show-text'}   
                        font-bold  text-[17px] relative left-[-15px]  `}>
                            {!state
                                ?
                                <span className=' flex flex-col relative left-[5px]  '>
                                    <span>Shatha</span>
                                    <span className=' mt-[-10px] '>Alqur'an</span>
                                </span>
                                :
                                <span className='left-[5px] relative '>
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
                                    {link.chilren && <FaAngleRight className='hide mb-1' />}
                                    {link.chilren ? <div
                                        className={`drop ${mode ? 'bg-lighter shadow shadow-black' : 'bg-white shadow shadow-slate-400 '}`}>
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
                                    {link.chilren && <FaAngleRight className='hide mt-[2px]' />}
                                    {link.chilren ? <div
                                        className={`drop ${mode ? 'bg-lighter shadow shadow-black' : 'bg-white shadow shadow-slate-400'}`}>
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
                            <span className={` p-2
                             w-[40px] h-[40px] cursor-pointer transition
                               ${mode ? ' text-white hover:bg-lighter' : 'text-black hover:bg-slate-200'}`}
                                onClick={() => showlangover()}>
                                {state ?
                                    <img src={imagearab} style={{ width: '50px' }} alt="" /> :
                                    <img src={imagelang} style={{ width: '50px' }} alt="" />}
                            </span>
                        </div>
                    </ul>
                </nav>
                <div onClick={() => setShowMenu(!showMenu)} className='bars mr-4 relative lg:hidden block'>
                    <FaBars className={`${mode ? 'text-white' : ' '}`} />
                    <nav className={`nav-in-small ${mode ? 'bg-white' : ' bg-white'} ${showMenu ? 'show' : ''} lg:hidden right-[0]`}>
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
                    <span className={`text-[24px] flex justify-center 
                            items-center w-[40px] h-[40px] p-2 cursor-pointer transition
                               ${mode ? ' text-white hover:bg-lighter' : 'text-black hover:bg-slate-200'}`}
                        onClick={() => showlangover()}>
                        {state ?
                            <img src={imagearab} style={{ width: '50px' }} alt="" /> :
                            <img src={imagelang} style={{ width: '50px' }} alt="" />}
                    </span>
                </div>
                <div onClick={() => showModeover()}>
                    {mode ?
                        <span
                            className={`text-[24px] flex justify-center 
                            items-center w-[40px] h-[40px] cursor-pointer transition
                               ${mode ? ' text-white hover:bg-lighter' : 'text-black hover:bg-slate-200'}`}>
                            <BiSun />
                        </span>
                        :
                        <span

                            className={`text-[24px] flex justify-center
                    items-center w-[40px] h-[40px] cursor-pointer transition
                               ${mode ? ' text-white hover:bg-lighter' : 'text-black hover:bg-slate-200'}`}>
                            <BiMoon />
                        </span>}
                </div>
            </div>
        </header >
    )
}

export default Header