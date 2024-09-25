import React from 'react'
import Header from './Header'

const Landing2 = () => {
    return (
        <div className=' landing2 flex justify-center items-center'>
            <Header />
            <div className=' flex justify-center items-center flex-col gap-3 w-1/2 mx-auto text-white relative z-50'>
                <h2 className=' text-gray-300 text-[30px] font-bold capitalize'>
                    quran recutaion master
                </h2>
                <p className=' text-gray-400'>
                    "Broaden your knowledge of Islamic teachings and principles
                    through our comprehensive Islamic Studies program. Learn about the Quran,
                    Hadith, Fiqh, and other essential aspects of Islam in a
                    way that connects deeply with your daily life."
                </p>
                <button className='px-5 mt-3 w-fit text-white py-3 capitalize bg-green-500 rounded-md cursor-pointer'>learn more</button>

            </div>
        </div>
    )
}

export default Landing2