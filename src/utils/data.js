import image1 from '../static/read7.jpg'
import image2 from '../static/seven.png'
import image3 from '../static/read1.jpg'
import image4 from '../static/interactive.png'
import image5 from '../static/six (1).png'
import image6 from '../static/read1.jpg'
import image7 from '../static/quran1.jpg'
import image8 from '../static/read11.jpg'
import image9 from '../static/read7.jpg'
import image10 from '../static/read9.jpg'
import image11 from '../static/quran111.jpg'
import image12 from '../static/seven.png'
import image13 from '../static/read11.jpg'
import {
    FaCheckCircle, FaCrown,
    FaEnvelope, FaFacebook, FaGithub,
    FaGlobe, FaLinkedin, FaPhone,
    FaMedal, FaRocket, FaWhatsapp, FaYoutube,
    FaTelegram
}
    from 'react-icons/fa'

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
                text: 'Quran Tafseer', to: 'Tafseer'
            },
            {
                path: 'Tajweed', id: 2,
                text: 'Quran(Tajweed)', to: 'Tajweed',
            },
            {
                path: 'Revision', id: 3,
                text: 'Quran Revision ', to: 'Revision'
            },
            {
                path: 'Islamic-Studies', id: 4,
                text: 'Islamic Studies', to: 'Islamic-Studies'
            }
            ,
            {
                path: 'programms',
                text: 'all programms', to: 'programms',
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
                text: 'تفسير القران'
            },
            {
                path: 'Tajweed', to: 'Tajweed', id: 2,
                text: 'تجويد القران'
            },
            {
                path: 'Revision', to: 'Revision', id: 3,
                text: 'حفظ القران '
            },
            {
                path: 'Islamic-Studies', to: 'Islamic-Studies', id: 4,
                text: 'دراسات اسلامية'
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
export const choose = [
    {
        image: image1,
        aos: 'fade-up',
        id: 1,
        title: 'Experienced Quran Teacher',
        text: 'With years of experience teaching the Quran, I provide structured and personalized lessons designed to suit your learning pace and style. Whether youre a beginner or looking to improve your recitation, I tailor the content to meet your specific needs'
    },
    {
        id: 6,
        image: image2, aos: 'fade-up',
        title: 'Focus on Tajweed and Recitation',
        text: 'Every student is unique, and so are their learning goals. I create customized lesson plans based on your current level, whether you are learning to recite, memorize, or study the Quran in depth.'
    },
    {
        id: 2, image: image3, aos: 'fade-up',
        title: 'Flexible and Convenient Learning',
        text: 'We offer flexible online classes that fit into your schedule. Whether youre a busy professional, a parent, or a student, you can learn the Quran from the comfort of your home at a time that works best for you.'
    },
    {
        id: 3, image: image4, aos: 'fade-up',
        title: 'Interactive Teaching Methods',
        text: 'My teaching style is interactive, making lessons engaging and motivating. I use a variety of resources to keep the learning experience enjoyable, from recitation exercises to practical applications of Quranic teachings.'
    },
    {
        id: 4, image: image5, aos: 'fade-up',
        title: 'Personalized Learning Plans',
        text: 'Every student is unique, and so are their learning goals. I create customized lesson plans based on your current level, whether you are learning to recite, memorize, or study the Quran in depth.'
    },
    {
        id: 5, image: image6, aos: 'fade-up',
        title: 'Supportive Learning Environment',
        text: 'I believe that learning the Quran should be a rewarding and spiritual journey. I provide a supportive and encouraging environment where students feel comfortable asking questions and progressing at their own pace.'
    },
]
export const chooseArabic = [
    {
        image: image1,
        aos: 'fade-up',
        id: 1,
        title: 'معلمين ذو خبرة عالة',
        text: 'بفضل خبرتي التي اكتسبتها على مدار سنوات في تدريس القرآن الكريم، أقدم دروسًا منظمة ومخصصة مصممة لتناسب وتيرة التعلم وأسلوبك. سواء كنت مبتدئًا أو تتطلع إلى تحسين تلاوتك، فأنا أقوم بتخصيص المحتوى لتلبية احتياجاتك المحددة'
    },
    {
        id: 6,
        image: image2, aos: 'fade-up',
        title: 'التركيز على التجويد والقراءة',
        text: 'كل طالب فريد من نوعه، وكذلك أهدافه التعليمية. أقوم بإنشاء خطط دراسية مخصصة بناءً على مستواك الحالي، سواء كنت تتعلم التلاوة أو الحفظ أو دراسة القرآن الكريم بعمق'
    },
    {
        id: 2, image: image3, aos: 'fade-up',
        title: 'اسلوب مرن ومقنع ف التعليم',
        text: 'نحن نقدم دروسًا مرنة عبر الإنترنت تناسب جدولك الزمني. سواء كنت محترفًا مشغولًا أو والدًا أو طالبًا، يمكنك تعلم القرآن الكريم من راحة منزلك في الوقت الذي يناسبك.'
    },
    {
        id: 3, image: image4, aos: 'fade-up',
        title: 'طرق تفاعلية فى التدريس',
        text: 'أسلوبي في التدريس تفاعلي، مما يجعل الدروس شيقة ومحفزة. أستخدم مجموعة متنوعة من الموارد لإبقاء تجربة التعلم ممتعة، من تمارين التلاوة إلى التطبيقات العملية للتعاليم القرآنية.'
    },
    {
        id: 4, image: image5, aos: 'fade-up',
        title: 'خطط متخصصة ف التعليم',
        text: 'كل طالب فريد من نوعه، وكذلك أهدافه التعليمية. أقوم بإنشاء خطط دراسية مخصصة بناءً على مستواك الحالي، سواء كنت تتعلم التلاوة أو الحفظ أو دراسة القرآن الكريم بعمق.'
    },
    {
        id: 5, image: image6, aos: 'fade-up',
        title: 'بيئة تعليمية مناسبة',
        text: 'أعتقد أن تعلم القرآن الكريم يجب أن يكون رحلة مجزية وروحية. فأنا أقدم بيئة داعمة ومشجعة حيث يشعر الطلاب بالراحة في طرح الأسئلة والتقدم بالسرعة التي تناسبهم.'
    },
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
        content: ' Facebook profile',
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
        content: 'sallealamohammed@gmail.com',
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
        content: ' Facebook profile',
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
        content: 'sallealamohammed@gmail.com',
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
        title: 'Tips for Effective Quran Memorization (Hifz) ',
        desc: 'Share practical tips for students on how to memorize the Quran effectively. Discuss techniques like repetition, setting a schedule, using visual and audio aids, and keeping consistent.'
    },
    {
        id: 2,
        image: image4,
        title: 'The Importance of Tajweed in Quran Recitation',
        desc: 'Write about the significance of Tajweed (the rules of proper pronunciation in Quranic recitation). Explain why it’s essential for Muslims to recite the Quran correctly and provide some simple rules to follow.'
    },
    {
        id: 3,
        image: image3,
        title: 'Understanding the Meaning of Key Surahs',
        desc: 'Provide explanations or tafsir (interpretation) of key Surahs (chapters) from the Quran, making them accessible and understandable for beginners. Discuss their lessons and relevance in everyday life.'
    },
    {
        id: 4,
        image: image2,
        title: ' How to Build a Strong Connection with the Quran',
        desc: 'Discuss ways in which Muslims can strengthen their relationship with the Quran. Offer guidance on daily Quran recitation, reflection (Tadabbur), and applying the Quran’s teachings in daily life.'
    },
    {
        id: 5,
        image: image5,
        title: 'Benefits of Learning Quran at a Young Age',
        desc: 'Emphasize the advantages of starting Quranic education early in life, such as building strong moral foundations, improving focus, and developing spiritual awareness.'
    },
    {
        id: 6,
        image: image6,
        title: 'How to Balance Quran Study with a Busy Schedule',
        desc: 'Offer advice for students and professionals who struggle to find time for Quran study. Share tips on setting small goals, using mobile apps for recitation and memorization, and taking advantage of free time.'
    }
]
export const blogsArabic = [
    {
        id: 1,
        image: image1,
        title: 'نصائح لحفظ القرآن الكريم بشكل فعال',
        desc: 'شارك نصائح عملية للطلاب حول كيفية حفظ القرآن الكريم بشكل فعال. ناقش تقنيات مثل التكرار، ووضع جدول زمني، واستخدام الوسائل البصرية والصوتية، والحفاظ على الاتساق.'
    },
    {
        id: 2,
        image: image4,
        title: 'أهمية التجويد في تلاوة القرآن الكريم',
        desc: 'اكتب عن أهمية التجويد (قواعد النطق الصحيح في تلاوة القرآن الكريم). اشرح لماذا من الضروري للمسلمين تلاوة القرآن الكريم بشكل صحيح وقدم بعض القواعد البسيطة التي يجب اتباعها.'
    },
    {
        id: 3,
        image: image3,
        title: 'فهم معاني السور الأساسية',
        desc: 'تقديم تفسيرات وتفسيرات لأهم سور القرآن الكريم، بحيث تكون في متناول المبتدئين ومفهومة لهم. مناقشة دروسهم وأهميتها في الحياة اليومية'
    },
    {
        id: 4,
        image: image2,
        title: 'كيف تبني علاقة قوية مع القرآن الكريم',
        desc: 'مناقشة الطرق التي يمكن للمسلمين من خلالها تعزيز علاقتهم بالقرآن الكريم، وتقديم التوجيهات بشأن تلاوة القرآن الكريم يوميًا، والتدبر، وتطبيق تعاليم القرآن الكريم في الحياة اليومية.'
    },
    {
        id: 5,
        image: image5,
        title: 'فوائد تعلم القرآن الكريم في الصغر',
        desc: 'التأكيد على فوائد البدء بالتعليم القرآني في وقت مبكر من الحياة، مثل بناء أسس أخلاقية قوية، وتحسين التركيز، وتنمية الوعي الروحي.'
    },
    {
        id: 6,
        image: image6,
        title: 'كيفية تحقيق التوازن بين دراسة القرآن الكريم وجدول الأعمال المزدحم',
        desc: 'تقديم النصائح للطلاب والمهنيين الذين يجدون صعوبة في إيجاد الوقت لدراسة القرآن الكريم. شارك نصائح حول تحديد أهداف صغيرة، واستخدام تطبيقات الهاتف المحمول للتلاوة والحفظ، والاستفادة من وقت الفراغ.'
    }
]
export const progs = [
    {
        id: 3,
        image: image7,
        title: 'Quran Memorization Program (Hifz) ',
        desc: ' A foundational course for students who are new to Quran reading or want to improve their fluency. Focuses on learning to recite the Quran with proper pronunciation (Tajweed) rules.'
    },
    {
        id: 2,
        image: image12,
        title: 'Quran (Tajweed) for Beginners',
        desc: 'Write about the significance of Tajweed (the rules of proper pronunciation in Quranic recitation). Explain why it’s essential for Muslims to recite the Quran correctly and provide some simple rules to follow.'
    },
    {
        id: 1,
        image: image9,
        title: 'Quran Tafseer ',
        desc: ' A comprehensive course focused on understanding the meanings and interpretations (Tafseer) of the Quran. This program delves into the context, history, and wisdom behind each verse.'
    },
    {
        id: 4,
        image: image10,
        title: 'Islamic Studies Program',
        desc: 'A program designed to teach the basic etiquettes of interacting with the Quran and Islamic teachings, including proper manners of handling and reciting the Quran.'
    },
    {
        id: 5,
        image: image11,
        title: 'Short Courses for Specific Surahs',
        desc: ' Short-term courses focused on memorizing and understanding specific chapters (Surahs) of the Quran, such as Surah Al-Fatiha, Surah Al-Baqarah, or Juz Amma.'
    },
    {
        id: 6,
        image: image8,
        title: 'Quranic Arabic Course',
        desc: 'A course that helps students understand the language of the Quran by teaching them Quranic Arabic grammar, vocabulary, and sentence structure.'
    }
]
export const progsArabic = [
    {
        id: 3,
        image: image7,
        title: 'برنامج حفظ القرآن الكريم (حفظ)',
        desc: ' دورة تأسيسية للطلاب الجدد في قراءة القرآن الكريم أو الراغبين في تحسين إتقانهم له، تركز على تعلم تلاوة القرآن الكريم بقواعد النطق السليم (التجويد).'
    },
    {
        id: 2,
        image: image12,
        title: 'تجويد القرآن الكريم للمبتدئين',
        desc: 'اكتب عن أهمية التجويد (قواعد النطق الصحيح في تلاوة القرآن الكريم). اشرح لماذا من الضروري للمسلمين تلاوة القرآن الكريم بشكل صحيح وقدم بعض القواعد البسيطة التي يجب اتباعها'
    },
    {
        id: 1,
        image: image9,
        title: 'تفسير القرآن',
        desc: ' دورة شاملة تركز على فهم معاني وتفسير القرآن الكريم، ويتناول هذا البرنامج السياق والتاريخ والحكمة وراء كل آية.'
    },
    {
        id: 4,
        image: image10,
        title: 'برنامج الدراسات الاسلامية',
        desc: 'برنامج يهدف إلى تعليم الآداب الأساسية للتعامل مع القرآن الكريم والتعاليم الإسلامية، بما في ذلك آداب التعامل مع القرآن الكريم وتلاوته.'
    },
    {
        id: 5,
        image: image11,
        title: 'دورات قصيرة لسور معينة',
        desc: ' دورات قصيرة تركز على حفظ وفهم سور محددة من القرآن الكريم، مثل سورة الفاتحة، أو سورة البقرة، أو جزء عم.'
    },
    {
        id: 6,
        image: image8,
        title: 'دورة اللغة العربية القرآنية',
        desc: 'دورة تساعد الطلاب على فهم لغة القرآن الكريم من خلال تعليمهم قواعد اللغة العربية القرآنية والمفردات وبناء الجملة.'
    }
]
export const pricing = [
    {
        id: 1,
        image: image1,
        title: 'Basic Package',
        icon: <FaCheckCircle className=' text-green-500 text-[50px] mt-[-20px]' />,
        desc: 'Perfect for beginners. Introduction to Quran reading with proper pronunciation.',
        features: [
            '2 sessions per week',
            '30-minute sessions',
            'Basic Tajweed rules'
        ],
        price: '50$/month'
    },
    {
        id: 2,
        image: image13,
        title: 'Intermediate Package',
        icon: <FaMedal className=' text-[50px] mt-[-20px]' style={{ color: '#CD7F32' }} />,
        features: [
            '3 sessions per week',
            '45-minute sessions',
            'Detailed Tajweed rules and practice',
            'Quran memorization tips'
        ],
        price: '100$/month',
        desc: 'Ideal for students who can read but need to improve their recitation.'
    },
    {
        id: 3,
        image: image3,
        icon: <FaCrown className=' text-[50px] mt-[-20px]' style={{ color: '#FFD700' }} />,
        title: 'Advanced Package',
        features: [
            '5 sessions per week',
            '60-minute sessions',
            'advanced Tajweed rules'
        ],
        price: '150$/month',
        desc: 'Best for those aiming to perfect recitation or memorize the Quran.'
    },
    {
        id: 4,
        image: image2,
        icon: <FaRocket className=' text-[50px] text-blue-500 mt-[-20px]' />,
        features: [
            'Flexible scheduling',
            'Personalized curriculum',
            'Recitation improvement and memorization help'
        ],
        price: '200$/month',
        title: 'One-on-One Sessions',
        desc: ' Tailored lessons focusing on individual progress.'
    }
]

