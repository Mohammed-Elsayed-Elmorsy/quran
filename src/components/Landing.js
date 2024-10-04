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
import { useSelector } from 'react-redux';
const Landing = () => {
    const lang = useSelector(state => state.lang.arabic)
    const state = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : lang
    return (
        <div className=' md:h-[100vh] z-50 landing flex justify-center items-center'>

            {!state && <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
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
                            <button className='mt-3 btn-pri'>learn more</button>

                        </div>
                        <div className=' hidden lg:block flex-1' id='image'>
                            <img src={image} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className=' flex justify-between items-center'>
                        <div className="testimonial  flex-1">
                            <h2 className=' md:text-[35px] '> Tajweed Rules Mastery</h2>
                            <p>"Learn the intricate rules of Tajweed in a simplified manner. Our
                                Tajweed courses are designed for all levels, whether you're a beginner or
                                looking to refine your skills. We focus on clarity and
                                to make the learning process smooth."</p>
                            <button className='mt-3 btn-pri'>learn more</button>
                        </div>
                        <div className=' hidden lg:block flex-1' id='image'>
                            <img src={image2} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className=' flex justify-between items-center'>
                        <div className="testimonial  flex-1">
                            <h2 className=' md:text-[35px]'>Quran Recitation Classes</h2>
                            <p>"Master the art of Quran recitation with our expert instructors.
                                We provide personalized lessons to help you perfect your pronunciation and Tajweed rules,
                                ensuring you recite the Quran accurately and confidently."</p>
                            <button className='mt-3 btn-pri'>learn more</button>

                        </div>
                        <div className=' hidden lg:block flex-1' id='image'>
                            <img src={image3} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>}

            {state && <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                loop={true}
                className='mySwiper' style={{ zIndex: '1000' }}
            >


                <SwiperSlide >
                    <div className=' flex justify-between items-center'>
                        <div className="testimonial flex-1">
                            <h2 className=' md:text-[35px]'> الدراسات الاسلامية</h2>
                            <p className=' md:text-[25px]'>"توسيع معرفتك بالتعاليم والمبادئ الإسلامية
                                من خلال برنامج الدراسات الإسلامية الشامل لدينا. تعرف على القرآن,
                                الحديث والفقه وغيرها من الجوانب الأساسية للإسلام في أ
                                الطريقة التي ترتبط بعمق مع حياتك اليومية."</p>
                            <button className='mt-3 btn-pri'>اقرا المزيد</button>

                        </div>
                        <div className=' hidden lg:block flex-1' id='image'>
                            <img src={image} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className=' flex justify-between items-center'>
                        <div className="testimonial  flex-1">
                            <h2 className=' md:text-[35px] '> اجادة قواعد التجويد</h2>
                            <p>"تعلم قواعد التجويد المعقدة بطريقة مبسطة. ملكنا
                                دورات التجويد مصممة لجميع المستويات، سواء كنت مبتدئًا أو
                                تتطلع إلى صقل مهاراتك. نحن نركز على الوضوح و
                                لجعل عملية التعلم سلسة."</p>
                            <button className='mt-3 btn-pri'>اقرا المزيد</button>
                        </div>
                        <div className=' hidden lg:block flex-1' id='image'>
                            <img src={image2} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className=' flex justify-between items-center'>
                        <div className="testimonial  flex-1">
                            <h2 className=' md:text-[35px]'>دروس التلاوة</h2>
                            <p>"أتقن فن تلاوة القرآن الكريم مع مدربينا الخبراء.
                                نحن نقدم دروسًا مخصصة لمساعدتك على إتقان النطق وقواعد التجويد،
                                ضمان قراءة القرآن بدقة وثقة."</p>
                            <button className='mt-3 btn-pri'>اقرا المزيد</button>

                        </div>
                        <div className=' hidden lg:block flex-1' id='image'>
                            <img src={image3} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>}
        </div>
    )
}

export default Landing