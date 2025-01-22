import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import { blogs, blogsArabic } from '../utils/data'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import LinksOfDetails from '../components/LinksOfDetails'
import { GoShare, GoCopy, GoVideo, GoBell } from 'react-icons/go'
import Loading from '../components/Loading'

const BlogDetails = () => {
    const lang = useSelector(state => state.lang.arabic)
    const state = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : lang
    const { id } = useParams()
    const [blog, setBlog] = useState(null)
    const [loading, setloading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setloading(false)
        }, 2000);
        const specificBlog = !state ? blogs.find(i => i.id.toString() === id) :
            blogsArabic.find(i => i.id.toString() === id)
        setBlog(specificBlog)
        window.scrollTo(0, 0);
        setloading(true)
    }, [id])
    if (loading) {
        return <Loading />
    }
    return (
        <div className='details-page bg-light'>
            <div className=' details-page-content'>
                <div className=' container px-6 md:px-[120px] mx-auto pb-[30px]'>
                    <h2 className=' title lg:mb-[-130px] mb-[-50px] mt-[0px]'>
                        {blog?.title}
                    </h2>
                    <div className=' flex justify-between flex-col items-center'>

                        <div className=' flex justify-between items-center w-full mx-auto  py-[30px]'>
                            <span className=' flex items-center gap-2'>
                                <img src={blog?.image[0]} className=' w-[55px] h-[55px] rounded-full object-cover' alt="" />
                                <div>
                                    <h3 className=' capitalize md:text-[18px] text-[15px]'>shatha Alqur'an</h3>
                                    <p className='md:text-[18px] text-[15px] text-gray-500'>12/12/2021</p>
                                </div>
                            </span>
                            <span className=' flex items-center gap-3 md:text-[20px] text-[18px]'>
                                <GoShare />
                                <GoVideo />
                                <GoCopy />
                                <GoBell />
                            </span>
                        </div>

                        <div className='grid-area'>
                            <div>
                                <img className=' p-1 rev-item bg-white w-full h-full object-cover' src={blog?.image[0]} alt="" />
                            </div>
                            <div>
                                <img className=' p-1 rev-item bg-white w-full h-full object-cover' src={blog?.image[1]} alt="" />
                            </div>
                            <div>
                                <img className=' p-1 rev-item bg-white w-full h-full object-cover' src={blog?.image[2]} alt="" />

                            </div>
                            <div>
                                <img className=' p-1 rev-item bg-white w-full h-full object-cover' src={blog?.image[3]} alt="" />

                            </div>
                        </div>

                        <div className=' flex items-start'>
                            <p className='text-[16px] w-full mt-5 p-3 border border-slate-300 bg-white'>
                                {blog?.desc}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' container px-6  md:px-[120px] mx-auto pb-[70px]'>

                <div>
                    <h2 className=' text-[25px] font-bold my-[20px]'>{!state ? 'Relatd Blogs' : 'المواضيع ذات الصلة'}</h2>
                    <div className=' grid gap-2  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 '>
                        {!state ? blogs.filter(i => i.id !== Number(id)).map(item =>
                            <Link className='p-1 border border-gray-300 bg-white  hover:shadow-lg '
                                to={`/blogs/${item.id}`}>
                                <img

                                    src={item.image[0]} alt="" />
                                <h6 className=' text-black mt-4 font-bold'>{item.title}</h6>
                            </Link>
                        ) : blogsArabic.filter(i => i.id !== Number(id)).map(item =>
                            <Link className='border border-gray-300 bg-white  hover:shadow-lg  p-1'
                                to={`/blogs/${item.id}`}>
                                <img

                                    src={item.image[0]} alt="" />
                                <h6 className=' text-black mt-4 font-bold'>{item.title}</h6>
                            </Link>
                        )}
                    </div>
                </div>
                <div className=' pt-[70px]'>
                    <LinksOfDetails />
                </div>
            </div>
            <Footer />

        </div >
    )
}

export default BlogDetails