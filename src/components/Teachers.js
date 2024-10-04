import React, { useEffect } from 'react'
import { teachersArabic, teaches } from '../utils/data'
import { FaCheck } from 'react-icons/fa6'
import { useSelector } from 'react-redux'

const TeachersComp = () => {
    const lang = useSelector(state => state.lang.arabic)
    const state = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : lang
    return (
        <div className=' teachers pb-[70px]'>
            <div className=' container px-7 mx-auto'>
                <h2 className=' title  flex items-center gap-2'>
                    {!state ? 'Our Teachers' : 'المعلمون'}
                    <FaCheck />
                </h2>
                <div className=' content grid md:grid-cols-2 lg:grid-cols-3  grid-cols-1 gap-6'>
                    {!state ? teaches.map(item =>
                        <div data-aos="zoom-in" key={item.id} className=' relative  flex flex-col gap-4'>
                            <img src={item.image} alt="" className=' object-cover h-[150px]' />
                            <h2 className=''>{item.name}</h2>
                            <p className=' text-[20px]'>{item.desc}</p>
                            <div className=' flex gap-2 items-center'>
                                <button className='flex-1 btn-pri'>read more</button>
                                <button className=' btn-sec flex-1'>select </button>
                            </div>
                        </div>) : teachersArabic.map(item =>
                            <div data-aos="zoom-in" key={item.id} className=' relative  flex flex-col gap-4'>
                                <img src={item.image} alt="" className=' object-cover h-[150px]' />
                                <h2 className=''>{item.name}</h2>
                                <p>{item.desc}</p>
                                <div className=' flex gap-2 items-center'>
                                    <button className='flex-1 btn-pri'>

                                        {!state ? 'read more' : 'اقرا المزيد'}
                                    </button>
                                    <button className=' btn-sec flex-1'>

                                        {!state ? 'select' : ' اختار المعلم'}
                                    </button>
                                </div>
                            </div>)}
                </div>
            </div>
        </div>
    )
}

export default TeachersComp