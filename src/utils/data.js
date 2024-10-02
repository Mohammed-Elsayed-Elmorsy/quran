import image1 from '../static/read7.jpg'
import image2 from '../static/seven.png'
import image3 from '../static/quran4.jpg'
import image4 from '../static/interactive.png'
import image5 from '../static/six (1).png'
import image6 from '../static/supportive-removebg-preview.png'
import image7 from '../static/quran1.jpg'
import image8 from '../static/supportive-removebg-preview.png'
import image9 from '../static/read7.jpg'
import image10 from '../static/quran4.jpg'
import image11 from '../static/quran111.jpg'
import image12 from '../static/seven.png'
import { FaEnvelope, FaFacebook, FaGithub, FaGlobe, FaInstagram, FaLinkedin, FaPhone, FaWhatsapp, FaYoutube }
    from 'react-icons/fa'

export const links = [
    {
        id: 1,
        text: '/'
    },
    {
        id: 2,
        text: 'about '
    },
    {
        id: 3,
        text: 'blogs'
    },
    {
        id: 4,
        text: 'programms',
        chilren: [
            {
                path: 'Tafseer',
                text: 'Quran Tafseer'
            },
            {
                path: 'Tajweed',
                text: 'Quran(Tajweed)'
            },
            {
                path: 'Revision',
                text: 'Quran Revision '
            },
            {
                path: 'Islamic-Studies',
                text: 'Islamic Studies'
            }
            ,
            {
                path: 'programms',
                text: 'all programms'
            }
        ]
    },
    {
        id: 7,
        text: 'pricing'
    },
    {
        id: 5,
        text: 'contact '
    },
    {
        id: 6,
        text: 'teachers'
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

export const medias = [
    {
        id: 1,
        title: 'Facebook',
        content: ' Facebook profile',
        to: 'https://www.facebook.com/profile.php?id=100079764606912',
        icon: <FaFacebook />
    },
    {
        id: 2,
        title: 'WhatsApp',
        content: '+20 012 1265 9525',
        to: 'https://wa.me/201212659525',
        icon: <FaWhatsapp />
    },
    {
        id: 3,
        title: 'Linkendin',
        content: 'linkedin/mohammed-elmorsy',
        to: 'https://www.linkedin.com/in/mohammed-elmorsy-018378258/',
        icon: <FaLinkedin />
    },
    {
        id: 4,
        title: 'Githup',
        content: 'github/Mohammed-Elmorsy',
        to: 'https://github.com/Mohammed-Elsayed-Elmorsy',
        icon: <FaGithub />
    },
    {
        id: 5,
        title: 'Email',
        content: 'sallealamohammed@gmail.com',
        to: 'mailto:sallealamohammed@gmail.com',
        icon: <FaEnvelope />
    },
    {
        id: 6,
        title: 'Address',
        content: 'Mit Ghamer Adqhlia',
        icon: <FaGlobe />
    },
    {
        id: 7,
        title: 'Phone',
        content: '01554701926',
        icon: <FaPhone />
    },
    {
        id: 8,
        title: 'Youtube',
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

export const progs = [
    {
        id: 1,
        image: image7,
        title: '1. Quran Memorization Program (Hifz) ',
        desc: ' A foundational course for students who are new to Quran reading or want to improve their fluency. Focuses on learning to recite the Quran with proper pronunciation (Tajweed) rules.'
    },
    {
        id: 2,
        image: image12,
        title: '2.Quran (Tajweed) for Beginners',
        desc: 'Write about the significance of Tajweed (the rules of proper pronunciation in Quranic recitation). Explain why it’s essential for Muslims to recite the Quran correctly and provide some simple rules to follow.'
    },
    {
        id: 3,
        image: image9,
        title: '3.Quran Tafseer ',
        desc: ' A comprehensive course focused on understanding the meanings and interpretations (Tafseer) of the Quran. This program delves into the context, history, and wisdom behind each verse.'
    },
    {
        id: 4,
        image: image11,
        title: '4.Short Courses for Specific Surahs',
        desc: ' Short-term courses focused on memorizing and understanding specific chapters (Surahs) of the Quran, such as Surah Al-Fatiha, Surah Al-Baqarah, or Juz Amma.'
    },
    {
        id: 5,
        image: image10,
        title: '5.Islamic Studies Program',
        desc: 'A program designed to teach the basic etiquettes of interacting with the Quran and Islamic teachings, including proper manners of handling and reciting the Quran.'
    },
    {
        id: 6,
        image: image8,
        title: '6.Quranic Arabic Course',
        desc: 'A course that helps students understand the language of the Quran by teaching them Quranic Arabic grammar, vocabulary, and sentence structure.'
    }
]

export const pricing = [
    {
        id: 1,
        image: image1,
        title: 'Basic Package: ',
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
        image: image4,
        title: 'Intermediate Package:',
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
        title: 'Advanced Package:',
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
        features: [
            'Flexible scheduling',
            'Personalized curriculum',
            'Recitation improvement and memorization help'
        ],
        price: '200$/month',
        title: 'One-on-One Sessions:',
        desc: ' Tailored lessons focusing on individual progress.'
    }
]