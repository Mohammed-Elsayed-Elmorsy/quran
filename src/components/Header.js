import React, { useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import image from '../static/q2.png'
import imagelang from '../static/united-states.png'
import imagearab from '../static/flag.png'
import { links, linksarabic } from '../utils/data'
import { FaAngleLeft, FaAngleRight, FaBars } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
const Header = () => {
    const lang = useSelector(state => state.lang.arabic)
    const state = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : lang
    const dispatch = useDispatch()
    const location = useLocation();
    const [bgToHeader, setBgToHeader] = useState(false)
    const [id, setId] = useState(null)
    const [hidetext, setHidetext] = useState(false)
    const [minmizelogo, setMinmizelogo] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
    const [showlang, setShowLang] = useState(false)
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
    const setidFunction = (id) => {
        setId(id)
        console.log(id);

    }
    const changetoaranbic = () => {
        setShowLang(false)
        dispatch({ type: 'ARABIC' })
    }
    const changetoEnglish = () => {
        setShowLang(false)
        dispatch({ type: 'ENGLISH' })
    }
    const showlangover = () => {
        dispatch({ type: 'SHOW' })
    }
    window.addEventListener('scroll', addBgToHeader)
    window.addEventListener('scroll', removelogotext)
    return (
        <header className={` transition-all ${bgToHeader ? ' shadow-md' : ''} bg-white`}>

            <div className=' container h-[110px] flex items-center mx-auto justify-between px-5'>

                <div className="logo w-[200px]">
                    <Link to={'/'} className='  flex gap-1 items-center'>
                        <img src={image} alt="logo" className={`${minmizelogo ? 'md:w-[120px] ' : ' md:w-[120px]'} w-[90px]`} />
                        <span className={` md:text-[22px] text-[18px] ${lang ? 'hide-text-arabic' : 'show-text-arabic'} 
                        ${hidetext ? 'hide-text' : 'show-text'}  
                        font-bold text-[20px] mt-[10px] ml-[5px]  relative`}>

                            {!state ? ' Quran way' : 'طريق القرآن'}
                        </span>
                    </Link>
                </div>
                <nav className=' hidden lg:block'>
                    <ul className=' flex gap-1 items-center'>
                        {state ? linksarabic.map(link =>
                            <li key={link.id}>
                                <Link
                                    onClick={() => setidFunction(link.id)}
                                    className={` ${link.chilren ? 'dropdown ' : ''} 
                                    ${location.pathname === (link.to === '/' ? '/' : '/' + link.to) ? 'active' : ''} 
                                    relative  transition capitalize flex items-center  text-[20px]`}
                                    to={link.to == '/' ? '/' : link.id === 4 ? '#' : '/' + link.to}>
                                    {link.text == '/' ? 'home' : link.text}
                                    {link.chilren && !state ? <FaAngleRight className='hide' /> : null}
                                    {link.chilren && state ? <FaAngleLeft className='' /> : null}
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
                        ) : links.map(link =>
                            <li key={link.id}>
                                <Link
                                    onClick={() => setidFunction(link.id)}
                                    className={` ${link.chilren ? 'dropdown ' : ''} 
                                    ${location.pathname === (link.to === '/' ? '/' : '/' + link.to) ? 'active' : ''} 
                                    relative  transition capitalize flex items-center  text-[20px]`}
                                    to={link.to == '/' ? '/' : link.id === 4 ? '#' : '/' + link.to}>
                                    {link.text == '/' ? 'home' : link.text}
                                    {link.chilren ? <FaAngleRight className='hide' /> : null}
                                    {link.chilren ? <div
                                        className='drop'>
                                        {link.chilren ? link.chilren.map(i =>
                                            <Link
                                                to={'/' + i.to}
                                                className=' text-[18px]'
                                                key={i.text}>
                                                {i.text}
                                            </Link>) : null}
                                    </div> : null}

                                </Link>
                            </li>
                        )}
                        <div className='languages'>
                            <span className='p-2 block w-[50px] h-[50px] cursor-pointer hover:bg-slate-200' onClick={() => showlangover()}>
                                {state ?
                                    <img src={imagearab} style={{ width: '50px' }} alt="" /> :
                                    <img src={imagelang} style={{ width: '50px' }} alt="" />}
                            </span>
                        </div>
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