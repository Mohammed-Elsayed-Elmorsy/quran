import image from '../static/supportive-removebg-preview.png'
import image2 from '../static/new5.jpg'
import image3 from '../static/new3.avif'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import Swiper modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
const Landing = () => {
    return (
        <div className=' md:h-[100vh] z-50 landing flex justify-center items-center'>

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
                className='mySwiper' style={{ zIndex: '1000' }}
            >
                <SwiperSlide >
                    <div className=' flex justify-between items-center'>
                        <div className="testimonial flex-1">
                            <h2 className=' md:text-[35px]'> Islamic Studies</h2>
                            <p className=' md:text-[25px]'>"Broaden your knowledge of Islamic teachings and principles
                                through our comprehensive Islamic Studies program. Learn about the Quran,
                                Hadith, Fiqh, and other essential aspects of Islam in a
                                way that connects deeply with your daily life."</p>
                            <button className='px-5 mt-3 text-white py-3 capitalize rounded-md cursor-pointer'>learn more</button>

                        </div>
                        <div className=' hidden lg:block flex-1' id='image'>
                            <img src={image} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=' flex'>
                    <div className=' flex justify-between items-center'>
                        <div className="testimonial  flex-1">
                            <h2 className=' md:text-[35px] '> Tajweed Rules Mastery</h2>
                            <p>"Learn the intricate rules of Tajweed in a simplified manner. Our
                                Tajweed courses are designed for all levels, whether you're a beginner or
                                looking to refine your skills. We focus on clarity and
                                to make the learning process smooth."</p>
                            <button className='px-5 mt-3 text-white py-3 capitalize rounded-md cursor-pointer'>learn more</button>
                        </div>
                        <div className=' hidden lg:block flex-1' id='image'>
                            <img src={image2} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=' flex'>
                    <div className=' flex justify-between items-center'>
                        <div className="testimonial  flex-1">
                            <h2 className=' md:text-[35px]'>Quran Recitation Classes</h2>
                            <p>"Master the art of Quran recitation with our expert instructors.
                                We provide personalized lessons to help you perfect your pronunciation and Tajweed rules,
                                ensuring you recite the Quran accurately and confidently."</p>
                            <button className='px-5 mt-3 text-white py-3 capitalize rounded-md cursor-pointer'>learn more</button>

                        </div>
                        <div className=' hidden lg:block flex-1' id='image'>
                            <img src={image3} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                {/* Add more slides as needed */}
            </Swiper>
        </div>
    )
}

export default Landing