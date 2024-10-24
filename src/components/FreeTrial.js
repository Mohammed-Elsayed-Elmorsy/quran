import React, { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'
import { useSelector } from 'react-redux'

const FreeTrial = () => {
    const [showFreeTrial, setShowFreeTrial] = useState(false)

    const handleShowFreeTrial = () => {
        // if (window.scrollY > 550) {
        //     setShowFreeTrial(true)
        // }
        setTimeout(() => {
            setShowFreeTrial(true)
        }, 6000);
    }
    handleShowFreeTrial()
    window.addEventListener('scroll', handleShowFreeTrial)
    const state = useSelector(state => state.lang.arabic)
    const lang = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : state
    return (
        <div
            className={`free-trail fixed ${!showFreeTrial ? 'hide' : ''}  fixed flex gap-3 justify-center items-center bottom-0 left-0 right-0 bg-slate-400`}>
            {lang ? <button className=' text-[22px] font-bold  hover:text-black hover:bg-white transition rounded-md p-3 cursor-pointer bg-blue-500 text-white'>
                ابدا التجربة المجانية
            </button> : <button className=' capitalize text-[22px] font-bold rounded-md  hover:text-black hover:bg-white transition p-3 cursor-pointer bg-blue-500 text-white'>
                start free trial
            </button>}
            <a
                href="https://wa.me/201212659525"
                target=' _blank'
                className={`' bg-slate-500 
                rounded-md  hover:text-black
                ${lang ? ' md:ml-[0px] ml-[40px]' : ' md:mr-[0px] mr-[-35px]'}
                 hover:bg-white p-3 block text-[30px] text-white`}>
                <FaWhatsapp />
            </a>
            <span style={{ zIndex: '11000' }} className=' cursor-pointer rounded 
             hover:bg-white hover:text-black text-white justify-center items-center
              transition absolute left-[20px] text-[22px] top-[10px] w-[50px] h-[50px]
              bg-slate-500 hidden md:flex' onClick={() => setShowFreeTrial(false)}>
                <FaXmark />
            </span>
            <span style={{ zIndex: '11000' }} className=' cursor-pointer rounded-full 
             text-white justify-center items-center
              transition absolute left-[10px] text-[22px] top-[-20px] w-[40px] h-[40px]
              bg-slate-600 flex md:hidden' onClick={() => setShowFreeTrial(false)}>
                <FaXmark />
            </span>
        </div>
    )
}

export default FreeTrial