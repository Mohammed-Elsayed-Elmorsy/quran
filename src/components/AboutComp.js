import { FaCheck } from 'react-icons/fa'
import image from '../static/2.png'
import image2 from '../static/5.png'
import aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const AboutComp = ({ more, readmore }) => {
    const lang = useSelector(state => state.lang.arabic)
    const state = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : lang
    useEffect(() => {
        aos.init({
            duration: 900,
            delay: 100
        })
    }, [])
    return (
        <div className='bg-light about pb-[70px] flex flex-col '>
            <h2 className=' title ' >
                {!state ? ' about us' : 'اقرأ عنا'}
                <FaCheck />
            </h2>
            <div className="container  mx-auto px-5 md:px-[70px] lg:px-[120px] flex lg:justify-between justify-center">
                <div className='w-full flex flex-col justify-between lg:w-[58%] text' data-aos={state ? 'fade-down' : 'fade-up'}>
                    {!state ?
                        <p className='md:text-[20px] pb-4'>
                            Welcome to <h2 className='inline text-[25px] font-bold'>
                                {!state ? ' Quran Way Academy' : ' أكاديمية قرآن واي '}
                            </h2> your trusted path to learning the Qur’an, Arabic, Tafseer, and Islamic studies. We proudly serve students across the globe, including the USA, UK, Canada, Australia, UAE, India, Saudi Arabia, and beyond.
                            Our team of highly qualified and experienced teachers, all graduates of the Al-Azhar University and qualified with ijazah and Hifz, is committed to nurturing both the minds and hearts of our students.
                            Using creative and innovative teaching methods,
                            we make learning engaging, accessible,
                            and effective for students of all ages and proficiency levels
                        </p> :
                        <p className='md:text-[20px] text-gray-800 pb-4'>مرحبًا بكم في
                            <h2 className=' inline text-[25px] font-bold'>
                                {!state ? ' Quran Way Academy' : ' أكاديمية قرآن واي '}
                            </h2> طريقكم الموثوق لتعلم القرآن الكريم، واللغة العربية، والتفسير، والدراسات الإسلامية. نفخر في بتقديم خدماتنا التعليمية لطلابنا في جميع أنحاء العالم، بما في ذلك الولايات المتحدة الأمريكية، المملكة المتحدة، كندا، أستراليا،
                            الإمارات العربية المتحدة، الهند، المملكة العربية السعودية، وغيرهم.
                            يضم فريقنا معلمين ومعلمات مؤهلين وذوي خبرة عالية،
                            خريجو جامعة الأزهر الشريف، حاصلون على الإجازة في التلاوة والاقراء وحفظ القرآن الكريم.
                            معلمون كرّسوا أنفسهم لخدمة القرآن الكريم،
                            فهو نورٌ يملأ الصدور ويضيء الأنفاس، يهدي به الله كل من يسعى لعلمه
                            ، كباراً وصغاراً رجالاَ ونساءاً.
                            في أكادميتنا نبذل كل جهد ممكن، ونستخدم كل وسيلة متاحة، لنقل رسالة القرآن وتعاليمه، غير مبالين بالتعب أو الجهد، نهب وقتنا وطاقتنا لإيصال آيات الله إلى القلوب.

                        </p>}
                    <div className='   flex gap-4 lg:justify-start justify-center'>
                        {more ?
                            <Link to={'/about'}
                                className=' flex-1'>
                                <button
                                    className='btn-pri w-full'>
                                    {!state ? 'Learn More' : 'اقرأ المزيد'}
                                </button>
                            </Link> : null}
                        <Link
                            className=' flex-1' to={'/programms'}>
                            <button
                                className='btn-sec w-full'>
                                {!state ? 'Our programms' : ' برامجنا المختلفة'}
                            </button>
                        </Link>
                    </div>
                </div>
                <div data-aos={state ? 'fade-up' : 'fade-down'}
                    className={`image  hidden lg:block relative p-2 bg-white ${state ? 'left-[0px]' : 'right-[0px]'} `}>
                    <img src={image} alt="" className=' h-full w-full object-cover ' />
                </div>
            </div>
            {readmore &&
                <div className="container items-center mx-auto px-5 md:px-[80px] lg:px-[120px] flex justify-between">
                    <div data-aos={state ? 'fade-up' : 'fade-down'}
                        className={`image hidden lg:block relative ${state ? 'left-[0px]' : 'right-[0px]'} `}>
                        <img src={image2} alt="" className=' rounded-md' />
                    </div>
                    <div className='w-full lg:w-[58%] text' data-aos={state ? 'fade-down' : 'fade-up'}>
                        {!state ? <p className='md:text-[20px] text-gray-500'>
                            Using creative and innovative teaching methods, we make learning engaging, accessible,
                            and effective for students of all ages and proficiency levels.
                            At Quran Way Academy, we believe that our mission goes beyond education.
                            We aim to strengthen Muslim families and communities by imparting Islamic knowledge, values, and character.
                            Through our programs, we aspire to inspire positive change, foster unity, and help you and your
                            family become the best
                            versions of yourselves as Muslims.
                            Join us on this transformative journey and take the first step toward a deeper
                            understanding of your faith and a brighter
                            future for your family.
                        </p> :
                            <p className='md:text-[20px] text-gray-500'>
                                . جعلنا غايتنا الأولى تعليم القرآن الكريم، فهو أسمى أهدافنا وأغلى أمانينا،
                                ويحتل مركز اهتمامنا وأولى حاجاتنا. نحمل على عاتقنا مسؤولية عظيمة، وهي أن يكون طلابنا
                                ، بإذن الله، صالحين ومصلحين، راشدين يسعدون بالقرآن في الدنيا وينعمون ببركته
                                في الآخرة. وندعو الله أن يبلغ صوتنا آفاق الأرض، ترتيلًا وتعليمًا وهداية وإصلاحًا،
                                حاملين في قلوبنا عزيمة لا تلين، طمعًا في الأجر من الله والثواب العظيم
                                ملتزمون بتغذية عقول وقلوب طلابنا على حد سواء، باستخدام أساليب تدريس مبتكرة
                                ومبدعة، مما يجعل التعلم ممتعًا، سهل الوصول، وفعّالًا لجميع الأعمار والمستويات
                            </p>
                        }
                    </div>

                </div>
            }

        </div>
    )
}

export default AboutComp