import React from 'react'
import { Link } from 'react-router-dom'

const SingleProg = ({ id, desc, title, image, mode, state }) => {
    return (
        <div
            data-aos={'fade-up'}
            className={`flex flex-col shadow-lg p-2 gap-2 ${mode ? 'bg-lighter  text-textDark' : ' bg-white'}`}
            key={id}>
            <img src={image} alt="" className={`prog-image h-[180px]    object-cover`} />
            <h3 className='px-2 text-[18px] font-bold'>{title}</h3>
            <p className='px-2 text-[15px] '>{desc}</p>
            <div className=' mt-auto flex gap-2 items-center ' >
                <Link to={'/contact'} className=' flex-1'>
                    <button className=' w-full btn-pri'>{state ? 'تواصل معنا' : 'Contact Us'}</button>
                </Link>
                <Link to={'/programms/' + id} className=' flex-1 '>
                    <button className=' w-full btn-pri'>{state ? 'اقرأ المزيد' : 'read more'}</button>
                </Link>
            </div>
        </div>
    )
}

export default SingleProg