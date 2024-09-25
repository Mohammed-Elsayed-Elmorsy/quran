import React from 'react'
import { blogs } from '../utils/data'
import { FaCheck } from 'react-icons/fa'

const Blogs = () => {
    return (
        <div className=' blogs pb-[70px]'>
            <div className=' mx-auto px-5 container'>
                <div>
                    <h2 className='title ' >
                        Our Blogs
                        <FaCheck />
                    </h2>
                    <div className=' container mx-auto gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:p-0 p-4'>
                        {blogs.map(item => {
                            return (
                                <div data-aos='fade-up'
                                    key={item.id}
                                    className='blog-item flex flex-col gap-2 bg-white p-2'>
                                    <img src={item.image} alt="" />
                                    <h2>
                                        {item.title}
                                    </h2>
                                    <p>
                                        {item.desc}
                                    </p>
                                    <button className=' btn-pri'>
                                        read more
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs