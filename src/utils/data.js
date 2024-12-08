import image1 from '../static/12.png'
import image2 from '../static/37.png'
import image3 from '../static/35.png'
import image4 from '../static/9.png'
import image5 from '../static/4.png'
import image6 from '../static/14.png'
import image7 from '../static/44.png'
import image8 from '../static/3.png'
import image9 from '../static/11.png'
import image10 from '../static/41.png'
import image11 from '../static/17.png'
import image12 from '../static/18.png'
import image54 from '../static/54.png'
import image47 from '../static/47.png'
import image48 from '../static/48.png'
import image49 from '../static/49.png'
import image50 from '../static/50.png'
import image51 from '../static/51.png'
import image55 from '../static/55.png'
import image56 from '../static/56.png'
import {
    FaCheckCircle, FaCrown,
    FaEnvelope, FaFacebook, FaGithub,
    FaLinkedin, FaPhone,
    FaMedal, FaRocket, FaWhatsapp, FaYoutube,
    FaTelegram
}
    from 'react-icons/fa'
export const SliderSett = {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        500: {
            slidesPerView: 1
        },
        600: {
            slidesPerView: 1
        },
        750: {
            slidesPerView: 2
        },
        1100: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 3
        }
    }
}

export const links = [
    {
        id: 1,
        text: '/', to: '/'
    },
    {
        id: 2,
        text: 'about', to: 'about'
    },
    {
        id: 3,
        text: 'blogs', to: 'blogs'
    },
    {
        id: 4,
        text: 'programms',

        chilren: [
            {
                path: 'Tafseer', id: 1,
                text: ' Reading', to: 'Tafseer'
            },
            {
                path: 'Tajweed', id: 2,
                text: 'memorization', to: 'Tajweed',
            },
            {
                path: 'Revision', id: 3,
                text: ' Tajweed ', to: 'Revision'
            },
            {
                path: 'Islamic-Studies', id: 4,
                text: 'arabic course', to: 'Islamic-Studies'
            }
            ,
            {
                path: 'programms',
                text: 'all ', to: 'programms',
            }
        ]
    },
    {
        id: 7,
        text: 'pricing',
        to: 'pricing'
    },
    {
        id: 5,
        text: 'contact',
        to: 'contact'
    },
    {
        id: 6,
        text: 'teachers',
        to: 'teachers'
    },

]
export const linksarabic = [
    {
        id: 1,
        text: 'الصفحة الرئيسية', to: '/'
    },
    {
        id: 2,
        text: 'اقرا عنا', to: 'about'
    },
    {
        id: 3, to: 'blogs',
        text: 'المدونات'
    },
    {
        id: 4, to: 'programms',
        text: '  البرامج المتنوعة',
        chilren: [
            {
                path: 'Tafseer', to: 'Tafseer', id: 1,
                text: 'مهارات القراءة'
            },
            {
                path: 'Tajweed', to: 'Tajweed', id: 2,
                text: ' دراسات اسلامية'
            },
            {
                path: 'Revision', to: 'Revision', id: 3,
                text: 'حفظ القران '
            },
            {
                path: 'Islamic-Studies', to: 'Islamic-Studies', id: 4,
                text: 'تجويد  '
            }
            ,
            {
                path: 'programms', to: 'programms',
                text: 'كل البرامج'
            }
        ]
    },
    {
        id: 7,
        text: 'الباقات', to: 'pricing',
    },
    {
        id: 5, to: 'contact',
        text: 'تواصل معنا'
    },
    {
        id: 6, to: 'teachers',
        text: 'المعلمين'
    },

]
export const choose =
    [
        {
            image: image51,
            aos: "fade-up",
            id: 1,
            title: "Expert Male and Female Tutors",
            text: "Our tutors are graduates of Al-Azhar University and certified with Ijazah in the narration of Hafs and Shu’ba from Asem. We ensure high teaching standards by selecting the most qualified educators."
        },
        {
            image: image47,
            aos: "fade-up",
            id: 2,
            title: "Unique Curriculum",
            text: "Our curriculum is carefully designed to be adjustable for different learning needs, ensuring a personalized educational journey for every student."
        },
        {
            image: image48,
            aos: "fade-up",
            id: 3,
            title: "Wide Range of Experience",
            text: "All our tutors have at least 4 years of experience teaching Quran, Tajweed, and Islamic Studies, both online and offline."
        },
        {
            image: image56,
            aos: "fade-up",
            id: 4,
            title: "One-To-One Classes",
            text: "Enjoy private, one-on-one sessions tailored to your goals, maximizing your learning experience and individual attention."
        },
        {
            image: image55,
            aos: "fade-up",
            id: 5,
            title: "Free Trial",
            text: "Try a free class to discover the perfect course and teaching style that matches your needs."
        },
        {
            image: image49,
            aos: "fade-up",
            id: 6,
            title: "Affordable Fees",
            text: "Our services are accessible to everyone with competitive and affordable pricing plans."
        },
        {
            image: image50,
            aos: "fade-up",
            id: 7,
            title: "Progress Reports and Certificates",
            text: "Receive detailed progress reports and certificates of completion as you advance through each level."
        },
        {
            image: image54,
            aos: "fade-up",
            id: 8,
            title: "24/7 Support",
            text: "Our dedicated support team is available around the clock to assist you with any inquiries or needs."
        }
    ]

export const chooseArabic = [
    {
        image: image51,
        aos: "fade-up",
        id: 1,
        title: "معلمون ومعلمات خبراء من الناطقين باللغة العربية",
        text: "معلمونا خريجو جامعة الأزهر ومعتمدون بشهادة الإجازة في روايتي حفص وشعبة عن عاصم. نضمن لك أعلى معايير التدريس من خلال اختيار أفضل المعلمين."
    },
    {
        image: image47,
        aos: "fade-up",
        id: 2,
        title: "منهج فريد",
        text: "تم تصميم مناهجنا بعناية لتكون قابلة للتكيف مع احتياجات التعلم المختلفة، مما يضمن تجربة تعليمية مخصصة لكل طالب."
    },
    {
        image: image48,
        aos: "fade-up",
        id: 3,
        title: "خبرة واسعة",
        text: "جميع معلمينا يتمتعون بخبرة لا تقل عن 4 سنوات في تدريس القرآن الكريم، التجويد، والدراسات الإسلامية، سواء عبر الإنترنت أو على أرض الواقع."
    },
    {
        image: image56,
        aos: "fade-up",
        id: 4,
        title: "حصص فردية",
        text: "استمتع بجلسات فردية خاصة مصممة لتناسب أهدافك، مما يعزز من تجربتك التعليمية ويوفر لك الاهتمام الفردي."
    },
    {
        image: image55,
        aos: "fade-up",
        id: 5,
        title: "تجربة مجانية",
        text: "جرّب حصة مجانية لتتعرف على الدورة وأسلوب التدريس المناسب لك."
    },
    {
        image: image49,
        aos: "fade-up",
        id: 6,
        title: "رسوم ميسورة",
        text: "نقدم خدماتنا بأسعار تنافسية ومناسبة للجميع لجعل التعليم في متناول الجميع."
    },
    {
        image: image50,
        aos: "fade-up",
        id: 7,
        title: "تقارير تقدم وشهادات",
        text: "احصل على تقارير تفصيلية عن تقدمك وشهادات عند إكمال كل مستوى من مستويات الدراسة."
    },
    {
        image: image54,
        aos: "fade-up",
        id: 8,
        title: "دعم متواصل على مدار الساعة",
        text: "فريق الدعم المخصص لدينا متاح على مدار 24/7 للإجابة على جميع استفساراتك وتلبية احتياجاتك."
    }
]

export const teaches = [
    {
        id: 1,
        image: image1,
        name: 'mohammed elmorsy ',
        desc: 'Teachers Nameholds certifications in Quranic studies and Tajweed, ensuring that each student receives authentic and accurate teachings. With a commitment to preserving the sacred tradition of Quranic recitation,'
    },
    {
        id: 2,
        image: image4,
        name: 'mohammed kormod',
        desc: '[Teachers Name holds certifications in Quranic studies and Tajweed, ensuring that each student receives authentic and accurate teachings. With a commitment to preserving the sacred tradition of Quranic recitation,.'
    },
    {
        id: 3,
        image: image3,
        name: 'osama elsayed',
        desc: '[Teachers Name holds certifications in Quranic studies and Tajweed, ensuring that each student receives authentic and accurate teachings. With a commitment to preserving the sacred tradition of Quranic recitation, .'
    }
    ,
    {
        id: 4,
        image: image5,
        name: 'ahmed elgammal',
        desc: '[Teachers Name holds certifications in Quranic studies and Tajweed, ensuring that each student receives authentic and accurate teachings. With a commitment to preserving the sacred tradition of Quranic recitation, .'
    }
]
export const teachersArabic = [
    {
        id: 1,
        image: image1,
        name: 'محمد المرسي ',
        desc: 'يحمل المعلمون شهادات في الدراسات القرآنية والتجويد، مما يضمن حصول كل طالب على تعاليم أصيلة ودقيقة. مع الالتزام بالحفاظ على التقليد المقدس لتلاوة القرآن الكريم'
    },
    {
        id: 2,
        image: image4,
        name: 'محمد قرمد',
        desc: 'يحمل مدرسو اسم المعلم شهادات في الدراسات القرآنية والتجويد، مما يضمن حصول كل طالب على تعاليم أصيلة ودقيقة. مع الالتزام بالحفاظ على التقليد المقدس لتلاوة القرآن الكريم,.'
    },
    {
        id: 3,
        image: image3,
        name: 'اسامة السيد',
        desc: 'يحمل مدرسو اسم المعلم شهادات في الدراسات القرآنية والتجويد، مما يضمن حصول كل طالب على تعاليم أصيلة ودقيقة. مع الالتزام بالحفاظ على التقليد المقدس لتلاوة القرآن الكريم'
    }
    ,
    {
        id: 4,
        image: image5,
        name: 'محمد الجمال',
        desc: 'يحمل مدرسو اسم المعلم شهادات في الدراسات القرآنية والتجويد، مما يضمن حصول كل طالب على تعاليم أصيلة ودقيقة. مع الالتزام بالحفاظ على التقليد المقدس لتلاوة القرآن الكريم'
    }
]
export const testmonials = [
    {
        id: 1,
        name: 'Sarah Johnson',
        content: 'Dr. Elmorsy and his team are fantastic. They made me feel comfortable and provided excellent care throughout my treatment.',
    },
    {
        id: 2,
        name: 'David Brown',
        content: 'The staff at Mohammed Elmorsy Medical Services are always friendly and attentive. I feel well taken care of every time I visit.',
    },
    {
        id: 3,
        name: 'Emily Davis',
        content: 'I ve been a patient of Dr. Elmorsy for years. His expertise and compassion are unmatched. Highly recommend!'
    },
    {
        id: 4,
        name: ' Michael Wilson',
        content: 'The level of professionalism and care at Mohammed Elmorsy Medical Services is top-notch. I always feel like Im in good hands',
    },
    {
        id: 5,
        name: '  John Harris',
        content: 'Dr. Elmorsy is a fantastic doctor. He listens to his patients and provides the best possible care. Highly recommended!',
    },
    {
        id: 6,
        name: ' Karen White',
        content: 'Im grateful for the excellent care I received at Mohammed Elmorsy Medical Services. The team is outstanding',
    },
    {
        id: 7,
        name: 'Hamed Elzayat',
        content: 'Dr. Elmorsy is a fantastic doctor. He listens to his patients and provides the best possible care. Highly recommended!',
    },
    {
        id: 8,
        name: 'Mohammed Elsayed',
        content: 'Dr. Elmorsy is a fantastic doctor. He listens to his patients and provides the best possible care. Highly recommended!',
    }
]
export const testmonialsArabic = [
    {
        id: 1,
        name: 'Sarah Johnson',
        content: 'كان الأستاذ محمد المرسي ​​مدرسًا رائعًا للقرآن الكريم. أسلوبه في التدريس واضح ومتعاطف ومحفز. لقد تعلمت الكثير من دروسه، ليس فقط في قراءة القرآن الكريم ولكن أيضًا في فهم معانيه بعمق. صبره وتفانيه يجعلان التعلم ممتعًا وفعالًا!',
    },
    {
        id: 2,
        name: 'David Brown',
        content: 'لقد كان تعلم القرآن الكريم مع الشيخ محمد تجربة غيرت حياتي. فهو يخصص الوقت لشرح الدروس ويضمن تقدم كل طالب بالوتيرة التي تناسبه. إن شغفه بالتدريس ملهم حقًا.',
    },
    {
        id: 3,
        name: 'Emily Davis',
        content: 'لقد تحسنت مهاراتي في التجويد بشكل كبير تحت إشراف الأستاذ محمد. دروسه منظمة وجذابة ومليئة بالأمثلة العملية التي تساعدك على حفظ وفهم القرآن الكريم بشكل أفضل'
    },
    {
        id: 4,
        name: ' Michael Wilson',
        content: 'لقد كان تعلم القرآن الكريم مع الشيخ محمد تجربة غيرت حياتي. فهو يخصص الوقت لشرح الدروس ويضمن تقدم كل طالب بالوتيرة التي تناسبه. إن شغفه بالتدريس ملهم حقًا',
    },
    {
        id: 5,
        name: '  John Harris',
        content: 'إن الطريقة التي يعلم بها الأستاذ محمد القرآن الكريم ملهمة ومؤثرة في نفس الوقت. فهو يجعل الدروس تفاعلية وشخصية، مما يساعدني على التواصل بشكل عميق مع القرآن الكريم. إن شغفه بالتدريس معدٍ',
    },
    {
        id: 6,
        name: ' Karen White',
        content: 'لقد تحسنت مهاراتي في التجويد بشكل كبير تحت إشراف الأستاذ محمد. دروسه منظمة وجذابة ومليئة بالأمثلة العملية التي تساعدك على حفظ وفهم القرآن الكريم بشكل أفضل',
    },
    {
        id: 7,
        name: 'Hamed Elzayat',
        content: 'الشيخ محمد المرسي ​​هو مدرس قرآن رائع يجلب فهمًا عميقًا للقرآن في كل درس. حماسته ووضوحه يجعلان حتى الموضوعات المعقدة أسهل في الفهم. يوصى به بشدة لأي شخص يتطلع إلى تعميق دراساته القرآنية!',
    },
    {
        id: 8,
        name: 'Mohammed Elsayed',
        content: 'لقد تحسنت مهاراتي في التجويد بشكل كبير تحت إشراف الأستاذ محمد. دروسه منظمة وجذابة ومليئة بالأمثلة العملية التي تساعدك على حفظ وفهم القرآن الكريم بشكل أفضل',
    }
]
export const medias = [
    {
        id: 1, color: '#1e8af0', back: '#1e8af03a',
        title: 'Facebook',
        content: ' Mohammed Elmorsy',
        to: 'https://www.facebook.com/profile.php?id=100079764606912',
        icon: <FaFacebook />
    },
    {
        id: 2, color: 'green', back: '#0080002a',
        title: 'WhatsApp',
        content: '+20 012 1265 9525',
        to: 'https://wa.me/201212659525',
        icon: <FaWhatsapp />
    },
    {
        id: 3, color: '#035eb4', back: '#035eb431',
        title: 'Linkendin',
        content: 'linkedin/mohammed-elmorsy',
        to: 'https://www.linkedin.com/in/mohammed-elmorsy-018378258/',
        icon: <FaLinkedin />
    },
    {
        id: 4, color: '#fd7403', back: '#fd74034b',
        title: 'Githup',
        content: 'github/Mohammed-Elmorsy',
        to: 'https://github.com/Mohammed-Elsayed-Elmorsy',
        icon: <FaGithub />
    },
    {
        id: 5, color: 'black', back: '#0202022a',
        title: 'Email',
        content: 'sallealamohammed@gmail',
        to: 'mailto:sallealamohammed@gmail.com',
        icon: <FaEnvelope />
    },
    {
        id: 6, color: '#006797', back: '#035eb423',
        title: 'Telegram',
        content: 'Muhammad_550',
        icon: <FaTelegram />,
        to: 'https://t.me/Muhammad_550'
    },
    {
        id: 7, color: '#0490a8', back: '#048fa82c',
        title: 'Phone',
        content: '01554701926',
        icon: <FaPhone />
    },
    {
        id: 8, color: 'red', back: '#ff000027',
        title: 'Youtube',
        content: 'Youtube',
        icon: <FaYoutube />
    },
]
export const mediasarab = [
    {
        id: 1, color: '#1e8af0', back: '#1e8af03a',
        title: 'الفيسبوك',
        content: ' Mohammed-Elmorsy',
        to: 'https://www.facebook.com/profile.php?id=100079764606912',
        icon: <FaFacebook />
    },
    {
        id: 2, color: 'green', back: '#0080002a',
        title: 'واتساب',
        content: '+20 012 1265 9525',
        to: 'https://wa.me/201212659525',
        icon: <FaWhatsapp />
    },
    {
        id: 3, color: '#035eb4', back: '#035eb431',
        title: 'لينكدان',
        content: 'linkedin/mohammed-elmorsy',
        to: 'https://www.linkedin.com/in/mohammed-elmorsy-018378258/',
        icon: <FaLinkedin />
    },
    {
        id: 4, color: '#fd7403', back: '#ff44006b',
        title: 'حيت هاب',
        content: 'github/Mohammed-Elmorsy',
        to: 'https://github.com/Mohammed-Elsayed-Elmorsy',
        icon: <FaGithub />
    },
    {
        id: 5, color: 'black', back: '#0202022a',
        title: 'الجميل',
        content: 'sallealamohammed@gmail',
        to: 'mailto:sallealamohammed@gmail.com',
        icon: <FaEnvelope />
    },
    {
        id: 6, color: '#006797', back: '#035eb423',
        title: 'التلجرام',
        content: 'Muhammad_550',
        icon: <FaTelegram />,
        to: 'https://t.me/Muhammad_550'
    },
    {
        id: 7, color: '#0490a8', back: '#048fa82c',
        title: 'التلفون',
        content: '01554701926',
        icon: <FaPhone />
    },
    {
        id: 8, color: 'red', back: '#ff000027',
        title: 'اليوتيوب',
        content: 'Youtube',
        icon: <FaYoutube />
    },
]

export const blogs = [
    {
        id: 1,
        image: image1,
        title: 'The Virtue of the Quran ',
        desc: 'The Quran is the word of Allah, revealed to the heart of His Prophet Muhammad (PBUH) by the trustworthy Gabriel. It is revered for its recitation, miraculous in its wording and meaning, starting with Surah Al-Fatiha and ending with Surah An-Nas.It is the book that no falsehood comes to from before or behind it, a revelation from the Most Wise, the Most Praiseworthy, and the source of guidance and light for the believers .'
    },
    {
        id: 2,
        image: image2,
        title: 'Definition of the Quran',
        desc: 'In the Arabic language, the word "Quran" is derived from "Qara’a," which means to gather or combine, as Allah says: "Indeed, upon Us is its collection and its recitation." (Al-Qiyama: 17), referring to combining the letters and words together.In its technical sense, the Quran is the word of Allah revealed to His Messenger Muhammad (PBUH), which is recited and preserved in its original form, passed down to us through authentic transmission, and challenged with producing even the shortest chapter from it, all written in the Mushafs.'
    },
    {
        id: 3,
        image: image3,
        title: 'The Status of the Quran in Islam',
        desc: '•	The Eternal Miracle:The Quran is the enduring miracle of Islam, which Allah challenged both humans and jinn with. Allah says: "Bring forth a surah like it." (Yunus: 38).the Quran is the revelation of the Lord of the worlds'
    },
    {
        id: 4,
        image: image4,
        title: 'Quran The Key to Happiness & Success',
        desc: 'The Quran is not just a book to be recited; it is a way of life to be followed, and it is the foundation of happiness in both this world and the Hereafter. Allah says: "Whoever does righteous deeds, whether male or female, while being a believer, We will surely give him a good life." (An-Nahl: 97).'
    },
    {
        id: 5,
        image: image5,
        title: 'A Call to Hold Fast to the Quran',
        desc: 'let the Quran be your companion in life .Implement its rulings, for it is the straight path of Allah Allah says: "Indeed, this Quran guides to that which is most suitable." (Al-Isra: 9)'
    },
    {
        id: 6,
        image: image6,
        title: 'Make the Quran the light of your life',
        desc: 'The Quran is the great blessing that Allah has given us, and it is the path to happiness and success in this world and the Hereafter. Learning it and teaching it is a great honor, and living by it brings light and blessings into your life.'
    }
]
export const blogsArabic = [
    {
        id: 1,
        image: image1,
        title: 'أهمية وفضل القرآن الكريم',
        desc: `
        :
القرآن الكريم هو النور الذي أخرج البشرية من ظلمات الجهل إلى نور الإيمان. قال تعالى: "يَهْدِي بِهِ اللَّهُ مَنِ اتَّبَعَ رِضْوَانَهُ سُبُلَ السَّلَامِ" (المائدة: 16).
2.	الشفاء والرحمة:
وهو سبيلنا إلى النجاة والفلاح. فلنحرص على تعلمه وتعليمه
هو شفاء للأرواح والقلوب من الشبهات والشهوات.
        `
    },
    {
        id: 2,
        image: image2,
        title: 'القرآن الكريم: شرف وكرامة',
        desc: `
•	الشرف كل الشرف:
القرآن الكريم هو مصدر التشريف لمن حمله في قلبه، أو تعلمه وعلَّمه. قال النبي صلى الله عليه وسلم: "خيركم من تعلم القرآن وعلَّمه" (رواه البخاري).
يتشرف كل من سمعه، أو ساهم في تعليمه ونشره، سواء بالجهد أو الوقت أو المال، فيناله نصيب من نور القرآن وبركاته
`
    },
    {
        id: 3,
        image: image5,
        title: 'تعريف القرآن الكريم',
        desc: `لغةً، مشتق من "قرأ" بمعنى جمع وضم، كما في قوله تعالى: "إِنَّ عَلَيْنَا جَمْعَهُ وَقُرْآنَهُ" (القيامة: 17)، أي ضم الحروف والكلمات بعضها إلى بعض.
اصطلاحًا، هو كلام الله المنزل على رسوله محمد صلى الله عليه وسلم، المتعبد بتلاوته، المنقول إلينا بالتواتر، والمتحدى بأقصر سورة منه، والمحفوظ في المصاحف.

     `
    },
    {
        id: 4,
        image: image3,
        title: 'مكانة القرآن الكريم في الإسلام',
        desc: `
•	حفظ اللغة العربية:
القرآن الكريم هو المرجع الأول للغة العربية، حفظها من الاندثار والتحريف عبر العصور.
•	دستور للأمة:
القرآن الكريم هو النعمة العظمى التي منحنا الله إياها
هو صراط الله المستقيم ودستوره القويم، ينظم حياة الفرد والمجتمع ويحقق العدل والإحسان.
•

`
    },
    {
        id: 5,
        image: image4,
        title: 'العمل بالقرآن: مفتاح السعادة والفلاح',
        desc: `القرآن ليس مجرد كتاب يُتلى، بل منهج حياة يُعمل به، وهو أساس السعادة في الدنيا والآخرة. قال تعالى: "مَنْ عَمِلَ صَالِحًا مِّن ذَكَرٍ أَوْ أُنثَىٰ وَهُوَ مُؤْمِنٌ فَلَنُحْيِيَنَّهُ حَيَاةً طَيِّبَةً" (النحل: 97).
 اللهم اجعل القرآن العظيم ربيع قلوبنا، ونور صدورنا، وجلاء أحزاننا، وذهاب همومنا. آمين
        `
    },
    {
        id: 6,
        image: image6,
        title: 'دعوة إلى التمسك بالقرآن',
        desc: ` 
أيها المسلم، اجعل القرآن الكريم رفيقك في حياتك:
•	احرص على تلاوته يوميًا وتدبر آياته.
•	احفظ ما استطعت منه، فالحفظ نور وبركة.
•	اعمل بما فيه من أحكام، فهو صراط الله المستقيم.
هو طريق السعادة والفلاح في الدنيا والآخرة
قال تعالى: "إِنَّ هَٰذَا الْقُرْآنَ يَهْدِي لِلَّتِي هِيَ أَقْوَمُ" (الإسراء: 9).
         `
    }
]
export const progs = [
    {
        id: 1,
        image: image7,
        title: 'Reading Skills (Noor Al-Bayan and Al-Nouraniya) ',
        desc: 'Unlock the foundation of Arabic literacy with our Reading Skills Program',
        points: [
            {
                title: 'Who it’s for',
                info: 'Perfect for beginners of all ages or those aiming to improve their basic reading skills.'
            },
            {
                title: 'What we offer',
                info: ': Structured lessons using the Noor Al-Bayan and Al-Nouraniya methods, with fun, engaging exercises'
            },
            {
                title: 'What your child will gain',
                info: ': A strong foundation in Arabic phonetics, letters, and fluency in reading Arabic texts, alongside with writing skills'
            },
        ]
    },
    {
        id: 2,
        image: image12,
        title: 'Qur’an Memorization Course',
        desc: 'Help your child embark on a blessed journey of memorizing Allah’s words',
        points: [
            {
                title: 'What your child will gain',
                info: 'Memorization of the Qur’an, whether a portion or its entirety, with focus on consistent retention'
            },
            {
                title: 'What we offer',
                info: ': Individualized plans, daily revision schedules, and expert guidance to inspire confidence and dedication'
            }
        ]
    },
    {
        id: 3,
        image: image9,
        title: 'Qur’an with Tajweed Course',
        desc: 'Beautify your child’s recitation and teach them the art of reading the Qur’an as it was revealed.',
        points: [
            {
                title: 'What your child will gain',
                info: ': Mastery of Tajweed rules, enabling them to recite the Qur’an fluently and melodiously with confidence'
            },
            {
                title: 'What we offer',
                info: 'Step-by-step lessons covering pronunciation, articulation, and recitation practices, guided by skilled tutors graduated from Al-Azhar and certified with ijazah'
            }
        ]
        ,
    },
    {
        id: 4,
        image: image10,
        title: 'Modern Standard Arabic Course',
        desc: 'Discover the beauty of the Arabic language, from its fundamentals to fluency.',
        points: [
            {
                title: 'Who it’s for',
                info: 'Perfect for learners at any level, whether they are complete beginners or intermediate students aiming to refine their skills'
            },
            {
                title: 'What we offer',
                info: ': Interactive lessons covering listening, speaking, reading, and writing, using trusted curricula like “Arabic Between Your Hands” and “Madinah Book”.'
            }
        ]
        ,
    },
    {
        id: 5,
        image: image11,
        title: 'Arabic Through the Qur’an Course',
        desc: 'Dive deep into the Qur’an to master Arabic while enriching your spiritual journey.',
        points: [
            {
                title: 'Who it’s for',
                info: 'Perfect for learners inspired to learn Arabic through the words of Allah'
            },
            {
                title: 'What we offer',
                info: 'Lessons focus on Qur’anic vocabulary, grammar, and sentence structure, with practical examples from the Qur’an itself'
            }
        ]
        ,
    },
    {
        id: 6,
        image: image8,
        title: 'Islamic Studies for Children',
        desc: 'From understanding the Five Pillars to practicing Islam’s essentials, this course nurtures your child’s Islamic identity in a fun and engaging way.'
        ,
        points: [
            {
                title: 'What your child will gain',
                info: 'A strong foundation in Fiqh, Tafseer, Hadith, Du’aa, and Aqeedah all of what they can’t be ignorant of'
            },
            {
                title: 'What we offer',
                info: 'Interactive lessons with special activities and occasional free sessions for entertainment and Islamic learning'
            }
        ]
        ,
    }
]
export const progsArabic =
    [
        {
            id: 1,
            image: image7,
            title: "مهارات القراءة (نور البيان والنورانية)",
            desc: "افتح أبواب إتقان القراءة باللغة العربية مع برنامج مهارات القراءة.",
            points: [
                {
                    title: "مناسب لمن؟",
                    info: "مثالي للمبتدئين من جميع الأعمار أو لمن يسعى لتحسين القراءة الأساسية."
                },
                {
                    title: "ما الذي نقدمه؟",
                    info: "دروس منهجية باستخدام طرق نور البيان والنورانية مع تمارين ممتعة وجذابة."
                },
                {
                    title: "ماذا سيكتسب طفلك؟",
                    info: "أساس قوي في الأصوات والحروف العربية وطلاقة القراءة إلى جانب تعلم مهارات الكتابة."
                }
            ]
        },
        {
            id: 3,
            image: image9,
            title: "برنامج حفظ القرآن الكريم",
            desc: "ساعد طفلك على بدء رحلة ممتعة في حفظ كلمات الله.",
            points: [
                {
                    title: "ماذا سيكتسب طفلك؟",
                    info: "حفظ جزء من القرآن أو كامله مع التركيز على التكرار والاستمرارية."
                },
                {
                    title: "ما الذي نقدمه؟",
                    info: "خطط فردية وجداول مراجعة يومية وإرشادات من معلمين خبراء متميزين."
                }
            ]
        },
        {
            id: 4,
            image: image10,
            title: "برنامج القرآن مع التجويد",
            desc: "اجعل تلاوة طفلك أجمل وعلّمه قراءة القرآن كما أُنزل على النبي صلى الله عليه وسلم.",
            points: [
                {
                    title: "ماذا سيكتسب طفلك؟",
                    info: "إتقان قواعد التجويد والقدرة على التلاوة بثقة وجمال."
                },
                {
                    title: "ما الذي نقدمه؟",
                    info: "دروس خطوة بخطوة تشمل قواعد النطق والتلاوة وأحكام التجويد بإشراف معلمين متخصصين مجازين برواية حفص عن عاصم."
                }
            ]
        },
        {
            id: 5,
            image: image10,
            title: "برنامج اللغة العربية الفصحى",
            desc: "اكتشف جمال اللغة العربية لغة القرآن ولغة أهل الجنة من أساسيات اللغة حتى الطلاقة فيها.",
            points: [
                {
                    title: "مناسب لمن؟",
                    info: "يناسب جميع المستويات، سواء المبتدئين أو المتوسطين."
                },
                {
                    title: "ما الذي نقدمه؟",
                    info: "دروس تغطي مهارات اللغة المختلفة الاستماع، التحدث، القراءة، والكتابة باستخدام مناهج معتبرة وموثوقة مثل كتاب العربية بين يديك وكتاب المدينة."
                }
            ]
        },
        {
            id: 6,
            image: image11,
            title: "برنامج تعلم اللغة العربية من خلال القرآن",
            desc: "اغمر نفسك في القرآن لتتقن اللغة العربية بينما تعمّق رحلتك لتحصل على فهم أفضل وأجمل للمعاني في كتاب الله.",
            points: [
                {
                    title: "مناسب لمن؟",
                    info: "لمن يرغب في تعلم اللغة من خلال كلمات الله."
                },
                {
                    title: "ما الذي نقدمه؟",
                    info: "دروس تركز على مفردات القرآن وقواعد اللغة مع أمثلة عملية من النصوص القرآنية."
                }
            ]
        },
        {
            id: 7,
            image: image8,
            title: "برنامج الدراسات الإسلامية للأطفال",
            desc: "من فهم أركان الإسلام إلى تطبيقها بسهولة، هذا البرنامج يغرس هوية إسلامية قوية لدى الأطفال.",
            points: [
                {
                    title: "ماذا سيكتسب طفلك؟",
                    info: "أساسًا متينًا في الفقه، التفسير، الحديث، الدعاء، والعقيدة وكل ما لا يسع الطفل المسلم جهله."
                },
                {
                    title: "ما الذي نقدمه؟",
                    info: "دروس تفاعلية مع أنشطة خاصة وجلسات مجانية أحيانًا للتعلم والمرح."
                }
            ]
        }
    ]
export const pricing = [
    {
        id: 1,
        image: image1,
        plan: '30 min class ',
        classes: [
            {
                numberperweek: '2 classes/week',
                cost: '40GBP/month',
                numberpermonth: '8 classes/month',
                costforclass: '5£/class',
            },
            {
                numberperweek: '3 classes/week',
                cost: '51GBP/month',
                numberpermonth: '12 classes/month',
                costforclass: '4.25£/class',
            },
            {
                numberperweek: '4 classes/week',
                cost: '64GBP/month',
                numberpermonth: '16 classes/month',
                costforclass: '4£/class',
            },
            {
                numberperweek: '5 classes/week',
                cost: '75GBP/month',
                numberpermonth: '20 classes/month',
                costforclass: '3.75£/class',
            },
        ],
    },
    {
        id: 2,
        image: image1,
        plan: '45 min class ',
        classes: [
            {
                numberperweek: '1 class/week',
                cost: '21GBP/month',
                numberpermonth: '4 classes/month',
                costforclass: '7£/class',
            },
            {
                numberperweek: '2 classes/week',
                cost: '52GBP/month',
                numberpermonth: '8 classes/month',
                costforclass: '6.50£/class',
            },
            {
                numberperweek: '3 classes/week',
                cost: '74GBP/month',
                numberpermonth: '12 classes/month',
                costforclass: '6.20£/class',
            },
            {
                numberperweek: '4 classes/week',
                cost: '92GBP/month',
                numberpermonth: '16 classes/month',
                costforclass: '5.75£/class',
            },
        ],
    },
    {
        id: 3,
        image: image1,
        plan: '60 min class ',
        classes: [
            {
                numberperweek: '1 class/week',
                cost: '40GBP/month',
                numberpermonth: '4 classes/month',
                costforclass: '10£/class',
            },
            {
                numberperweek: '2 classes/week',
                cost: '72GBP/month',
                numberpermonth: '8 classes/month',
                costforclass: '9£/class',
            },
            {
                numberperweek: '3 classes/week',
                cost: '96GBP/month',
                numberpermonth: '12 classes/month',
                costforclass: '8£/class',
            },
            {
                numberperweek: '4 classes/week',
                cost: '112GBP/month',
                numberpermonth: '16 classes/month',
                costforclass: '7£/class',
            },
        ],
    },
]

export const pricingArabic = [
    {
        id: 1,
        image: image1,
        plan: 'حصة لمدة 30 دقيقة',
        classes: [
            {
                numberperweek: 'حصتان/الأسبوع',
                cost: '40 جنيه إسترليني/الشهر',
                numberpermonth: '8 حصص/الشهر',
                costforclass: '5£/الحصة',
            },
            {
                numberperweek: '3 حصص/الأسبوع',
                cost: '51 جنيه إسترليني/الشهر',
                numberpermonth: '12 حصة/الشهر',
                costforclass: '4.25£/الحصة',
            },
            {
                numberperweek: '4 حصص/الأسبوع',
                cost: '64 جنيه إسترليني/الشهر',
                numberpermonth: '16 حصة/الشهر',
                costforclass: '4£/الحصة',
            },
            {
                numberperweek: '5 حصص/الأسبوع',
                cost: '75 جنيه إسترليني/الشهر',
                numberpermonth: '20 حصة/الشهر',
                costforclass: '3.75£/الحصة',
            },
        ],
    },
    {
        id: 2,
        image: image1,
        plan: 'حصة لمدة 45 دقيقة',
        classes: [
            {
                numberperweek: 'حصة واحدة/الأسبوع',
                cost: '21 جنيه إسترليني/الشهر',
                numberpermonth: '4 حصص/الشهر',
                costforclass: '7£/الحصة',
            },
            {
                numberperweek: 'حصتان/الأسبوع',
                cost: '52 جنيه إسترليني/الشهر',
                numberpermonth: '8 حصص/الشهر',
                costforclass: '6.50£/الحصة',
            },
            {
                numberperweek: '3 حصص/الأسبوع',
                cost: '74 جنيه إسترليني/الشهر',
                numberpermonth: '12 حصة/الشهر',
                costforclass: '6.20£/الحصة',
            },
            {
                numberperweek: '4 حصص/الأسبوع',
                cost: '92 جنيه إسترليني/الشهر',
                numberpermonth: '16 حصة/الشهر',
                costforclass: '5.75£/الحصة',
            },
        ],
    },
    {
        id: 3,
        image: image1,
        plan: 'حصة لمدة 60 دقيقة',
        classes: [
            {
                numberperweek: 'حصة واحدة/الأسبوع',
                cost: '40 جنيه إسترليني/الشهر',
                numberpermonth: '4 حصص/الشهر',
                costforclass: '10£/الحصة',
            },
            {
                numberperweek: 'حصتان/الأسبوع',
                cost: '72 جنيه إسترليني/الشهر',
                numberpermonth: '8 حصص/الشهر',
                costforclass: '9£/الحصة',
            },
            {
                numberperweek: '3 حصص/الأسبوع',
                cost: '96 جنيه إسترليني/الشهر',
                numberpermonth: '12 حصة/الشهر',
                costforclass: '8£/الحصة',
            },
            {
                numberperweek: '4 حصص/الأسبوع',
                cost: '112 جنيه إسترليني/الشهر',
                numberpermonth: '16 حصة/الشهر',
                costforclass: '7£/الحصة',
            },
        ],
    },
];