export const pricingArabic = [
    {
        id: 1,
        image: image1,
        title: 'الباقة الأساسية',
        desc: 'مناسب للمبتدئين، مقدمة لقراءة القرآن الكريم مع النطق الصحيح.',
        features: [
            'جلستين في الاسبوع',
            'جلسات مدتها 30 دقيقة',
            'قواعد التجويد الأساسية'
        ],
        price: '50 دولارا شهريا'
    },
    {
        id: 2,
        image: image4,
        title: 'الباقة المتوسطة',
        features: [
            ' جلسات في الاسبوع',
            'جلسات مدتها 45 دقيقة',
            'قواعد التجويد التفصيلية وممارسة التجويد',
            'نصائح لحفظ القرآن الكريم'
        ],
        price: '100 دولار شهريا',
        desc: 'مثالي للطلاب الذين يستطيعون القراءة ولكنهم بحاجة إلى تحسين تلاوتهم.'
    },
    {
        id: 3,
        image: image3,
        title: 'الحزمة المتقدمة',
        features: [
            '5 جلسات في الاسبوع',
            'جلسات مدتها 60 دقيقة',
            'قواعد التجويد المتقدمة'
        ],
        price: '150 دولار شهريا',
        desc: 'مناسب لمن يرغب في إتقان التلاوة أو حفظ القرآن الكريم.'
    },
    {
        id: 4,
        image: image2,
        features: [
            'جدولة مرنة',
            'مناهج دراسية مخصصة',
            'مساعدة في تحسين التلاوة والحفظ'
        ],
        price: '200 دولار شهريا',
        title: 'جلسات فردية',
        desc: 'دروس مصممة خصيصًا تركز على التقدم الفردي.'
    }
]