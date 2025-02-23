import React from 'react'
import { choose, chooseArabic } from '../utils/data'
import aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import ChooseItem from './ChooseItem'
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
        <div className={` ${mode ? "bg-dark" : "bg-light"} pb-[50px]`} >
            <h2 className='title section-title relative' >
                {!state ? 'why choose us' : 'لماذا تختارنا'}
            </h2>
            <div className=' text-center container 
                            mx-auto px-7  md:px-[60px] lg:px-[80px] xl:px-[150px]
                            grid md:grid-cols-2 lg:grid-cols-3  grid-cols-1 gap-5'>
                {state ? chooseArabic.map(item =>
                    <ChooseItem {...item} mode={mode} />
                )
                    : choose.map(item =>
                        <ChooseItem {...item} mode={mode} />
                    )
                }
            </div>
        </div >
    )
}

export default Choose