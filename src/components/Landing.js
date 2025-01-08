
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
import { Link } from 'react-router-dom';
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

            {!state && <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={40}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 7000 }}
                loop={true}
                className='mySwiper' style={{ zIndex: '1000' }}
            >


                <SwiperSlide >
                    <div className=' flex justify-between items-center'>
                        <div className="testimonial flex-1">
                            <h2 className=' lg:text-[45px] text-[32px]'> Islamic Studies</h2>
                            <p className=' text-[20px] md:text-[25px]'>Study the Islamic rulings related to daily practices and the
                                essentials that every Muslim must know,
                                with enjoyable, easy, and engaging lessons suitable for both children and adults</p>
                            <a href='https://wa.me/201013864939' target='_blank '>
                                <button className='mt-3 btn-pri'>Start your free trail now!</button></a>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className=' flex justify-between items-center'>
                        <div className="testimonial  flex-1">
                            <h2 className=' lg:text-[42px] text-[32px]'>Mastering Tajweed and Qur'an Recitation</h2>
                            <p className=' text-[20px] md:text-[25px]'>Learn to read the Qur'an with proper Tajweed in a simple and effective way,
                                with specialized teachers. Our recitation sessions help you
                                practice correct pronunciation and apply the rules of Tajweed
                            </p>
                            <a href='https://wa.me/201013864939' target='_blank '>
                                <button className='mt-3 btn-pri'>Start your free trail now!</button></a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className=' flex justify-between items-center'>
                        <div className="testimonial  flex-1">
                            <h2 className=' lg:text-[42px] text-[32px]'>Arabic Language</h2>
                            <p className=' text-[20px] md:text-[25px]'>At Quran Way Academy, we offer you the opportunity to learn and
                                practice the Arabic language,
                                including reading, writing, listening, and speaking
                            </p>
                            <a href='https://wa.me/201013864939' target='_blank '>
                                <button className='mt-3 btn-pri capitalize'>Start your free trail now!</button></a>

                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>}

            {state && <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={40}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 7000 }}
                loop={true}
                className='mySwiper' style={{ zIndex: '1000' }}
            >

                <SwiperSlide >
                    <div className=' flex justify-between items-center'>
                        <div className="testimonial flex-1">
                            <h2 className=' lg:text-[42px] text-[32px]'> الدراسات الاسلامية</h2>
                            <p className=' text-[20px] md:text-[25px]'>دراسة الأحكام الشرعية المتعلقة بالممارسات اليومية
                                وما يجب على كل مسلم معرفته، من خلال دروس ممتعة وسهلة مناسبة للصغار والكبار</p>
                            <a href='https://wa.me/201013864939' target='_blank '>
                                <button className='mt-3 btn-pri'>ابدأ حصتك التجريبية الآن</button>
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className=' flex justify-between items-center'>
                        <div className="testimonial  flex-1">
                            <h2 className=' lg:text-[42px] text-[32px]'> اتقان التجويد وتلاوة القرآن  </h2>
                            <p className=' text-[20px] md:text-[25px]'>تعلم قراءة القرآن الكريم بتجويد صحيح بطريقة بسيطة وفعّالة
                                ، مع معلمين متخصصين. جلسات التلاوة
                                تساعدك على ممارسة النطق السليم وتطبيق قواعد التجويد</p>
                            <a href='https://wa.me/201013864939' target='_blank '>
                                <button className='mt-3 btn-pri'>ابدأ حصتك التجريبية الآن</button>
                            </a>                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className=' flex justify-between items-center'>
                        <div className="testimonial  flex-1">
                            <h2 className=' lg:text-[42px] text-[32px]'>اللغة العربية</h2>
                            <p className=' text-[20px] md:text-[25px]'>"في أكاديمية قرآن واي، نوفر لك الفرصة لتعلم وممارسة اللغة العربية، بما في ذلك القراءة، الكتابة، الاستماع، والمحادثة."</p>
                            <a href='https://wa.me/201013864939' target='_blank '>
                                <button className='mt-3 btn-pri'>ابدأ حصتك التجريبية الآن</button>
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>}
        </Slideshow>
        // </div>
    )
}

export default Landing