import React from 'react'
import { Link } from 'react-router-dom'

const BlogItem = ({ title, mode, image, id, desc, state, slider }) => {
    return (
        <>
            {slider ?
                <Link to={`/blogs/${id}`}
                    className={`blog-item flex-col flex gap-2 
                        ${mode ?
                            'bg-lighter shadow shadow-black text-textDark ' :
                            'bg-white blog-item shadow shadow-slate-500'
                        } 
                        p-2 flex flex-col  justify-between gap-2 `}>
                    <div className=' overflow-hidden'>
                        <img src={image[0]} alt="" className='h-[182px] w-full object-cover transition' />
                    </div>
                    <h3 className=' font-bold px-1 text-[19px]'>
                        {state ? title.substring(0, 26) + '...' : title.substring(0, 48) + '...'}
                    </h3>
                    <p className='text-[15px] px-1'>
                        {state ? desc.substring(0, 121) + '.......' : desc.substring(0, 115) + '.......'}
                    </p>
                </Link> :
                <div className={`blog-item flex-col flex gap-2 ${mode ?
                    'bg-lighter shadow shadow-black text-textDark ' : 'bg-white shadow shadow-slate-400'} 
                 p-2 flex flex-col  justify-between gap-2 `}>
                    <div className=' overflow-hidden'>
                        <img src={image[0]} alt="" className='h-[182px] w-full object-cover transition' />
                    </div>
                    <h3 className=' font-bold px-1 text-[19px]'>
                        {state ? title.substring(0, 26) + '...' : title.substring(0, 48) + '...'}
                    </h3>
                    <p className='text-[15px] px-1'>
                        {state ? desc.substring(0, 121) + '.......' : desc.substring(0, 115) + '.......'}
                    </p>
                    <Link className=' flex' to={`/blogs/${id}`}>
                        <button
                            className=' flex-1 btn-pri'>
                            {state ? ' اقرأ المزيد' : 'Read More'}
                        </button>
                    </Link>
                </div>}
        </>
    )
}

export default BlogItem