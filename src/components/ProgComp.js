import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { progs, progsArabic } from '../utils/data'
import { useSelector } from 'react-redux'

const ProgComp = () => {
    const lang = useSelector(state => state.lang.arabic)
    const state = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : lang
    return (
        <div className='choose bg-light Programms pb-[70px]'>
            <h2 className='title ' >

                {state ? ' برامجنا المختلفة' : 'our programms'}
                <FaCheck />
            </h2>
            <div className=' container mx-auto px-8 md:px-[70px] lg:px-[120px]'>
                {!state ? progs.map(item =>
                    <div
                        data-aos={'fade-up'}
                        className='item shadow-lg'
                        key={item.id}>
                        <img src={item.image} alt="" className={`prog-image h-[250px] md:h-[380px] xl:h-[290px]   object-cover`} />
                        <h3 className='px-4 lg:text-[25px] text-[20px] font-bold'>{item.title}</h3>
                        <p className='px-4'>{item.desc}</p>
                        {<ul className=' list-decimal pl-[16px] pr-6 flex-col flex gap-4'>
                            {item.points.map(point =>
                                <li className='text-sm' key={point.title}>
                                    <h3 className=' inline lg:text-[21px] text-[19px] font-bold'>{point.title}</h3>
                                    <span className=' text-[16px] tracking-wider'>
                                        {point.info}
                                    </span>
                                </li>)}
                        </ul>}
                        <div className=' mt-auto flex gap-2 items-center ' >

                            <Link to={'/contact'} className=' flex-1'>
                                <button className=' w-full btn-pri'>contact us</button>
                            </Link>
                            <Link to={'/programms/' + item.id} className=' flex-1 hidden xl:inline-block'>
                                <button className=' w-full btn-pri'>read more</button>
                            </Link>
                        </div>
                    </div>) : progsArabic.map(item =>
                        <div className='item shadow-lg'
                            key={item.id} data-aos={'fade-up'}>
                            <img src={item.image} alt="" className={`prog-image  h-[250px]  md:h-[380px] xl:h-[290px]    object-cover`} />
                            <h3 className='px-4 py-2 lg:text-[24px] text-[20px] font-bold' >{item.title}</h3>
                            <p className='px-4'>{item.desc}</p>
                            {<ul className=' list-decimal pr-6 pl-[16px] flex-col flex gap-4'>
                                {item.points.map(point =>
                                    <li className='text-sm' key={point.title}>
                                        <h3 className=' inline lg:text-[21px] text-[19px] font-bold'>{point.title} </h3>
                                        <span className=' text-[16px] tracking-wider'>{point.info}</span>
                                    </li>)}
                            </ul>}
                            <div className='mt-auto flex gap-2 items-center ' >
                                <Link to={'/contact'} className=' flex-1'>
                                    <button className=' w-full btn-pri'>

                                        {state ? 'تواصل معنا' : 'contact us'}
                                    </button>
                                </Link>
                                <Link to={'/programms/' + item.id} className=' flex-1 hidden xl:inline-block'>
                                    <button className=' w-full btn-pri'>

                                        {state ? ' اقرأ المزيد' : 'read  more'}
                                    </button>
                                </Link>
                            </div>
                        </div>)}
            </div>
        </div >
    )
}

export default ProgComp