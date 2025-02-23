
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
import { Helmet } from 'react-helmet-async';
import AboutImages from '../components/AboutImages';
const About = () => {
    const [loading, setLoading] = useState(true)
    const lang = useSelector(state => state.lang.arabic)
    const { dark } = useSelector(state => state.mode)
    const mode = localStorage.getItem('dark') ? JSON.parse(localStorage.getItem('dark')) : dark
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
            <Helmet>
                <title>Learn Quran Online | About Us - Shatha Alquran</title>
                <meta name="description"
                    content="Learn about Shatha Alquran Academy, your trusted platform for Quran learning, 
                Arabic studies, and Islamic education with expert teachers worldwide." />
                <meta name="keywords"
                    content="Quran learning, 
                    online Quran classes, Islamic studies, Arabic language, Shatha Alquran" />
            </Helmet>
            <div className={`${mode ? ' bg-dark' : 'bg-light'}`}>
                <div className='py-[26px] container mx-auto px-7 md:px-[60px] lg:px-[80px] xl:px-[150px]'>
                    {state &&
                        <div className=' flex flex-col gap-5 '>
                            <h2 className=' flex items-center gap-2 font-bold text-[25px]' >
                                {state ? 'من نحن ' : 'who we are'}
                                <FaCheck />
                            </h2>
                            <p className={`
                                ${mode ? 'text-textDark bg-lighter shadow shadow-black' : 'bg-white shadow shadow-slate-400 text-black'}   p-2`} data-aos={'fade-up'}>مرحبًا بكم في أكاديمية شذا القرآن طريقكم الموثوق لتعلم القرآن الكريم، واللغة العربية،
                                والتفسير، والدراسات الإسلامية. نفخر في بتقديم خدماتنا التعليمية لطلابنا في جميع أنحاء العالم
                                ، بما في ذلك الولايات المتحدة الأمريكية، المملكة المتحدة، كندا، أستراليا،
                                الإمارات العربية المتحدة، الهند، المملكة العربية السعودية، وغيرهم.
                            </p>
                            <p className={`
                                ${mode ? 'text-textDark bg-lighter shadow shadow-black' : 'bg-white shadow shadow-slate-400 text-black'}  mt-[-20px]  p-2`} data-aos={'fade-left'}>يضم فريقنا معلمين ومعلمات مؤهلين وذوي خبرة عالية، خريجو جامعة الأزهر الشريف،
                                حاصلون على الإجازة في التلاوة والاقراء وحفظ القرآن الكريم. معلمون كرّسوا أنفسهم لخدمة القرآن الكريم،
                                فهو نورٌ يملأ الصدور ويضيء الأنفاس، يهدي به الله كل من يسعى لعلمه ، كباراً وصغاراً رجالاَ ونساءاً.
                                في أكادميتنا نبذل كل جهد ممكن، ونستخدم كل وسيلة متاحة، لنقل رسالة القرآن وتعاليمه،
                                غير مبالين بالتعب أو الجهد، نهب وقتنا وطاقتنا لإيصال آيات الله إلى القلوب.
                            </p>
                            <AboutImages
                                mode={mode}
                                image={image}
                                image2={image2}
                                image3={image3}
                                image4={image4}
                            />
                            <p className={`
                                ${mode ? 'text-textDark bg-lighter shadow shadow-black' : 'bg-white shadow shadow-slate-400 text-black'}   p-2`} data-aos={'fade-right'}>
                                . جعلنا غايتنا الأولى تعليم القرآن الكريم،
                                فهو أسمى أهدافنا وأغلى أمانينا، ويحتل مركز اهتمامنا وأولى حاجاتنا. نحمل على عاتقنا مسؤولية عظيمة،
                                وهي أن يكون طلابنا، بإذن الله، صالحين ومصلحين، راشدين يسعدون بالقرآن في الدنيا وينعمون ببركته في الآخرة.
                                وندعو الله أن يبلغ صوتنا آفاق الأرض، ترتيلًا وتعليمًا وهداية وإصلاحًا، حاملين في قلوبنا عزيمة لا تلين،
                                طمعًا في الأجر من الله والثواب العظيم
                                ملتزمون بتغذية عقول وقلوب طلابنا على حد سواء،
                                باستخدام أساليب تدريس مبتكرة ومبدعة، مما يجعل التعلم ممتعًا، سهل الوصول،
                                وفعّالًا لجميع الأعمار والمستويات
                            </p>
                            <p className={`
                                ${mode ? 'text-textDark bg-lighter shadow shadow-black' : 'bg-white shadow shadow-slate-400 text-black'}  mt-[-20px] p-2`} data-aos={'fade-up'}>
                                ملتزمون بتغذية عقول وقلوب طلابنا على حد سواء، باستخدام
                                أساليب تدريس مبتكرة ومبدعة، مما يجعل التعلم ممتعًا،
                                سهل الوصول، وفعّالًا لجميع الأعمار والمستويات
                            </p>
                            <p className={`
                                ${mode ? 'text-textDark bg-lighter shadow shadow-black' : 'bg-white shadow shadow-slate-400 text-black'}  mt-[-20px] p-2`} data-aos={'fade-up'}>
                                في أكاديمية شذا القرآن نؤمن أن رسالتنا تتجاوز مجرد التعليم. نحن نسعى إلى تعزيز الأسر والمجتمعات
                                المسلمة بنقل المعرفة الإسلامية والقيم والأخلاق. من خلال برامجنا، نطمح إلى خلق التغيير
                                الإيجابي، وتعزيز الوحدة بين المسلمين، محاولين أن نكون عوناً
                                لهم ليكونوا في طريقهم إلى الله.
                            </p>
                            <p data-aos={'fade-up'} className={`${mode ? 'text-textDark' : ' text-black'} flex justify-between items-center  font-bold text-[20px]`}>
                                سارعو بالانضمام لأكادميتنا، واخطوا الخطوة الأولى لعلاقة أفضل وأقرب لكتاب الله.
                            </p>
                            <Link to='/programms' className='btn-pri md:w-fit w-full text-center'>
                                ابدا  معنا الان
                            </Link>
                        </div>}
                    {!state && <div className=' flex flex-col gap-5'>
                        <h2 className='flex items-center gap-2 font-bold text-[30px]' >
                            {!state ? ' who we are ' : 'من نحن '}
                            <FaCheck />
                        </h2>
                        <p className={`
                            ${mode ? 'text-textDark bg-lighter shadow shadow-black' : 'bg-white shadow shadow-slate-400 text-black'}  p-2`} data-aos={'fade-up'}>
                            Welcome to <span className=' font-bold text-[18px]'>Shatha Alqur’an</span> Academy,
                            your trusted path to learning the Qur’an,
                            Arabic, Tafseer, and Islamic studies. We proudly serve students across the globe,
                            including the USA, UK, Canada, Australia, UAE,
                            India, Saudi Arabia, and beyond
                        </p>
                        <p className={`
                        ${mode ? 'text-textDark bg-lighter shadow shadow-black' : 'bg-white shadow shadow-slate-400 text-black'}  mt-[-20px] p-2`} data-aos={'fade-up'}
                        >
                            Our team of highly qualified and experienced teachers,
                            all graduates of the Al-Azhar University and qualified with
                            ijazah and Hifz, is committed to nurturing both the minds and
                            hearts of our students. Using creative and innovative teaching methods,
                            we make learning engaging, accessible,
                            and effective for students of all ages and proficiency levels
                        </p>
                        <AboutImages
                            mode={mode}
                            image={image}
                            image2={image2}
                            image3={image3}
                            image4={image4}
                        />
                        <p className={`${mode ? 'text-textDark bg-lighter shadow shadow-black' : 'bg-white shadow shadow-slate-400 text-black '} p-2 `} data-aos={'fade-up'}>
                            At <span className=' font-bold text-[18px]'>Shatha Alqur’an Academy</span>, we believe that our mission goes beyond education.
                            We aim to strengthen Muslim families and communities by imparting Islamic knowledge, values,
                            and character.
                            Through our programs, we aspire to inspire positive change, foster unity,
                            and help you and your family become the best versions of yourselves as Muslims.
                        </p>
                        <p data-aos={'fade-up'} className={`${mode ? 'text-textDark' : ' text-black'} font-bold`}>

                            Join us on this transformative journey and take
                            the first step toward a deeper understanding of your faith and
                            a brighter future for your family.
                            Become one of the people of the Quran… they are the people of Allah and His chosen ones

                        </p>
                        <Link to='/programms' className='btn-pri text-center md:w-fit w-full'>
                            start now
                        </Link>

                    </div>}
                    <div className=' pt-[30px]'>
                        <LinksOfDetails />
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default About