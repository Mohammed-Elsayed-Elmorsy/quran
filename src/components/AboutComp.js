import { FaCheck } from 'react-icons/fa'
import image from '../static/five.png'
import aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const AboutComp = () => {
    const lang = useSelector(state => state.lang.arabic)
    const state = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : lang
    useEffect(() => {
        aos.init({
            duration: 900,
            delay: 100
        })
    }, [])
    return (
        <div className=' about pb-[70px]'>
            <h2 className=' title' style={{ paddingBottom: '0' }}>
                {!state ? ' about us' : 'اقرا عنا'}
                <FaCheck />
            </h2>
            <div className="container items-center mx-auto px-5 flex justify-between">
                <div className='w-full lg:w-[60%] text' data-aos={state ? 'fade-left' : 'fade-right'}>
                    <h2 className=' text-[25px] font-bold'>
                        {!state ? ' Assalamu Alaikum!' : 'السلام عليكم'}
                    </h2>

                    {!state ? <p className='md:text-[20px] text-gray-500'>
                        I am [Your Name], a dedicated Quran teacher with a deep passion
                        for helping others connect with the beauty and wisdom of the Quran. Over the years,
                        I have studied various aspects of Quranic recitation,
                        including Tajweed and memorization, and I strive
                        to make learning the Quran accessible to everyone, regardless of their age or background.

                        My goal is to ensure that each of my students not only
                        recites the Quran correctly but also understands its teachings,
                        applying its values to daily life. Whether you are a beginner or
                        looking to perfect your recitation, I am here to guide you on your Quranic journey.
                    </p> :
                        <p className='md:text-[20px] text-gray-500'>
                            مدرس قرآن كريم متفاني لديه شغف عميق لمساعدة الآخرين على التواصل مع جمال
                            وحكمة القرآن الكريم. على مر السنين، درست جوانب مختلفة من تلاوة القرآن الكريم، بما في ذلك التجويد والحفظ، وأسعى جاهداً لجعل تعلم القرآن الكريم
                            في متناول الجميع، بغض النظر عن أعمارهم أو خلفيتهم. هدفي هو التأكد من أن كل طالب من طلابي
                            لا يقرأ القرآن بشكل صحيح فحسب، بل يفهم أيضًا تعاليمه، ويطبق قيمه في الحياة اليومية
                            . سواء كنت مبتدئًا أو تتطلع إلى إتقان تلاوتك، فأنا هنا لمساعدتك.
                        </p>}
                </div>
                <div data-aos={state ? 'fade-right' : 'fade-left'} className='image hidden lg:block relative  right-[-50px]'>
                    <img src={image} alt="" />
                </div>
            </div>
            <div className=' container items-center mx-auto px-5 mt-[20px] flex gap-4 justify-between"'>
                <button className='btn-pri'>{!state ? 'Learn More' : 'اقرا المزيد'}</button>
                <Link to={'/programms'}>
                    <button className='btn-sec'>{!state ? 'Our programms' : ' برامجنا المختلفة'}</button></Link>
            </div>
        </div>
    )
}

export default AboutComp