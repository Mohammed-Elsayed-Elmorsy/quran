import React, { useEffect, useState } from 'react'
import TopNav from '../components/TopNav'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { blogs, blogsArabic, medias, mediasarab } from '../utils/data'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import LinksOfDetails from '../components/LinksOfDetails'
import { FaCopy, FaFacebook, FaShare } from 'react-icons/fa'

const BlogDetails = () => {
    const lang = useSelector(state => state.lang.arabic)
    const state = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : lang
    const { id } = useParams()
    const [blog, setBlog] = useState(null)
    useEffect(() => {
        const specificBlog = !state ? blogs.find(i => i.id.toString() === id) :
            blogsArabic.find(i => i.id.toString() === id)
        setBlog(specificBlog)
        window.scrollTo(0, 0);
    }, [id])
    return (
        <div className='details-page'>
            <TopNav />
            <Header />
            <div className=' details-page-content'>
                <div className=' container px-7 md:px-[120px] mx-auto pb-[70px]'>
                    <h2 className=' title mb-[-70px]'>
                        {blog?.title}
                    </h2>
                    <div className=' flex justify-between flex-col items-center'>
                        {/* <div className=' flex justify-between items-center w-1/2 mx-auto mb-[-100px] py-[30px]'>
                            <span className=' flex items-center gap-3'>
                                <img src={blog?.image} className=' w-[50px] h-[50px] rounded-full' alt="" />
                                <div>
                                    <h3>name</h3>
                                    <p>date</p>
                                </div>
                            </span>
                            <span className=' flex items-center gap-3'>
                                <FaShare />
                                <FaFacebook />
                                <FaCopy />
                            </span>
                        </div> */}
                        <img className='' src={blog?.image} alt="" />

                        <div className=' flex items-start'>
                            <p className=' text-[20px] w-full'>
                                {blog?.desc}{blog?.desc}{blog?.desc}{blog?.desc}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' container px-7  mx-auto pb-[70px]'>

                <div>
                    <h2 className=' text-[25px] font-bold my-[50px]'>{!state ? 'Relatd Blogs' : 'المواضيع ذات الصلة'}</h2>
                    <div className=' grid gap-2  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 '>
                        {!state ? blogs.filter(i => i.id !== Number(id)).map(item => <div
                            className=' p-2 rounded-md border border-slate-300 hover:shadow-lg'>
                            <Link to={`/blogs/${item.id}`}>
                                <img className=' w-[250px] h-[150px]' src={item.image} alt="" />
                                <h3>{item.title}</h3>
                            </Link>
                        </div>) : blogsArabic.filter(i => i.id !== Number(id)).map(item => <div
                            className=' p-2 rounded-md border  border-slate-300 hover:shadow-lg '>
                            <Link to={`/blogs/${item.id}`}>
                                <img className=' w-[250px] h-[150px]' src={item.image} alt="" />
                                <h3>{item.title}</h3>
                            </Link>
                        </div>)}
                    </div>
                </div>
                <LinksOfDetails />
            </div>
            <Footer />

        </div >
    )
}

export default BlogDetails