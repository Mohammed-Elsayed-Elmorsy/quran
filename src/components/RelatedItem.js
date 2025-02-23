import React from 'react'
import { Link } from 'react-router-dom'

const RelatedItem = ({ image, title, id, mode }) => {
    return (
        <Link className={`p-1 transition 
            ${mode ? 'bg-lighter shadow shadow-black hover:bg-graymy ' :
                ' bg-white hover:bg-gray-100 shadow shadow-slate-400 hover:shadow-slate-500'}`}
            to={`/blogs/${id}`}>
            <img className='h-[100px] md:h-[135px] w-full'
                src={image[0]}
                alt="blogs-learning-quran" />
            <h4
                className={` ${mode ? 'text-textDark' : 'text-black'} mt-1 font-bold`}>
                {title.substring(0, 24) + '...'}
            </h4>
        </Link>
    )
}

export default RelatedItem