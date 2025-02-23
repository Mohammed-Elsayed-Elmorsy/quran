
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import Swiper modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Slideshow from './SlideShow';
import { Slides, SlidesArabic } from '../utils/data';
const Landing = () => {
    const [change, setChange] = useState(false)
    const lang = useSelector(state => state.lang.arabic)
    const state = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : lang
    const changebgoflanding = () => {
        setTimeout(() => {
            setChange(!change)
        }, 5000);
    }
    changebgoflanding()

    return (
        <Slideshow>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={40}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                loop={true}
                className='mySwiper' style={{ zIndex: '1000' }}
            >
                {!state ? Slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <SwiperSlide >
                            <div className=' flex justify-between items-center'>
                                <div className="testimonial flex-1">
                                    <h2 className=' lg:text-[35px] text-[25px]'>{slide.title}</h2>
                                    <p className=' text-[16x] md:text-[18px]'>{slide.text}</p>
                                    <a href='https://wa.me/201013864939' target='_blank '>
                                        <button className='mt-3 btn-pri'>Start your free trail now!</button></a>
                                </div>
                            </div>
                        </SwiperSlide>
                    </SwiperSlide>)) : SlidesArabic.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className=' flex justify-between items-center'>
                                <div className="testimonial flex-1">
                                    <h2 className=' lg:text-[35px] text-[25px]'>{slide.title}</h2>
                                    <p className=' text-[16x] md:text-[18px]'>{slide.text}</p>
                                    <a href='https://wa.me/201013864939' target='_blank '>
                                        <button className='mt-3 btn-pri'>ابدأ حصتك التجريبية الآن</button></a>
                                </div>
                            </div>
                        </SwiperSlide>))}
            </Swiper>
        </Slideshow>
    )
}

export default Landing