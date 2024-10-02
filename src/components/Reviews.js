import React from 'react'
import { testmonials } from '../utils/data'
import { FaCheck, FaFacebookMessenger } from 'react-icons/fa'
import image from '../static/last.png'
const Reviews = () => {
    return (
        <div className='Reviews' style={{ background: '#eee' }}>
            <div className=' container mx-auto px-7 pb-[70px]'>
                <h2 className='title'>
                    students Reviews
                    <FaCheck />
                </h2>
                <div className=' container mx-auto gap-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:p-0 p-4'>
                    {testmonials.map(item => {
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