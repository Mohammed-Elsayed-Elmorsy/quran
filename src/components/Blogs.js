import React from 'react'
import { blogs, blogsArabic, SliderSett } from '../utils/data'
import { FaAngleLeft, FaAngleRight, FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import Swiper modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
const BlogsComp = ({ slider }) => {
    const lang = useSelector(state => state.lang.arabic)
    const state = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : lang
    return (
        <div className=' blogs bg-light   pb-[70px]'>
            <div className=' mx-auto px-3 md:px-[70px] lg:px-[120px] container'>
                <div>
                    <h2 className='title ' >
                        {state ? 'المدونات' : 'Our Blogs'}
                        <FaCheck />
                    </h2>
                    <div className=' container content mx-auto '>
                        {slider ?
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                spaceBetween={40}
                                slidesPerView={3}
                                navigation
                                pagination={{ clickable: true }}
                                autoplay={{ delay: 3000 }}
                                loop={true}
                                {...SliderSett}
                                className='mySwiper'
                                style={{ position: 'relative', marginTop: '-50px', padding: " 60px 0px" }}
                            >
                                <SliderBtns />
                                {!state ? blogs.map(item => {
                                    return (
                                        <SwiperSlide
                                            key={item.id}

                                        >
                                            <div className='blog-item flex flex-col  justify-between gap-2 bg-white p-2'>
                                                <div className=' overflow-hidden'>
                                                    <img src={item.image[0]} alt="" className='h-[270px] w-full object-cover' />
                                                </div>
                                                <h3 className=' font-bold text-[25px]'>
                                                    {item.title}
                                                </h3>
                                                <p className=''>
                                                    {item.desc.substring(0, 190)}
                                                </p>
                                                <Link className=' flex' to={`/blogs/${item.id}`}>
                                                    <button
                                                        className=' flex-1 btn-pri'>
                                                        read more
                                                    </button>
                                                </Link>
                                            </div>
                                        </SwiperSlide>
                                    )
                                }) : blogsArabic.map(item => {
                                    return (
                                        <SwiperSlide
                                            key={item.id}
                                            className=''>
                                            <div className='blog-item flex flex-col   rounded-md gap-2 justify-between bg-white p-2'>
                                                <div className=' overflow-hidden'>
                                                    <img src={item.image[0]} alt="" className='h-[270px] w-full object-cover' />
                                                </div>
                                                <h3 className=' font-bold text-[25px]'>
                                                    {item.title}
                                                </h3>
                                                <p className=''>
                                                    {item.desc}
                                                </p>
                                                <Link className=' flex' to={`/blogs/${item.id}`}>
                                                    <button onClick={() => console.log('gfff')} className=' flex-1 btn-pri'>
                                                        {state ? 'اقرا المزيد' : 'read more'}
                                                    </button>
                                                </Link>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                            :
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                                {!state ? blogs.map(item => {
                                    return (
                                        <div className='blog-item flex flex-col  justify-between gap-2 bg-white p-2'>
                                            <div className=' overflow-hidden'>
                                                <img src={item.image} alt="" className='h-[270px] w-full object-cover' />
                                            </div>
                                            <h3 className=' font-bold text-[25px]'>
                                                {item.title}
                                            </h3>
                                            <p className=''>
                                                {item.desc.substring(0, 190)}
                                            </p>
                                            <Link className=' flex' to={`/blogs/${item.id}`}>
                                                <button
                                                    className=' flex-1 btn-pri'>
                                                    read more
                                                </button>
                                            </Link>
                                        </div>
                                    )
                                }) : blogsArabic.map(item => {
                                    return (
                                        <div className='blog-item flex flex-col   rounded-md gap-2 justify-between bg-white p-2'>
                                            <div className=' overflow-hidden'>
                                                <img src={item.image} alt="" className='h-[270px] w-full object-cover' />
                                            </div>
                                            <h3 className=' font-bold text-[25px]'>
                                                {item.title}
                                            </h3>
                                            <p className=''>
                                                {item.desc}
                                            </p>
                                            <Link className=' flex' to={`/blogs/${item.id}`}>
                                                <button onClick={() => console.log('gfff')} className=' flex-1 btn-pri'>
                                                    {state ? 'اقرا المزيد' : 'read more'}
                                                </button>
                                            </Link>
                                        </div>
                                    )
                                })}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}
const SliderBtns = () => {
    const lang = useSelector(state => state.lang.arabic)
    const state = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : lang
    const Swiper = useSwiper()
    return (
        <div
            className='btns'
            style={{ position: 'absolute', right: '-6px', top: '0px', width: '100%' }}>
            <button
                onClick={() => Swiper.slidePrev()}>
                {!state ? <FaAngleLeft /> : <FaAngleRight />}
            </button>
            <button
                onClick={() => Swiper.slideNext()}>
                {!state ? <FaAngleRight /> : <FaAngleLeft />}
            </button>
            <button
                className='btn-pri'
            >
                {!state ?
                    <Link to='/blogs'>
                        all blogs
                    </Link>
                    :
                    <Link to='/blogs'>
                        'كل المدونات'
                    </Link>
                }
            </button>
        </div >
    )
}

export default BlogsComp