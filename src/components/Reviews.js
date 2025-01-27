import React, { useState } from 'react'
import { testmonials, testmonialsArabic } from '../utils/data'
import { FaCheck } from 'react-icons/fa'
import { useSelector } from 'react-redux'
const Reviews = () => {
    const [showReview, setShowReview] = useState(null)
    const lang = useSelector(state => state.lang.arabic)
    const state = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : lang
    return (
        <div className='Reviews bg-light'>
            <div className=' container mx-auto px-6 md:px-[50px] lg:px-[100px] pb-[40px]'>
                <h2 className='title'>

                    {state ? 'آراءالطلاب' : ' students Reviews'}

                    {/* <FaCheck /> */}
                </h2>
                <div className=' container mx-auto gap-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:p-0 p-1'>
                    {!state ? testmonials.map(item => {
                        return (
                            <div data-aos="flip-right" key={item.id} className={`rev-item  flex flex-col gap-2 relative bg-white  p-2`} >
                                <h3 style={{ color: 'var(--main-color)' }}
                                    className='text-[18px] capitalize font-bold'>{item.name} :</h3>
                                <p className=' md:text-[16px] break-words  text-gray-700'>
                                    {item.content.substring(0, 150) + '...'}
                                </p>
                                <span onClick={() => setShowReview(item.id)}
                                    className='bg-blue-500  hover:bg-blue-700 text-white p-2 inline-block cursor-pointer mt-auto'>read more</span>
                                <div style={{ background: '#e4e4e4' }}
                                    className=' p-[7px] absolute w-[70px] h-[70px] rounded-full bg-white top-[-10%] right-[-5%]'>
                                    <div className=' shadow-md flex justify-center items-center
                                    overflow-hidden text-center font-bold bg-white w-full h-full rounded-full'>
                                        {item.state}
                                    </div>
                                </div>
                                <div className={` 
                                      review text-[14px] 
                                    ${showReview === item.id ? 'show ' : 'hide'}`}>
                                    {item.content}
                                    <span className=' right-[-12px] md:right-[-20px] ' onClick={() => setShowReview(null)}>x</span>
                                </div>
                            </div>
                        )
                    }) : testmonialsArabic.map(item => {
                        return (
                            <div data-aos="flip-right" key={item.id} className='rev-item  flex flex-col gap-2 relative bg-white  p-2'>
                                <h3 style={{ color: 'var(--main-color)' }} className='text-[18px] capitalize font-bold'>{item.name} :</h3>
                                <p className=' md:text-[16px] break-words  text-gray-700'>{item.content.substring(0, 170) + '...'}</p>
                                <span onClick={() => setShowReview(item.id)}
                                    className='bg-blue-500  hover:bg-blue-700 text-white p-2 inline-block cursor-pointer mt-auto'>
                                    اقرأ المزيد</span>
                                <div style={{ background: '#e4e4e4' }}
                                    className={` p-[7px] absolute w-[70px] h-[70px] rounded-full bg-white top-[-10%] ${!state ? 'right-[-9%]' : 'left-[-5%]'}`}>
                                    <div className=' shadow-md flex justify-center items-center
                                    text-[13px] overflow-hidden text-center  font-bold bg-white w-full h-full rounded-full'>
                                        {item.state}
                                    </div>
                                </div>
                                <div className={` 
                                      review text-[14px] lg:text-[15px]
                                    ${showReview === item.id ? 'show ' : 'hide'}`}>
                                    {item.content}
                                    <span className='
                                    left-[-23px]
                                    '
                                        onClick={() => setShowReview(null)}>x</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div >
    )
}

export default Reviews