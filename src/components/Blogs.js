import React from 'react'
import { blogs, blogsArabic } from '../utils/data'
import { FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const BlogsComp = () => {
    const lang = useSelector(state => state.lang.arabic)
    const state = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : lang
    return (
        <div className=' blogs pb-[70px]'>
            <div className=' mx-auto px-7 container'>
                <div>
                    <h2 className='title ' >
                        {state ? 'المدونات' : 'Our Blogs'}
                        <FaCheck />
                    </h2>
                    <div className=' container content mx-auto gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:p-0 p-4'>
                        {!state ? blogs.map(item => {
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
                                    <Link to={`/blogs/${item.id}`}>
                                        <button onClick={() => console.log('gfff')} className=' btn-pri'>
                                            read more
                                        </button>
                                    </Link>
                                </div>
                            )
                        }) : blogsArabic.map(item => {
                            return (
                                <div data-aos='fade-up'
                                    key={item.id}
                                    className='blog-item flex flex-col gap-2 bg-white p-2'>
                                    <img src={item.image} alt="" />
                                    <h2>
                                        {item.title}
                                    </h2>
                                    <p className=' text-[20px]'>
                                        {item.desc}
                                    </p>
                                    <Link to={`/blogs/${item.id}`}>
                                        <button onClick={() => console.log('gfff')} className=' btn-pri'>
                                            {state ? 'اقرا المزيد' : 'read more'}
                                        </button>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogsComp