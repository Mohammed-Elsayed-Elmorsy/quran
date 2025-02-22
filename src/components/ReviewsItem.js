import React from 'react'
import { FaXmark } from 'react-icons/fa6'
const ReviewsItem = ({ setShowReview, id, name, state, country, mode, content, showReview }) => {
    return (
        <div
            data-aos="flip-right"
            key={id}
            className={`${mode ? 'bg-lighter text-textDark' : 'bg-white rev-item'}  
            flex flex-col gap-2 relative   p-2`} >
            <h3 style={{ color: 'var(--main-color)' }}
                className=' capitalize font-bold '>{name} :</h3>
            <p className={`${mode ? ' text-gray-300' : ''} break-words text-[15px]`}>
                {content.substring(0, 150) + '...'}
            </p>
            <span onClick={() => setShowReview(id)}
                className={`
                    ${mode ? 'bg-graymy hover:bg-slate-500 ' :
                        'bg-light hover:bg-blue-500 hover:text-white text-black'} text-center   
                p-2 inline-block cursor-pointer mt-auto`}>
                {!state ? 'read more' : 'اقرأ المزيد'}
            </span>
            <div
                className={`p-[7px] ${mode ? 'bg-dark ' : 'bg-light'} absolute w-[70px] h-[70px] 
                rounded-full  ${!state ? 'top-[-10%] right-[-5%] ' : 'top-[-10%] left-[-5%]'}`}>
                <div
                    className={` text-[13px] flex justify-center items-center
                                            overflow-hidden text-center font-bold 
                                            ${mode ? 'bg-lighter shadow-md shadow-dark text-light' :
                            'bg-white shadow-md'} 
                                            w-full h-full rounded-full`}>
                    {country}
                </div>
            </div>
            <div className={` 
                                            review ${mode ? 'bg-lighter ' : 'bg-white'}
                                            ${showReview === id ? 'show ' : 'hide'}`}>
                {content}
                <span className={`${!state ? 'right-[-12px] md:right-[-20px]' : 'left-[-12px] md:left-[-20px]'}   flex justify-center items-center '`}
                    onClick={() => setShowReview(null)}>{state ? 'x' : <FaXmark />}</span>
            </div>
        </div >
    )
}

export default ReviewsItem