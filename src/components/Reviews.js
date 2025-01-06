import React from 'react'
import { testmonials, testmonialsArabic } from '../utils/data'
import { FaCheck, FaFacebookMessenger } from 'react-icons/fa'
import image from '../static/11.png'
import { useSelector } from 'react-redux'
const Reviews = () => {
    const lang = useSelector(state => state.lang.arabic)
    const state = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : lang
    return (
        <div className='Reviews bg-light'>
            <div className=' container mx-auto px-3 md:px-[70px] lg:px-[120px] pb-[70px]'>
                <h2 className='title'>

                    {state ? 'آراءالطلاب' : ' students Reviews'}

                    <FaCheck />
                </h2>
                <div className=' container mx-auto gap-8 grid grid-cols-2  lg:grid-cols-3 md:p-0 p-4'>
                    {!state ? testmonials.map(item => {
                        return (
                            <div data-aos="flip-right" key={item.id} className=' flex flex-col gap-2 relative bg-white border shadow-sm p-2'>
                                <h3 style={{ color: 'var(--main-color)' }} className='text-[20px] capitalize font-bold'>{item.name} :</h3>
                                <p className=' md:text-[18px] break-words  text-gray-700'>{item.content}</p>
                                <div style={{ background: '#EEE' }}
                                    className=' p-[7px] absolute w-[70px] h-[70px] rounded-full bg-white top-[-10%] right-[-9%]'>
                                    <div className=' overflow-hidden text-center leading-[40px] font-bold bg-white w-full h-full rounded-full'>
                                        <img src={image} alt="" className='w-full h-full' />
                                        <FaFacebookMessenger className=' font-bold text-blue-500' />
                                    </div>
                                </div>
                            </div>
                        )
                    }) : testmonialsArabic.map(item => {
                        return (
                            <div data-aos="flip-right" key={item.id} className=' flex flex-col gap-2 relative bg-white border shadow-sm p-2'>
                                <h3 style={{ color: 'var(--main-color)' }} className='text-[20px] capitalize font-bold'>{item.name} :</h3>
                                <p className=' md:text-[18px] break-words  text-gray-700'>{item.content}</p>
                                <div style={{ background: '#EEE' }}
                                    className=' p-[7px] absolute w-[70px] h-[70px] rounded-full bg-white top-[-10%] right-[-9%]'>
                                    <div className=' overflow-hidden text-center leading-[40px] font-bold bg-white w-full h-full rounded-full'>
                                        <img src={image} alt="" className='w-full h-full' />
                                        <FaFacebookMessenger className=' font-bold text-blue-500' />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Reviews