import { FaCheck } from 'react-icons/fa'
import image from '../static/five.png'
import aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
const AboutComp = () => {
    useEffect(() => {
        aos.init({
            duration: 900,
            delay: 100
        })
    }, [])
    return (
        <div className=' about pb-[70px]'>
            <h2 className=' title' style={{ paddingBottom: '0' }}>
                about us
                <FaCheck />
            </h2>
            <div className="container items-center mx-auto px-5 flex justify-between">
                <div className='w-full lg:w-[60%] text' data-aos="fade-right">
                    <h2 className=' text-[25px] font-bold'>
                        Assalamu Alaikum!
                    </h2>
                    <p className='md:text-[20px] text-gray-500'>
                        I am [Your Name], a dedicated Quran teacher with a deep passion
                        for helping others connect with the beauty and wisdom of the Quran. Over the years,
                        I have studied various aspects of Quranic recitation,
                        including Tajweed and memorization, and I strive
                        to make learning the Quran accessible to everyone, regardless of their age or background.

                        My goal is to ensure that each of my students not only
                        recites the Quran correctly but also understands its teachings,
                        applying its values to daily life. Whether you are a beginner or
                        looking to perfect your recitation, I am here to guide you on your Quranic journey.
                    </p>
                </div>
                <div data-aos="fade-left" className='image hidden lg:block relative  right-[-50px]'>
                    <img src={image} alt="" />
                </div>
            </div>
            <div className=' container items-center mx-auto px-5 mt-[20px] flex gap-4 justify-between"'>
                <button className='btn-pri'>Learn More</button>
                <button className='btn-sec'>Our Programms</button>
            </div>
        </div>
    )
}

export default AboutComp