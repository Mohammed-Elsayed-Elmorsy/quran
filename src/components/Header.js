import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import image from '../static/Quran.jpg'
import imagelang from '../static/united-states.png'
import imagearab from '../static/flag.png'
import { links, linksarabic } from '../utils/data'
import { FaAngleRight, FaBars } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
const Header = () => {
    const lang = useSelector(state => state.lang.arabic)
    const state = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : lang
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const location = useLocation();
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
    const showlangover = () => {
        dispatch({ type: 'SHOW' })
    }
    const NavigateToThisLink = (link) => {
        navigate(link)
    }
    window.addEventListener('scroll', addBgToHeader)
    window.addEventListener('scroll', removelogotext)
    return (
        <header className={` transition-all ${bgToHeader ? ' shadow-md ' : ''} `}>

            <div className={`container h-[90px]  flex items-center mx-auto justify-between px-4 md:px-[50px] xl:px-[100px]`}>

                <div className="logo flex-1">
                    <Link to={'/'} className='flex gap-1 items-center'>
                        <img src={image} alt="logo" className={` relative bottom-[5px] h-[55px] w-[55px] md:h-[60px] md:w-[60px] `} />
                        <span
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
                        </span>
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
                                    to={link.to == '/' ? '/' : link.id === 4 ? '#' : '/' + link.to}>
                                    {link.text == '/' ? 'home' : link.text}
                                    {link.chilren && <FaAngleRight className='hide' />}
                                    {link.chilren ? <div
                                        className='drop'>
                                        {link.chilren ? link.chilren.map(i =>
                                            <Link
                                                to={!i.id ? '/' + i.path : '/programms/' + i.id}
                                                className=' text-[16px]'
                                                key={i.text}>
                                                {i.text}
                                            </Link>) : null}
                                    </div> : null}

                                </Link>
                            </li>
                        ) : links.map(link =>
                            <li key={link.id}>
                                <Link
                                    className={` ${link.chilren ? 'dropdown ' : ''} 
                                    ${location.pathname === (link.to === '/' ? '/' : '/' + link.to) ? 'active' : ''} 
                                    relative  transition capitalize flex items-center  text-[16px]`}
                                    to={link.to == '/' ? '/' : link.id === 4 ? '#' : '/' + link.to}>
                                    {link.text == '/' ? 'home' : link.text}
                                    {link.chilren && <FaAngleRight className='hide' />}
                                    {link.chilren ? <div
                                        className='drop'>
                                        {link.chilren ? link.chilren.map(i =>
                                            <Link
                                                to={!i.id ? '/' + i.path : '/programms/' + i.id}
                                                className=' text-[16px]'
                                                key={i.text}>
                                                {i.text}
                                            </Link>) : null}
                                    </div> : null}

                                </Link>
                            </li>
                        )}
                        <div className='languages'>
                            <span className='p-2 block w-[50px] h-[50px] cursor-pointer hover:bg-slate-200'
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
                                <Link className={``} to={link.to == '/' ? '/' : '/' + link.to}>
                                    {link.text == '/' ? 'home' : link.text}
                                </Link>
                            </li>) : links.map(link => <li key={link.id}>
                                <Link className={``} to={link.text == '/' ? '/' : '/' + link.text}>
                                    {link.text == '/' ? 'home' : link.text}
                                </Link>
                            </li>)}
                        </ul>
                    </nav>
                </div>
                <div className={`lg:hidden block ${state ? '' : ''}`}>
                    <span className='p-2 block w-[50px] h-[50px] cursor-pointer hover:bg-slate-200'
                        onClick={() => showlangover()}>
                        {state ?
                            <img src={imagearab} style={{ width: '50px' }} alt="" /> :
                            <img src={imagelang} style={{ width: '50px' }} alt="" />}
                    </span>
                </div>
            </div>
        </header >
    )
}

export default Header