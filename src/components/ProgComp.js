import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { progs, progsArabic } from '../utils/data'
import { useSelector } from 'react-redux'

const ProgComp = () => {
    const lang = useSelector(state => state.lang.arabic)
    const state = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : lang
    return (
        <div className='choose Programms pb-[70px]'>
            <h2 className='title ' >

                {state ? ' برامجنا المختلفة' : 'our programms'}
                <FaCheck />
            </h2>
            <div className=' container mx-auto px-3 md:px-[70px] lg:px-[120px]'>
                {!state ? progs.map(item =>
                    <div
                        data-aos={'fade-up'}
                        className='item  rounded-md'
                        key={item.id}>
                        <img src={item.image} alt="" className={` h-[250px]   object-cover`} />
                        <h2 className='px-4 text-[22px] font-bold'>{item.title}</h2>
                        <p className='px-4'>{item.desc}</p>
                        {<ul className=' list-decimal pl-[16px] pr-6 flex-col flex gap-4'>
                            {item.points.map(point =>
                                <li className='text-sm' key={point.title}>
                                    <h2 className=' inline text-[20px] font-bold'>{point.title}</h2>
                                    <span className=' text-[18px] tracking-wider'>
                                        {point.info}
                                    </span>
                                </li>)}
                        </ul>}
                        <div className=' mt-auto flex gap-2 items-center ' >
                            <Link to={'/programms/' + item.id} className=' flex-1'>
                                <button className=' w-full btn-pri'>read more</button>
                            </Link>
                            <Link to={'/contact'} className=' flex-1'>
                                <button className=' w-full btn-pri'>contact us</button>
                            </Link>
                        </div>
                    </div>) : progsArabic.map(item =>
                        <div className='item justify-between '
                            key={item.id} data-aos={'fade-up'}>
                            <img src={item.image} alt="" className={` h-[250px]   object-cover`} />
                            <h2 className='px-4 text-[22px] font-bold' >{item.title}</h2>
                            <p className='px-4'>{item.desc}</p>
                            {<ul className=' list-decimal pr-6 pl-[16px] flex-col flex gap-4'>
                                {item.points.map(point =>
                                    <li className='text-sm' key={point.title}>
                                        <h2 className=' inline text-[20px] font-bold'>{point.title} </h2>
                                        <span className=' text-[18px] tracking-wider'>{point.info}</span>
                                    </li>)}
                            </ul>}
                            <div className=' flex gap-2 items-center ' >
                                <Link to={'/programms/' + item.id} className=' flex-1'>
                                    <button className=' w-full btn-pri'>

                                        {state ? ' اقرا المزيد' : 'read more'}
                                    </button>
                                </Link>
                                <Link to={'/contact'} className=' flex-1'>
                                    <button className=' w-full btn-pri'>

                                        {state ? 'تواصل معنا' : 'contact us'}
                                    </button>
                                </Link>
                            </div>
                        </div>)}
            </div>
        </div >
    )
}

export default ProgComp