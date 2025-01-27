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
import LinksOfDetails from './LinksOfDetails'
const BlogsComp = ({ slider }) => {
    const lang = useSelector(state => state.lang.arabic)
    const state = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : lang
    return (
        <div className=' blogs bg-light   pb-[40px]'>
            <div className=' mx-auto px-7 md:px-[60px] lg:px-[100px] container'>
                <div>
                    <h2 className={`title ${slider ? '!pb-0' : ''}`} style={slider ? { marginBottom: '10px' } : { marginBottom: '0' }}>
                        {state ? 'المدونات' : 'Our Blogs'}
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
                                            <div className='blog-item  flex flex-col  justify-between gap-2 bg-white p-1'>
                                                <div className=' overflow-hidden'>
                                                    <img src={item.image[0]} alt="" className='h-[220px] w-full object-cover' />
                                                </div>
                                                <h3 className=' font-bold px-1 text-[19px]'>
                                                    {item.title}
                                                </h3>
                                                <p className='text-[15px] px-1'>
                                                    {item.desc.substring(0, 210) + '.......'}
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
                                        >
                                            <div className=' flex flex-col   rev-item gap-2 bg-white p-1'>
                                                <div className=' overflow-hidden'>
                                                    <img src={item.image[0]} alt="" className='h-[220px] w-full object-cover' />
                                                </div>
                                                <h3 className=' px-1 font-bold px-1 text-[19px]'>
                                                    {item.title}
                                                </h3>
                                                <p className='text-[15px] px-1 px-1 h-[85px]'>
                                                    {item.desc.substring(0, 235) + '...'}
                                                </p>
                                                <Link className='mt-auto flex' to={`/blogs/${item.id}`}>
                                                    <button className=' flex-1 btn-pri text-[16px]'>
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
                                        <div className='blog-item flex flex-col   justify-between gap-2 bg-white p-1'>
                                            <div className=' overflow-hidden'>
                                                <img src={item.image[0]} alt="" className='h-[220px] w-full object-cover' />
                                            </div>
                                            <h3 className=' font-bold px-1 text-[19px]'>
                                                {item.title}
                                            </h3>
                                            <p className='text-[15px] px-1 px-1'>
                                                {item.desc.substring(0, 220) + '.......'}
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
                                        <div className='flex flex-col  rev-item gap-2  bg-white p-1'>
                                            <div className=' overflow-hidden'>
                                                <img src={item.image[0]} alt="" className='h-[220px] w-full object-cover' />
                                            </div>
                                            <h3 className=' font-bold px-1 text-[20px]'>
                                                {item.title}
                                            </h3>
                                            <p className=' text-[15px] px-1'>
                                                {item.desc.substring(0, 235) + '...'}
                                            </p>
                                            <Link className=' flex mt-auto' to={`/blogs/${item.id}`}>
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
            {!slider ? <div className=' pt-[70px]'><LinksOfDetails /></div> : null}
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
            <button className=''
                onClick={() => Swiper.slidePrev()}>
                {!state ? <FaAngleLeft /> : <FaAngleRight />}
            </button>
            <button className=''
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
                        كل المدونات
                    </Link>
                }
            </button>
        </div >
    )
}

export default BlogsComp