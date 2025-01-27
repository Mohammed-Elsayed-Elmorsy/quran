import React from 'react'
import { Link } from 'react-router-dom'
import { progs, progsArabic } from '../utils/data'
import { useSelector } from 'react-redux'

const ProgComp = () => {
    const lang = useSelector(state => state.lang.arabic)
    const state = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : lang
    return (
        <div className=' bg-light Programms pb-[50px]'>
            <h2 className='title ' >

                {state ? ' برامجنا المختلفة' : 'our programms'}
            </h2>
            <div className=' container mx-auto px-7 md:px-[60px] lg:px-[100px]'>
                {!state ? progs.map(item =>
                    <div
                        data-aos={'fade-up'}
                        className='item shadow-lg'
                        key={item.id}>
                        <img src={item.image} alt="" className={`prog-image h-[200px]    object-cover`} />
                        <h3 className='px-2 text-[18px] font-bold'>{item.title}</h3>
                        <p className='px-2 text-[15px] '>{item.desc}</p>
                        {/* {<ul className=' list-decimal pl-[16px] pr-6 flex-col flex gap-3'>
                            {item.points.map(point =>
                                <li className='text-sm' key={point.title}>
                                    <h3 className=' inline text-[18px] font-bold'>{point.title}</h3>
                                    <span className=' text-[15px] '>
                                        {point.info}
                                    </span>
                                </li>)}
                        </ul>} */}
                        <div className=' mt-auto flex gap-1 items-center ' >

                            <Link to={'/contact'} className=' flex-1'>
                                <button className=' w-full btn-pri'>contact us</button>
                            </Link>
                            <Link to={'/programms/' + item.id} className=' flex-1 '>
                                <button className=' w-full btn-pri'>read more</button>
                            </Link>
                        </div>
                    </div>) : progsArabic.map(item =>
                        <div className='item shadow-lg'
                            key={item.id} data-aos={'fade-up'}>
                            <img src={item.image} alt="" className={`prog-image  h-[200px]      object-cover`} />
                            <h3 className='pt-1 px-2 lg:text-[20px] text-[18px] font-bold' >{item.title}</h3>
                            <p className='py-1 px-2 text-[15px] '>{item.desc}</p>
                            {/* {<ul className='px-2  flex-col flex gap-1'>
                                {item.points.map(point =>
                                    <li className='text-[15px]' key={point.title}>
                                        <h3 className=' inline lg:text-[20px] text-[18px] font-bold'>{point.title} </h3>
                                        <span className=' text-[15px] '>{point.info}</span>
                                    </li>)}
                            </ul>} */}
                            <div className='mt-auto flex gap-1 items-center ' >
                                <Link to={'/contact'} className=' flex-1'>
                                    <button className=' w-full btn-pri'>

                                        {state ? 'تواصل معنا' : 'contact us'}
                                    </button>
                                </Link>
                                <Link to={'/programms/' + item.id} className=' flex-1'>
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