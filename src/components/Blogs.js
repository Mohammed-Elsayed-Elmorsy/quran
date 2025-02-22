import React, { useEffect, useState } from 'react'
import { blogs, blogsArabic, SliderSett } from '../utils/data'
import { useSelector } from 'react-redux'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import Swiper modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import LinksOfDetails from './LinksOfDetails'
import BlogItem from './BlogItem'
import SliderBtns from './SliderBtns';
const BlogsComp = ({ slider }) => {
    const { dark } = useSelector((state) => state.mode);
    const mode = localStorage.getItem("dark")
        ? JSON.parse(localStorage.getItem("dark"))
        : dark;
    const lang = useSelector(state => state.lang.arabic)
    const state = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : lang
    const text = state ? 'المدونات' : ' Blogs'
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (index < text.length) {
                setDisplayText((prev) => prev + text.charAt(index));
                setIndex((prev) => prev + 1);
            }
        }, 130);
        return () => clearTimeout(timeout);
    }, [index, text]);
    return (
        <div className={` ${mode ? 'bg-dark' : 'bg-light'} pb-[40px]`}>
            <div className=' mx-auto px-7 md:px-[60px] lg:px-[100px] xl:px-[150px] container'>
                <div>
                    <h2
                        className={`title ${slider ? '!pb-0' : ''}`}
                        style={slider ? { marginBottom: '10px' } : { marginBottom: '0' }}>
                        {displayText}
                    </h2>
                    <div className=' container mx-auto '>
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
                                        <SwiperSlide key={item.id}>
                                            <BlogItem slider={slider} {...item} mode={mode} state={state} />
                                        </SwiperSlide>
                                    )
                                }) : blogsArabic.map(item => {
                                    return (
                                        <SwiperSlide key={item.id}>
                                            <BlogItem slider={slider} {...item} mode={mode} state={state} />
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                            :
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                                {!state ? blogs.map(item => {
                                    return (
                                        <BlogItem key={item.id} {...item} mode={mode} state={state} />
                                    )
                                }) : blogsArabic.map(item => {
                                    return (
                                        <BlogItem key={item.id} {...item} mode={mode} state={state} />
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

export default BlogsComp