import React, { useState } from 'react'
import image from '../static/welcome-removebg-preview-removebg-preview.png'
import { FaAngleLeft, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const PopUp = ({ isVisible, setIsVisible }) => {
    const lang = useSelector(state => state.lang.arabic)
    const state = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : lang
    return (

        <div className={` ${isVisible ? 'show' : 'hide'} hidden md:flex
         gap-4 flex-col justify-between overlay text-center bg-white`}>
            <img src={image} alt='' className='mt-[-0px] mx-auto object-cover ' />
            {state ? <h2 className=' text-[22px] capitalize mt-[-70px] font-bold' style={{ color: 'var(--main-color)' }}>
                "مرحبًا بك! ابدأ رحلتك في تعلم القرآن الكريم اليوم مع دروس مخصصة لك!"
            </h2> : <h2 className=' text-[22px] capitalize mt-[-70px] font-bold' style={{ color: 'var(--main-color)' }}>
                "Welcome! Start your journey in learning the Quran today with personalized lessons!"
            </h2>}
            <div className=' flex gap-4 flex-col justify-between'>
                <span className=' flex justify-center items-center gap-2 text-[20px]'>
                    <FaWhatsapp /> 01212659525
                </span>
                <span className=' flex justify-center items-center gap-2 text-[20px]'>
                    <FaPhone /> 0155471926
                </span>
                <span className=' flex justify-center items-center gap-2 text-[20px]'>
                    <FaEnvelope /> sallealmohammed@gmail.com
                </span>
                <Link to={''} className=' flex'>
                    <button className=' flex-grow btn-pri'>

                        {state ? ' سجل الان ' : 'register now '}
                    </button>
                </Link>
            </div>
            <span onClick={() => setIsVisible(false)}
                className=' flex justify-center items-center  hover:bg-slate-300 transition bg-slate-200 absolute top-[10px] text-[20px] 
            right-[10px] cursor-pointer w-[45px] h-[45px]'>
                <FaXmark />
            </span>
            {!isVisible && <span onClick={() => setIsVisible(true)}
                className=' FaAngleLeft flex justify-center items-center  hover:bg-slate-300 transition 
                bg-slate-200 absolute top-[-1px] text-[20px] 
            left-[-48px] cursor-pointer w-[45px] h-[45px]'>
                <FaAngleLeft />
            </span>}
        </div>

    )
}

export default PopUp