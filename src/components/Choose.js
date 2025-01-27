import React from 'react'
import { choose, chooseArabic } from '../utils/data'
import { FaCheck } from 'react-icons/fa'
import aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
const Choose = () => {
    const { dark } = useSelector((state) => state.mode);
    const mode = localStorage.getItem("dark")
        ? JSON.parse(localStorage.getItem("dark"))
        : dark;
    const lang = useSelector(state => state.lang.arabic)
    const state = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : lang
    useEffect(() => {
        aos.init({
            duration: 1000,
            delay: 100
        })
    }, [])
    return (
        <div className={`choose bg-light pb-[50px]`} >
            <h2 className='title ' >
                {!state ? 'why choose us' : 'لماذا تختارنا'}
                <FaCheck />
            </h2>
            <div className=' text-center container mx-auto px-7 md:px-[70px] lg:px-[100px]'>
                {state ? chooseArabic.map(item => <div className='item ' key={item.id} data-aos={item.aos}>
                    <img className=' w-[110px] h-[110px] object-contain mx-auto' src={item.image} alt="" />
                    <h3 className=' font-bold lg:text-[20px] text-[18px]'>{item.title}</h3>
                    <p className=' p-1' data-aos="fade-up">{item.text}</p>
                </div>) : choose.map(item => <div className='item ' key={item.id} data-aos={item.aos}>
                    <img className=' w-[120px] h-[120px] object-contain mx-auto' src={item.image} alt="" />
                    <h3 className='font-bold lg:text-[20px] text-[18px]'>{item.title}</h3>
                    <p className='  p-1 ' data-aos="fade-up">{item.text}</p>
                </div>)}
            </div>
        </div >
    )
}

export default Choose