import React, { useEffect } from 'react'
import { teachersArabic, teaches } from '../utils/data'
import { FaCheck } from 'react-icons/fa6'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

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
                        <div data-aos="zoom-in" key={item.id} className=' relative justify-between flex flex-col gap-4'>
                            <img src={item.image} alt="" className=' object-cover h-[150px]' />
                            <h2 className=''>{item.name}</h2>
                            <p className=' text-[18px]'>{item.desc}</p>
                            <div className=' flex gap-2 items-center'>
                                <Link className=' w-full' to={'/teachers/' + item.id}>
                                    <button className='w-full btn-pri'>read more</button>
                                </Link>
                            </div>
                        </div>) : teachersArabic.map(item =>
                            <div data-aos="zoom-in" key={item.id} className=' relative  flex flex-col gap-4'>
                                <img src={item.image} alt="" className=' object-cover h-[150px]' />
                                <h2 className=''>{item.name}</h2>
                                <p>{item.desc}</p>
                                <div className=' flex gap-2 items-center'>
                                    <Link className=' block w-full' to={'/teachers/' + item.id}>
                                        <button className='w-full btn-pri'>

                                            اقرا المزيد
                                        </button></Link>
                                </div>
                            </div>)}
                </div>
            </div>
        </div>
    )
}

export default TeachersComp