
import Footer from '../components/Footer'
import { useEffect, useState } from 'react';
import image from '../static/11.png'
import image2 from '../static/5.png'
import image3 from '../static/6.png'
import image4 from '../static/13.png'
import LinksOfDetails from '../components/LinksOfDetails';
import { FaCheck } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import Loading from '../components/Loading';
import aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';
const About = () => {
    const [loading, setLoading] = useState(true)
    const lang = useSelector(state => state.lang.arabic)
    const state = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : lang
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
        window.scrollTo(0, 0);
        setLoading(true)
    }, []);
    useEffect(() => {
        aos.init({
            duration: 900,
            delay: 100
        })
    }, [])
    if (loading) {
        return <Loading />
    }

    return (
        <div>
            <div className=' bg-light'>
                <div className='py-[30px] container mx-auto px-8 md:px-[80px] lg:px-[120px]'>
                    {state &&
                        <div className=' flex flex-col gap-5 text-[20px]'>
                            <h2 className=' flex items-center gap-2 font-bold text-[30px]' >
                                {!state ? ' who we are ' : 'من نحن '}
                                <FaCheck />
                            </h2>
                            <p className='bg-white shadow-md p-2 text-[16px] md:text-[18px]' data-aos={'fade-up'}>مرحبًا بكم في أكاديمية قرآن واي طريقكم الموثوق لتعلم القرآن الكريم، واللغة العربية،
                                والتفسير، والدراسات الإسلامية. نفخر في بتقديم خدماتنا التعليمية لطلابنا في جميع أنحاء العالم
                                ، بما في ذلك الولايات المتحدة الأمريكية، المملكة المتحدة، كندا، أستراليا،
                                الإمارات العربية المتحدة، الهند، المملكة العربية السعودية، وغيرهم.
                            </p>
                            <p className='bg-white shadow-md p-2 text-[16px] md:text-[18px] mt-[-20px]' data-aos={'fade-left'}>يضم فريقنا معلمين ومعلمات مؤهلين وذوي خبرة عالية، خريجو جامعة الأزهر الشريف،
                                حاصلون على الإجازة في التلاوة والاقراء وحفظ القرآن الكريم. معلمون كرّسوا أنفسهم لخدمة القرآن الكريم،
                                فهو نورٌ يملأ الصدور ويضيء الأنفاس، يهدي به الله كل من يسعى لعلمه ، كباراً وصغاراً رجالاَ ونساءاً.
                                في أكادميتنا نبذل كل جهد ممكن، ونستخدم كل وسيلة متاحة، لنقل رسالة القرآن وتعاليمه،
                                غير مبالين بالتعب أو الجهد، نهب وقتنا وطاقتنا لإيصال آيات الله إلى القلوب.
                            </p>
                            <div className=' grid grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4 text-center'>
                                <img data-aos={'fade-up'} src={image} alt="" className='p-2 bg-white   h-[200px]  xl:h-[250px] object-cover' />
                                <img data-aos={'fade-down'} src={image2} alt="" className='p-2 bg-white   h-[200px]  xl:h-[250px] object-cover' />
                                <img data-aos={'fade-up'} src={image3} alt="" className='p-2 bg-white   h-[200px]  xl:h-[250px] object-cover' />
                                <img data-aos={'fade-down'} src={image4} alt="" className='p-2 bg-white   h-[200px]  xl:h-[250px] object-cover' />
                            </div>
                            <p className='bg-white shadow-md p-2 text-[16px] md:text-[18px]' data-aos={'fade-right'}>
                                . جعلنا غايتنا الأولى تعليم القرآن الكريم،
                                فهو أسمى أهدافنا وأغلى أمانينا، ويحتل مركز اهتمامنا وأولى حاجاتنا. نحمل على عاتقنا مسؤولية عظيمة،
                                وهي أن يكون طلابنا، بإذن الله، صالحين ومصلحين، راشدين يسعدون بالقرآن في الدنيا وينعمون ببركته في الآخرة.
                                وندعو الله أن يبلغ صوتنا آفاق الأرض، ترتيلًا وتعليمًا وهداية وإصلاحًا، حاملين في قلوبنا عزيمة لا تلين،
                                طمعًا في الأجر من الله والثواب العظيم
                                ملتزمون بتغذية عقول وقلوب طلابنا على حد سواء،
                                باستخدام أساليب تدريس مبتكرة ومبدعة، مما يجعل التعلم ممتعًا، سهل الوصول،
                                وفعّالًا لجميع الأعمار والمستويات

                            </p>
                            <p className='bg-white shadow-md p-2 text-[16px] md:text-[18px] mt-[-20px]' data-aos={'fade-up'}>
                                ملتزمون بتغذية عقول وقلوب طلابنا على حد سواء، باستخدام
                                أساليب تدريس مبتكرة ومبدعة، مما يجعل التعلم ممتعًا،
                                سهل الوصول، وفعّالًا لجميع الأعمار والمستويات
                            </p>
                            <p className='bg-white shadow-md p-2 text-[16px] md:text-[18px] mt-[-20px]' data-aos={'fade-up'}>
                                في أكاديمية قرآن واي، نؤمن أن رسالتنا تتجاوز مجرد التعليم. نحن نسعى إلى تعزيز الأسر والمجتمعات
                                المسلمة بنقل المعرفة الإسلامية والقيم والأخلاق. من خلال برامجنا، نطمح إلى خلق التغيير
                                الإيجابي، وتعزيز الوحدة بين المسلمين، محاولين أن نكون عوناً
                                لهم ليكونوا في طريقهم إلى الله.
                            </p>
                            <p data-aos={'fade-up'} className=' flex justify-between items-center  font-bold text-[20px]'>
                                سارعو بالانضمام لأكادميتنا، واخطوا الخطوة الأولى لعلاقة أفضل وأقرب لكتاب الله.
                            </p>
                            <Link to='/programms' className='btn-pri w-fit '>
                                ابدا  معنا الان
                            </Link>
                        </div>}
                    {!state && <div className=' flex flex-col gap-5 text-[20px]'>
                        <h2 className='flex items-center gap-2 font-bold text-[30px]' >
                            {!state ? ' who we are ' : 'من نحن '}
                            <FaCheck />
                        </h2>
                        <p className='bg-white shadow-md p-2 text-[16px] md:text-[18px]' data-aos={'fade-up'}>Welcome to Quran Way Academy,
                            your trusted path to learning the Qur’an,
                            Arabic, Tafseer, and Islamic studies. We proudly serve students across the globe,
                            including the USA, UK, Canada, Australia, UAE,
                            India, Saudi Arabia, and beyond
                        </p>
                        <p className='bg-white shadow-md p-2 text-[16px] md:text-[18px] mt-[-20px]' data-aos={'fade-up'}
                        >
                            Our team of highly qualified and experienced teachers,
                            all graduates of the Al-Azhar University and qualified with
                            ijazah and Hifz, is committed to nurturing both the minds and
                            hearts of our students. Using creative and innovative teaching methods,
                            we make learning engaging, accessible,
                            and effective for students of all ages and proficiency levels
                        </p>
                        <div className=' grid grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4 text-center'>
                            <img data-aos={'fade-up'} src={image} alt="" className='p-2 bg-white   h-[200px]  xl:h-[250px] object-cover' />
                            <img data-aos={'fade-up'} src={image2} alt="" className='p-2 bg-white   h-[200px]  xl:h-[250px] object-cover' />
                            <img data-aos={'fade-up'} src={image3} alt="" className='p-2 bg-white   h-[200px]  xl:h-[250px] object-cover' />
                            <img data-aos={'fade-up'} src={image4} alt="" className='p-2 bg-white   h-[200px]  xl:h-[250px] object-cover' />
                        </div>
                        <p className='bg-white shadow-md p-2 text-[16px] md:text-[18px]' data-aos={'fade-up'}>
                            At Quran Way Academy, we believe that our mission goes beyond education.
                            We aim to strengthen Muslim families and communities by imparting Islamic knowledge, values,
                            and character.
                            Through our programs, we aspire to inspire positive change, foster unity,
                            and help you and your family become the best versions of yourselves as Muslims.
                        </p>
                        <p data-aos={'fade-up'} className='  font-bold text-[20px]'>

                            Join us on this transformative journey and take
                            the first step toward a deeper understanding of your faith and
                            a brighter future for your family.

                        </p>
                        <Link to='/programms' className='btn-pri w-fit'>
                            start now
                        </Link>

                    </div>}
                    <LinksOfDetails />
                </div>
            </div>
            {/* <AboutComp more={false} readmore={true} /> */}
            <Footer />
        </div>
    )
}

export default About