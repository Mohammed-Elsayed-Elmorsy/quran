import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import { blogs, blogsArabic, medias, mediasarab } from '../utils/data'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import LinksOfDetails from '../components/LinksOfDetails'
import { GoShare, GoCopy, GoVideo } from 'react-icons/go'
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
        }, 1600);
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
        <div className='details-page'>
            <div className=' details-page-content'>
                <div className=' container px-7 md:px-[120px] mx-auto pb-[30px]'>
                    <h2 className=' title mb-[-60px] mt-[-20px]'>
                        {blog?.title}
                    </h2>
                    <div className=' flex justify-between flex-col items-center'>
                        <div className=' flex justify-between items-center w-1/2 mx-auto  py-[30px]'>
                            <span className=' flex items-center gap-2'>
                                <img src={blog?.image} className=' w-[55px] h-[55px] rounded-full object-cover' alt="" />
                                <div>
                                    <h3 className=' capitalize'>mohammed elmorsy</h3>
                                    <p className='text-gray-500'>12/12/2021</p>
                                </div>
                            </span>
                            <span className=' flex items-center gap-5 text-[20px]'>
                                <GoShare />
                                <GoVideo />
                                <GoCopy />
                            </span>
                        </div>
                        <img className=' w-full h-[500px] object-cover' src={blog?.image} alt="" />

                        <div className=' flex items-start'>
                            <p className=' text-[20px] w-full mt-5'>
                                {blog?.desc}{blog?.desc}{blog?.desc}{blog?.desc}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' container px-7  md:px-[120px] mx-auto pb-[70px]'>

                <div>
                    <h2 className=' text-[25px] font-bold my-[20px]'>{!state ? 'Relatd Blogs' : 'المواضيع ذات الصلة'}</h2>
                    <div className=' grid gap-2  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 '>
                        {!state ? blogs.filter(i => i.id !== Number(id)).map(item => <div
                            className=' border  hover:shadow-lg'>
                            <Link to={`/blogs/${item.id}`}>
                                <img className='p-2 w-[250px] h-[150px] object-cover' src={item.image} alt="" />
                                <h3 className='px-2'>{item.title}</h3>
                            </Link>
                        </div>) : blogsArabic.filter(i => i.id !== Number(id)).map(item => <div
                            className=' border  hover:shadow-lg '>
                            <Link to={`/blogs/${item.id}`}>
                                <img className='p-2 w-[250px] h-[150px] object-cover' src={item.image} alt="" />
                                <h3 className='px-2'>{item.title}</h3>
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