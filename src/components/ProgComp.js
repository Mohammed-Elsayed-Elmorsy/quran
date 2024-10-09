import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { progs, progsArabic } from '../utils/data'
import { useSelector } from 'react-redux'

const ProgComp = () => {
    const lang = useSelector(state => state.lang.arabic)
    const state = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : lang
    return (
        <div className='choose Programms border-b'>
            <h2 className='title ' >

                {state ? ' برامجنا المختلفة' : 'our programms'}
                <FaCheck />
            </h2>
            <div className=' container mx-auto px-7'>
                {!state ? progs.map(item =>
                    <div className='item justify-between rounded-md' key={item.id} data-aos={item.aos}>
                        <img src={item.image} alt="" className={` h-[250px] ${item.id === 4 ? 'mb-[20px] pb-5' : ''}  object-cover`} />
                        <h2 className='branch-title'>{item.title}</h2>
                        <p className='' data-aos="fade-up">{item.desc}</p>
                        <div className=' flex gap-2 items-center ' style={{ zIndex: '1000', position: 'relative' }}>
                            <Link to={'/programms/' + item.id} className=' flex-1'>
                                <button className=' w-full btn-pri'>read more</button>
                            </Link>
                            <Link to={'/contact'} className=' flex-1'>
                                <button className=' w-full btn-pri'>contact us</button>
                            </Link>
                        </div>
                    </div>) : progsArabic.map(item =>
                        <div className='item justify-between ' key={item.id} data-aos={item.aos}>
                            <img src={item.image} alt="" className={` h-[250px] ${item.id === 4 ? 'mb-[20px] pb-5' : ''}  object-cover`} />
                            <h2 className='branch-title' >{item.title}</h2>
                            <p className='' data-aos="fade-up">{item.desc}</p>
                            <div className=' flex gap-2 items-center ' style={{ zIndex: '1000', position: 'relative' }}>
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