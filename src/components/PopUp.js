import React, { useState } from 'react'
import image from '../static/teacher-removebg-preview.png'
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';
const PopUp = ({ isVisible }) => {

    return (

        <div className={` ${isVisible ? ' show' : ' hide'} flex gap-4 flex-col justify-between overlay text-center bg-white shadow-md rounded`}>
            <img src={image} alt='' className=' mx-auto object-cover w-[190px] h-[150px]' />
            <h2 className=' text-[22px] capitalize font-bold' style={{ color: 'var(--main-color)' }}>
                "Welcome! Start your journey in learning the Quran today with personalized lessons!"
            </h2>
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
                <button className=' btn-pri'>register now</button>
            </div>
        </div>
    )
}

export default PopUp