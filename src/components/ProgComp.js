import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { progs, progsArabic } from '../utils/data'
import { useSelector } from 'react-redux'

const ProgComp = () => {
    const lang = useSelector(state => state.lang.arabic)
    const state = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : lang
    return (
        <div className='choose Programms'>
            <h2 className='title ' >

                {state ? ' برامجنا المختلفة' : 'our programms'}
                <FaCheck />
            </h2>
            <div className=' container mx-auto px-7'>
                {!state ? progs.map(item =>
                    <div className='item justify-between ' key={item.id} data-aos={item.aos}>
                        <img src={item.image} alt="" className={` h-[250px] ${item.id === 4 ? 'mb-[20px] pb-5' : ''}  object-cover`} />
                        <h2 className=' title mb-3' style={{ fontSize: '20px' }}>{item.title}</h2>
                        <p className=' h-[120px]' data-aos="fade-up">{item.desc}</p>
                        <div className=' flex gap-2 items-center ' style={{ zIndex: '1000', position: 'relative' }}>
                            <Link to={''} className=' flex-1'>
                                <button className=' w-full btn-pri'>register</button>
                            </Link>
                            <Link to={'/contact'} className=' flex-1'>
                                <button className=' w-full btn-sec'>contact us</button>
                            </Link>
                        </div>
                    </div>) : progsArabic.map(item =>
                        <div className='item justify-between ' key={item.id} data-aos={item.aos}>
                            <img src={item.image} alt="" className={` h-[250px] ${item.id === 4 ? 'mb-[20px] pb-5' : ''}  object-cover`} />
                            <h2 className=' title mb-6' style={{ fontSize: '20px' }}>{item.title}</h2>
                            <p className=' h-[100px]' data-aos="fade-up">{item.desc}</p>
                            <div className=' flex gap-2 items-center ' style={{ zIndex: '1000', position: 'relative' }}>
                                <Link to={''} className=' flex-1'>
                                    <button className=' w-full btn-pri'>

                                        {state ? 'سجل الان' : 'register'}
                                    </button>
                                </Link>
                                <Link to={'/contact'} className=' flex-1'>
                                    <button className=' w-full btn-sec'>

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