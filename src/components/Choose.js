import React from 'react'
import { choose, chooseArabic } from '../utils/data'
import { FaCheck } from 'react-icons/fa'
import aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
const Choose = () => {
    const lang = useSelector(state => state.lang.arabic)
    const state = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : lang
    useEffect(() => {
        aos.init({
            duration: 1000,
            delay: 100
        })
    }, [])
    return (
        <div className='choose bg-light pb-[70px]' >
            <h2 className='title ' >
                {!state ? 'why choose us' : 'لماذا تختارنا'}
                <FaCheck />
            </h2>
            <div className=' text-center container mx-auto px-8 md:px-[70px] lg:px-[120px]'>
                {state ? chooseArabic.map(item => <div className='item ' key={item.id} data-aos={item.aos}>
                    <img className=' w-[120px] h-[120px] object-contain mx-auto' src={item.image} alt="" />
                    <h3 className=' font-bold lg:text-[25px] text-[22px]'>{item.title}</h3>
                    <p className=' p-2 lg:text-[20px] text-[18px]' data-aos="fade-up">{item.text}</p>
                </div>) : choose.map(item => <div className='item ' key={item.id} data-aos={item.aos}>
                    <img className=' w-[120px] h-[120px] object-contain mx-auto' src={item.image} alt="" />
                    <h3 className='font-bold lg:text-[25px] text-[22px]'>{item.title}</h3>
                    <p className='  p-2 lg:text-[20px] text-[18px] ' data-aos="fade-up">{item.text}</p>
                </div>)}
            </div>
        </div >
    )
}

export default Choose