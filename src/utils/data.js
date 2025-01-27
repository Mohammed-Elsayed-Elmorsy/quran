import image1 from '../static/12.png'
import image2 from '../static/37.png'
import image3 from '../static/35.png'
import image4 from '../static/9.png'
import image5 from '../static/4.png'
import image6 from '../static/14.png'
import image7 from '../static/44.png'
import image8 from '../static/31.png'
import image9 from '../static/11.png'
import image10 from '../static/41.png'
import image11 from '../static/17.png'
import image12 from '../static/18.png'
import image32 from '../static/32.png'
import image47 from '../static/47.png'
import image48 from '../static/48.png'
import image49 from '../static/49.png'
import image50 from '../static/50.png'
import image52 from '../static/52.png'
import image53 from '../static/53.png'
import image55 from '../static/55.png'
import image58 from '../static/58.png'
import teacher1 from '../static/teacher5.jpg'
import teacher1d from '../static/teacherdetails2.jpg'
import teacher2d from '../static/teacherdetails1.jpg'
import teacher2 from '../static/teacher6.jpg'
import teacher3 from '../static/teacher6.jpg'
import {
    FaEnvelope,
    FaFacebook,
    FaPhone,
    FaWhatsapp,
    FaYoutube,
    FaTelegram,
    FaInstagram
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
                text: 'arabic ', to: 'Islamic-Studies'
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
        text: 'اقرأ عنا', to: 'about'
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
        text: 'المعلمون'
    },

]
export const choose =
    [
        {
            image: image48,
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
            image: image58,
            aos: "fade-up",
            id: 3,
            title: "Wide Range of Experience",
            text: "All our tutors have at least 4 years of experience teaching Quran, Tajweed, and Islamic Studies, both online and offline."
        },
        {
            image: image52,
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
            image: image53,
            aos: "fade-up",
            id: 8,
            title: "24/7 Support",
            text: "Our dedicated support team is available around the clock to assist you with any inquiries or needs."
        }
    ]

export const chooseArabic = [
    {
        image: image48,
        aos: "fade-up",
        id: 1,
        title: "معلمون ومعلمات خبراء    ",
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
        image: image58,
        aos: "fade-up",
        id: 3,
        title: "خبرة واسعة",
        text: "جميع معلمينا يتمتعون بخبرة لا تقل عن 4 سنوات في تدريس القرآن الكريم، التجويد، والدراسات الإسلامية، سواء عبر الإنترنت أو على أرض الواقع."
    },
    {
        image: image52,
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
        image: image53,
        aos: "fade-up",
        id: 8,
        title: "دعم متواصل على مدار الساعة",
        text: "فريق الدعم المخصص لدينا متاح على مدار 24/7 للإجابة على جميع استفساراتك وتلبية احتياجاتك."
    }
]

export const teaches = [
    {
        id: 1,
        image: teacher1,
        imaged: teacher1d,
        name: 'Ustadh.Muhammed Kormod',
        desc: `Assalamu Alykum wa Rahmatullah, 
        I'm Ustadh Muhammed Kormod, and I am a passionate educator, 
        a lifelong learner, and a devoted servant of the Qur’an. 
        Having earned an Ijazah and studied at Al-Azhar University, 
        I have dedicated myself to teaching Qur’an,
         Tajweed, Islamic studies, and Arabic language to students worldwide.
         `,
        details: `
         Assalamu Alykum wa Rahmatullah,

I'm Ustadh Muhammed Kormod, and I am a passionate educator, a lifelong learner, and a devoted servant of the Qur’an. Having earned an Ijazah and studied at Al-Azhar University, I have dedicated myself to teaching Qur’an, Tajweed, Islamic studies, and Arabic language to students worldwide.

Over the past few years, I have had the honor of guiding both Arabic and non-Arabic speakers on their journey to connect with the Book of Allah. My teaching style focuses on more than just memorization; I aim to inspire a deep understanding of the Qur’an, a love for its words, and the ability to apply its teachings in everyday life.

I am particularly proud of my ability to adapt to my students’ needs, whether young children, teenagers, or adults. I use creative techniques like games, discussions, and personalized lessons to make learning both effective and enjoyable. As someone who values empathy and understanding, I also prioritize the emotional and psychological well-being of my students, ensuring they feel supported every step of the way.

Beyond teaching, I am deeply committed to continuous improvement. Whether it’s refining my teaching methods, learning new skills, or exploring fresh approaches to Tajweed and Arabic, I strive to ensure my students receive the best experience possible.

For me, teaching is more than a profession—it’s a way to serve Allah, build lasting connections, and leave behind a legacy of goodness through education. My ultimate vision is to nurture students who not only excel academically but also embody the teachings of the Qur’an in their daily lives, becoming beacons of light in their communities.

Assalamu Alykum wa Rahmatullah.
         
         `,
        experience: '+8 years of teaching'
    },
    {
        id: 2,
        image: teacher2,
        imaged: teacher2d,
        name: 'Teacher.Tasneem El-Sayed',
        desc: `
        Assalamu Alykum wa Rahmatullah,

I am Tasneem El-Sayed, born and raised in Egypt. My journey is a blend of two worlds – 
the world of medicine, having graduated from the Faculty of Medicine 
at Al-Azhar University, and the world of teaching, where my heart truly lies.
        
        `
        ,
        details: `
Assalamu Alykum wa Rahmatullah,

I am Tasneem El-Sayed, born and raised in Egypt. My journey is a blend of two worlds – the world of medicine, having graduated from the Faculty of Medicine at Al-Azhar University, and the world of teaching, where my heart truly lies.

For over two years, I have been blessed to teach the Qur'an and Islamic studies to a diverse range of students. My passion for teaching began with children, young girls, and mothers, where I introduced them to the beauty of the Qur'an, the rules of Tajweed, and the richness of the Arabic language. I believe that every lesson is an opportunity to connect hearts to the Book of Allah, not just through recitation but by understanding its meanings and applying them in daily life.

Teaching non-Arabic speakers has been one of the most rewarding experiences of my journey. I focus on simplifying complex concepts, whether it’s Arabic grammar or Islamic rulings. I help my students distinguish between halal and haram, emphasizing the wisdom behind these rulings. For me, teaching is not about mere memorization – it’s about nurturing a deeper connection to faith and understanding.

I love starting my lessons by building a bond with my students. I ask about their day, their feelings, and their struggles. This simple gesture creates a warm, welcoming environment. From there, we dive into the Qur'an, practice Tajweed, and even explore conversational Arabic through practical dialogues. I tailor every session to the needs and personalities of my students, using games, activities, and stories to make the lessons enjoyable and impactful.

My medical background has given me a unique perspective on teaching. It helps me understand the psychological and emotional needs of my students, especially those living abroad and dealing with the pressures of being far from home. I consider it my responsibility to not only teach but also to offer support, ease their burdens, and strengthen their bond with their families through the Qur’an.

One of my greatest joys is seeing my students grow – not just academically but spiritually and emotionally. I’ve witnessed their patience and perseverance as they embark on their Qur'anic journey. I’ve seen them embrace the meanings of the Qur’an and apply its teachings in their lives. Every time a student tells me they’ve found happiness or strength through the Qur’an, I feel a deep sense of fulfillment.

My vision is to make Qur'anic education a source of pride and joy for my students. I want them to understand that learning the Qur'an is not just a task but a lifelong journey of effort, growth, and transformation. I strive to foster a sense of commitment and consistency in their learning, ensuring that they excel not only in their studies but also in their connection to their Creator.

I am committed to continuous self-improvement. I regularly update my knowledge of Tajweed, Fiqh, and Arabic language studies to ensure that I can provide the best for my students. Teaching is not just a profession for me – it’s my calling, my passion, and my way of serving Allah.

Every student I teach is a part of my story, and every lesson is a chance to leave a lasting impact. With Allah’s guidance, I hope to continue this journey, connecting hearts to His words and making the Qur’an a source of light for generations to come.

Assalamu Alykum wa Rahmatullah.
        
        `,
        experience: '+6 years of teaching '
    },
    {
        id: 3,
        image: teacher3, imaged: teacher2d,
        name: 'Teacher.Maryam El-Sayed',
        desc: `
                My name is Maryam El-Sayed. 
I am a teacher of Qur'an, Tajweed, and Arabic grammar for both native and non-native Arabic speakers.
By Allah’s grace and mercy, 
He facilitated this path for me after I obtained my Ijazah from my teacher, 
Madeeha Abdel-Moneim, nearly four years ago.

        `
        ,
        details: `
        My name is Maryam El-Sayed. 
I am a teacher of Qur'an, Tajweed, and Arabic grammar for both native and non-native Arabic speakers.
By Allah’s grace and mercy, 
He facilitated this path for me after I obtained my Ijazah from my teacher, 
Madeeha Abdel-Moneim, nearly four years ago. My journey began with teaching Arabs, 
starting with a group of mothers. It was a beautiful beginning, marked by the 
diligence of the students and the blessings of Allah in 
enabling me to teach Tajweed and correct their recitation.

Later, I had the opportunity to teach young girls. I used to give each one of them individual lessons, but I was keen to gather them once a week to introduce them to one another and encourage healthy competition among them. This fostered a beautiful spirit of rivalry adorned with the manners of the People of the Qur’an. For those who could grasp meanings, I explained some interpretations of verses. As for those who struggled significantly with reading, even though they were native Arabic speakers, I would repeat with them until they left the lesson having memorized at least 70% of what we covered.

Their families would often share how their academic performance had improved, and this brought me immense joy, knowing that I had helped make things easier for them.

As time went on, I joined a faculty at Al-Azhar University. My trust in Allah deepened, and I became more certain that He would guide others through me and that this path would be better for me than the finest worldly possessions. I resolved to become a means of making things easier for those who were even more in need than before – those whose tongues were not Arabic at all. I relied on Allah, seeking His aid, and He opened the door for me to work at Maqra’a Noor Al-Sudoor, which focuses on correcting recitation for non-Arabic-speaking sisters, alongside providing simple explanations of rules to make the process easier.

In the beginning, it was a daunting task. The responsibility before Allah was immense, and the matter was not simple. It required more knowledge and expertise in determining the best approach to present the information. But with Allah’s help, I persisted, and to this day, I remain with the Maqra’a. It has become a door to success for me by Allah’s grace. I have mastered the art of correcting recitation for non-Arabic speakers and have conducted individual lessons to teach Tajweed, Qur'an memorization, and Nooraniyah to build a solid foundation that supports accurate recitation.

At the start of my lessons, I always try to check on my students, ask about their well-being and their day, and discuss together some Arabic words and how to use them. We then proceed to the Qur'an, followed by something engaging to refresh their energy and make the lesson enjoyable. I assign follow-up tasks as homework and conclude with the supplication of concluding a gathering.

This has been my journey in teaching, and I have enjoyed it immensely and thanked Allah for it greatly. I am always delighted by the thought that teaching someone the Book of Allah may become an ongoing charity for me – as they teach others, and those others teach more, and so the cycle continues, multiplying Allah’s blessings upon us by His grace.

Assalamu Alykum wa Rahmatullah.
        
        `,
        experience: '+7 years of teaching '

    },
]
export const teachersArabic = [
    {
        id: 1,
        image: teacher1,
        imaged: teacher1d,
        name: 'أ.محمد قرمد',
        desc: `
       السلام عليكم ورحمة الله وبركاته
أنا محمد قرمد، وأنا معلم شغوف بتعليم القرآن الكريم، التجويد، واللغة العربية. أعمل في هذا المجال منذ سنوات، حيث أتيحت لي الفرصة لتدريس طلاب من مختلف الأعمار والخلفيات الثقافية، سواء كانوا ناطقين بالعربية أو غير ناطقين بها.

`
        ,
        experience: 'خبرة لاكثر من 8 سنوات'
        ,
        details: `السلام عليكم ورحمة الله وبركاته
أنا محمد قرمد، وأنا معلم شغوف بتعليم القرآن الكريم، التجويد، واللغة العربية. أعمل في هذا المجال منذ سنوات، حيث أتيحت لي الفرصة لتدريس طلاب من مختلف الأعمار والخلفيات الثقافية، سواء كانوا ناطقين بالعربية أو غير ناطقين بها.

خلال مسيرتي التعليمية، سعيت دائمًا لإيجاد طرق مبتكرة تسهم في تسهيل الفهم وحبّ المعرفة لدى طلابي. أؤمن أن التعليم هو عملية مستمرة من التفاعل المتبادل بين المعلم والطالب، وأنه يجب أن يكون ذو تأثير إيجابي يتعدى حدود الصف الدراسي.

من خلال تعليمي للقرآن الكريم، أركز على إرشاد طلابي لفهم معاني آياته الكريمة وتطبيقها في حياتهم اليومية. كما أنني أهتم بتعليمهم قواعد التجويد بشكل عملي ونظري، وتوجيههم نحو بناء علاقة أعمق مع القرآن.

بالإضافة إلى ذلك، أسعى دائمًا لاستخدام أساليب تعليمية تواكب العصر، مثل استخدام الألعاب التعليمية، الأنشطة التفاعلية، والوسائل التكنولوجية، بما يساعد على تقديم الدروس بشكل ممتع وفعّال.

من خلال تجربتي العملية، تعلمت أهمية التواصل مع الطلاب على مستوى شخصي، والاهتمام بتقديم الدعم النفسي لهم، خاصة أولئك الذين قد يواجهون تحديات في حياتهم اليومية. كما أعتبر أنه من واجبي أن أساعدهم على التفاعل مع أسرهم وبيئتهم بشكل إيجابي.

رؤيتي في التعليم هي أن أساهم في بناء أجيال قادرة على فهم الدين بشكل صحيح، وعيش تعاليم القرآن في حياتهم العملية، وأن أكون جزءًا من تحقيق النجاح والتفوق لدى كل طالب أتعامل معه.

أنا ملتزم بالتطور المستمر في مجالي، وأسعى دائمًا لتحسين أساليب تدريسي وتوسيع معارفي في مجالات القرآن والتجويد والدراسات الإسلامية.

السلام عليكم ورحمة الله وبركاته.`
    },
    {
        id: 2,
        image: teacher2,
        imaged: teacher2d,
        name: 'أ. تسنيم السيد  ',
        desc: `
        السلام عليكم ورحمة الله وبركاته،

أنا تسنيم السيد، وُلدت ونشأت في مصر. رحلتي هي مزيج بين عالمين
 – عالم الطب، حيث تخرجت في كلية الطب بجامعة الأزهر، وعالم التعليم، حيث يكمن شغفي الحقيقي.

على مدار أكثر من عامين، وفقني الله لتعليم القرآن الكريم والدراسات الإسلامية
 لمجموعة متنوعة من الطلاب.   
        `
        ,
        details: `
       السلام عليكم ورحمة الله وبركاته،

أنا تسنيم السيد، وُلدت ونشأت في مصر. رحلتي هي مزيج بين عالمين – عالم الطب، حيث تخرجت في كلية الطب بجامعة الأزهر، وعالم التعليم، حيث يكمن شغفي الحقيقي.

على مدار أكثر من عامين، وفقني الله لتعليم القرآن الكريم والدراسات الإسلامية لمجموعة متنوعة من الطلاب. بدأ شغفي بالتعليم مع الأطفال والفتيات والأمهات، حيث عرّفتهم بجمال القرآن، وقواعد التجويد، وغنى اللغة العربية. أؤمن أن كل درس هو فرصة لربط القلوب بكتاب الله، ليس فقط من خلال التلاوة ولكن بفهم معانيه وتطبيقها في الحياة اليومية.

لقد كانت تجربة تعليم غير الناطقين بالعربية واحدة من أكثر التجارب متعة وإفادة في مسيرتي. أركز على تبسيط المفاهيم الصعبة، سواء كانت قواعد اللغة العربية أو الأحكام الشرعية. أساعد طلابي على التمييز بين الحلال والحرام، مع توضيح الحكمة وراء هذه الأحكام. بالنسبة لي، التعليم ليس مجرد حفظ؛ بل هو وسيلة لزرع ارتباط أعمق بالإيمان والفهم.

أحب أن أبدأ حصصي ببناء علاقة ودية مع طلابي. أسألهم عن يومهم، وكيف يشعرون، وما يواجهونه من تحديات. هذا التواصل البسيط يخلق بيئة دافئة ومرحبة. من هناك، ننتقل إلى القرآن، ونمارس التجويد، وحتى نغوص في المحادثات باللغة العربية. أصمم كل جلسة لتتناسب مع احتياجات وشخصيات طلابي، باستخدام الألعاب والأنشطة والقصص لجعل الدروس ممتعة ومؤثرة.

لقد منحني تخصصي الطبي رؤية مميزة في التعليم. فهو يساعدني على فهم الاحتياجات النفسية والعاطفية لطلابي، خاصة أولئك الذين يعيشون في الغربة ويواجهون ضغوط الحياة بعيدًا عن وطنهم. أعتبر أن مسؤوليتي لا تقتصر على التعليم فقط، بل تشمل تقديم الدعم والتخفيف عنهم، وتقوية علاقتهم بأسرهم من خلال القرآن.

واحدة من أعظم لحظات السعادة في حياتي هي رؤية طلابي ينمون – ليس فقط أكاديميًا بل أيضًا روحيًا وعاطفيًا. لقد شاهدت صبرهم ومثابرتهم وهم يخوضون رحلة تعلم القرآن. لقد رأيتهم يطبقون معاني القرآن في حياتهم اليومية. وكل مرة يخبرني طالب أنه وجد السعادة أو القوة من خلال القرآن، أشعر برضا عميق وسعادة كبيرة.

رؤيتي هي أن أجعل تعليم القرآن الكريم مصدر فخر وسعادة لطلابي. أريدهم أن يفهموا أن تعلم القرآن ليس مجرد مهمة، بل هو رحلة حياة مليئة بالجهد والنمو والتحول. أسعى دائمًا لغرس روح الالتزام والاستمرارية في التعلم، لضمان تفوقهم ليس فقط في دراستهم، ولكن أيضًا في علاقتهم بخالقهم.

أنا ملتزمة بالتطور المستمر. أعمل على تحديث معرفتي في علوم التجويد والفقه ودراسات اللغة العربية، لضمان تقديم أفضل ما لدي لطلابي. بالنسبة لي، التعليم ليس مجرد وظيفة – إنه ندائي، شغفي، ووسيلتي لخدمة الله.

كل طالب أدرسه هو جزء من قصتي، وكل درس هو فرصة لترك أثر دائم. مع توفيق الله، آمل أن أستمر في هذه الرحلة، أربط القلوب بكلماته، وأجعل القرآن مصدر نور لأجيال قادمة.

السلام عليكم ورحمة الله وبركاته. 
        
        `
        ,
        experience: 'خبرة لاكثر من 7 سنوات'
    },
    {
        id: 3,
        imaged: teacher2d,
        image: teacher3,
        name: 'أ. مريم السيد   ',
        desc: `
        السلام عليكم ورحمة الله وبركاته
اسمي مريم السيد عبد الرحمن، معلمة للقرآن الكريم والتجويد
 وقواعد اللغة العربية لغير الناطقين بالعربية وكذلك للناطقين بها.

منّ الله عليّ بفضله وكرمه ويسّر لي هذا السبيل بعد أن حصلت على الإجازة
 على يد معلمتي مديحة عبد المنعم منذ ما يقارب أربع سنوات.         
        `
        ,
        details: `
        منّ الله عليّ بفضله وكرمه ويسّر لي هذا السبيل بعد أن حصلت على الإجازة على يد معلمتي مديحة عبد المنعم منذ ما يقارب أربع سنوات. بدأت رحلتي بتعليم العرب، وكانت بدايتي مع حلقة للأمهات، وكانت أجمل البدايات بما رأيته من حرص الطالبات وتوفيق الله لي في شرح التجويد وتصحيح التلاوة.

ثم تيسّر لي بعد ذلك العمل مع حلقة صغيرات السن. كنت أعطي كل واحدة منهن حصة فردية، وحرصت على جمعهن في يوم واحد من كل أسبوع لتعريفهن ببعضهن البعض وتشجيعهن بروح تنافس جميلة متخلقة بأخلاق أهل القرآن. كنت أشرح لبعضهن ممن يستوعب المعاني تفسير بعض الآيات. أما من كانت تواجه صعوبة كبيرة في القراءة رغم لسانها العربي، كنت أردد معها حتى تنهي الحصة وقد حفظت بنسبة تتجاوز 70%.

كنت أُبشّر من أهل الطالبات بتحسن أدائهن الدراسي، وكان ذلك غاية سعادتي، لأنني شعرت بأنني قد يسّرت على معسر.

ومع مرور الأيام، التحقت بكلية في جامعة الأزهر، وازداد يقيني بالله عز وجل أنه سيجعلني سببًا في الهداية وأنه سيجعل هذا العمل خيرًا لي من حُمر النعم. عزمت على أن أكون بابًا لتيسير تعليم القرآن لغير الناطقين بالعربية، فاستعنت بالله، وبدأت العمل في "مقرأة نور الصدور" التي تركز على تصحيح التلاوة للأخوات غير الناطقات بالعربية مع شرح بسيط لبعض القواعد لتسهيل الأمر عليهن.

كان الأمر في بدايته صعبًا جدًا، فالمسؤولية كبيرة أمام الله، والتعامل مع طالبات غير ناطقات بالعربية يتطلب معرفة وخبرة في اختيار أنسب الطرق لتوصيل المعلومات. ومع ذلك، بفضل الله وكرمه، أصبحت هذه المقرأة بابًا للفتح عليّ. أتقنت تصحيح التلاوة، وبدأت العمل في حصص فردية لتعليم التجويد وتحفيظ القرآن، بالإضافة إلى تعليم النورانية لبناء أساس صحيح في القراءة.

دائمًا ما أبدأ حصصي بالاطمئنان على الطالبات وسؤالهن عن أحوالهن ويومهن، ثم نناقش بعض معاني الكلمات العربية وكيفية استخدامها. بعد ذلك نبدأ بتلاوة القرآن، ثم نأخذ شيئًا يُجدّد نشاط الطالبات ويضفي المتعة على الدرس. أختم بتحديد واجب منزلي للمتابعة، وأدعو بدعاء ختام المجلس.

كانت هذه رحلتي في التعليم، وكم استمتعت بها وحمدت الله عليها كثيرًا. أسعد دائمًا بفكرة أن تعليم أحدهم لكتاب الله قد يكون صدقة جارية لي، حيث يعلّم الطالب غيره، وهكذا تستمر السلسلة، ويكرمنا الله بفضله وكرمه.

والسلام عليكم ورحمة الله وبركاته
        
        `
        ,
        experience: 'خبرة لاكثر من 6 سنوات'
    }
]
export const testmonials = [
    {
        id: 1,
        name: 'Tanvir Kareem',
        state: 'UK',
        content: `By the grace of Allah, I’d say that I’ve met with the best Qur’an teacher, because he starts off with analysing or checking what level and based on that he comes up with a plan gradually perfecting the makhraj, the tajwid, etc… you don’t even realise that you’re reading has improved a lot. 

My lessons were so much fun, I enjoyed every minute of it. He’s not harsh with his students, he gentle and easygoing.  `
    },
    {
        id: 2,
        name: 'Umm Arfaz',
        state: 'KSA',
        content: `
        Ustadh Muhammed is an excellent teacher who is friendly, punctual, and deeply dedicated to his students. His classes are always engaging and interactive, creating an environment where my son feels motivated and eager to learn. He takes the time to explain concepts clearly, making sure the student is able to grasp the material effectively.
        `
    },
    {
        id: 3,
        name: 'Tuba Hakeem Khan',
        content: `
        I just wanted to say thank you Teacher Maryam for teaching me Arabic. Your classes are always engaging and interactive, you made learning fun and accessible.
Your patience, dedication and passion for teaching is truly inspiring, and I feel fortunate to have had the opportunity to learn from you.
        `,
        state: 'India'
    }
    , {
        id: 4,
        name: ' Umm Muhammad',
        state: 'India',
        content: `
        The class was very good, teacher Muhammad was teaching in a very good way, Muhammad was also happy and liked it very much.👍👍
        `
    },
    {
        id: 5,
        name: ' Anisa',
        state: 'USA',
        content: `
        Thank you, Teacher Tasneem for being an amazing teacher helping me with my hijab journey. 
        I’m overjoyed that you’re proud of me.You’re like the older sister I never had, 
        and I’ll always look to your recitation, 
        beauty,motivation,intelligence,and how a great Muslim you are.You’ve been such an inspiring part of my life. And yes, you finally won tic-tac-toe! 💚.
        Tasneem,
Thankful,surprising,exciting,and mindful
        `

    },
    {
        id: 6,
        name: 'Laila',
        state: 'USA',
        content: `
        Thank you, Teacher Tasneem, for being there for me and teaching me. You’re one of my favorite teachers—the best teacher and the best doctor ever. Thank you for all your help; you’ve made me a better Muslim. You are so much more than you think, and inshallah, you will go to Jannah
        `
    }
]
export const testmonialsArabic = [
    {
        id: 1,
        name: 'تنفير كريم', state: ' المملكة المتحدة  ',
        content: `
  يمكنني القول إنني وجدت المعلم المثالي للقرآن
 يبدأ بتحليل مستوى الطالب ثم يضع خطة تدريجية لتحسين المخارج،
 التجويد،  وغيرها ودون أن تشعر، تجد  تلاوتك قد تحسنت كثيرًا.
 والله لقد استمتعت بكل دقيقة منها. المعلم ليس صارمًا مع طلابه؛ بل لطيف وسهل التعامل.
أنصح بشدة أن يكون هو معلم القرآن أعتقد أنه في غضون شهر واحد، يمكن للطالب أن يتحسن مئة مرة أكثر مقارنة بالذهاب إلى مدرسة يتعامل فيها معلمين مفرطين في الصرامة.

        `
    },
    {
        id: 2,
        name: 'أم أرفاز', state: 'السعودية  ',
        content: `
      الأستاذ محمد معلم ممتاز يتمتع بشخصية ودودة منضبطة ومتفانٍ للغاية مع طلابه. دروسه دائمًا شيقة وتفاعلية، مما يخلق بيئة تجعل ابني متحمسًا وشغوفًا للتعلم. يأخذ الوقت الكافي لشرح المفاهيم بوضوح، مما يضمن أن يستوعب الطالب المادة بفعالية.
  `
    },
    {
        id: 3,
        name: ' توبة حكيم خان',
        state: 'الهند  ',
        content: `
        أود أن أشكر المعلمة مريم على تعليمي اللغة العربية. دروسك دائمًا ممتعة وتفاعلية، وقد جعلتِ التعلم ممتعًا وسهل المنال.
صبركِ، تفانيكِ، وشغفكِ بالتعليم ملهمة حقًا، وأشعر بأنني محظوظة لأنني حظيت بفرصة التعلم منكِ.
رؤيتكِ ومعرفتكِ لم تساعداني فقط على تحسين مهاراتي اللغوية، بل أيضًا على تقدير أعمق للتراث الثقافي الغني للعالم العربي.
شكرًا مرة أخرى على تعليمكِ ودعمكِ.
        
        `
    },
    {
        id: 4,
        name: 'أم محمد ', state: '  الهند',
        content: `
        وعليكم السلام ورحمة الله وبركاته
كانت الحصة جيدة جدًا. كان الأستاذ محمد يشرح بطريقة ممتازة، وكان محمد سعيدًا جدًا واستمتع بها. 👍👍

        `,
    },
    {
        id: 5,
        name: 'أنيسة',
        state: 'الولايات المتحدة ',
        content: `
        
شكرًا لكِ، المعلمة تسنيم، على كونك معلمة مذهلة ومساعدتي في رحلتي مع الحجاب. أنا سعيدة للغاية لأنكِ فخورة بي. أنتِ كالأخت الكبرى التي لم أحظَ بها، وسأظل دائمًا أقتدي بتلاوتكِ، جمالكِ، تحفيزكِ، ذكائكِ، ومدى كونكِ مسلمة رائعة. لقد كنتِ جزءًا ملهمًا جدًا في حياتي. وأخيرًا، فزتِ في لعبة إكس-أو!

        `
    },
    {
        id: 6,
        name: ' ليلى', state: 'الولايات المتحدة ',
        content: `
        
        
شكرًا لكِ، المعلمة تسنيم، على وجودكِ بجانبي وتعليمي. أنتِ واحدة من معلماتي المفضلات - أفضل معلمة وأفضل طبيبة على الإطلاق. شكرًا لكِ على كل مساعدتكِ؛ لقد جعلتِ مني مسلمة أفضل. أنتِ أكثر بكثير مما تعتقدين، وإن شاء الله ستذهبين إلى الجنة.`
    }
]
export const medias = [
    {
        id: 1, color: '#1e8af0', back: '#1e8af03a',
        title: 'Facebook',
        content: 'shatha alquran ',
        to: 'https://www.facebook.com/share/1EiyVKbBTt/',
        icon: <FaFacebook />
    },
    {
        id: 2, color: 'green', back: '#0080002a',
        title: 'WhatsApp',
        content: '+2 010 1386 4939',
        to: 'https://wa.me/201013864939',
        icon: <FaWhatsapp />
    }
    ,
    {
        id: 3, color: 'purple', back: '#ea00ff3d',
        title: 'Instagram',
        content: ' shatha.alquran.academy',
        icon: <FaInstagram />,
        to: 'https://www.instagram.com/shatha.alquran?igsh=MWg3OWc5Y3NtMzcwNA=='
    },
    {
        id: 5, color: 'black', back: '#0202022a',
        title: 'Email',
        content: 'shathaquran.academy@gmail',
        to: 'mailto:shathaquran.academy@gmail.com',
        icon: <FaEnvelope />
    },
    {
        id: 6, color: '#006797', back: '#035eb423',
        title: 'Telegram',
        content: 'shatha_alquran.academy',
        icon: <FaTelegram />,
        to: 'https://t.me/shatha_alquran'
    },

    {
        id: 8, color: 'red', back: '#ff000027',
        title: 'Youtube',
        content: 'shatha.alquran',
        icon: <FaYoutube />,
        to: 'https://youtube.com/@shathaalquran?si=NyM9EfrFyzhPcQch'
    }
    ,
]
export const mediasarab = [
    {
        id: 1, color: '#1e8af0', back: '#1e8af03a',
        title: 'الفيسبوك',
        content: ' Mohammed-Elmorsy',
        to: 'https://www.facebook.com/share/1EiyVKbBTt/',
        icon: <FaFacebook />
    },
    {
        id: 2, color: 'green', back: '#0080002a',
        title: 'واتساب',
        content: '+2 010 1386 4939',
        to: 'https://wa.me/201013864939',
        icon: <FaWhatsapp />
    },

    {
        id: 5, color: 'black', back: '#0202022a',
        title: 'الجميل',
        content: 'shathaquran.academy',
        to: 'mailto:shathaquran.academy@gmail.com',
        icon: <FaEnvelope />
    },
    {
        id: 6, color: '#006797', back: '#035eb423',
        title: 'التلجرام',
        content: 'shatha_alquran',
        icon: <FaTelegram />,
        to: 'https://t.me/shatha_alquran'
    },

    {
        id: 8, color: 'red', back: '#ff000027',
        title: 'اليوتيوب',
        content: 'Youtube',
        icon: <FaYoutube />,
        to: 'https://youtube.com/@shathaalquran?si=NyM9EfrFyzhPcQch'
    },
    {
        id: 9, color: 'purple', back: '#ea00ff3d',
        title: 'انستجرام',
        content: 'انستجرام',
        icon: <FaInstagram />,
        to: 'https://www.instagram.com/shatha.alquran?igsh=MWg3OWc5Y3NtMzcwNA=='
    },
]

export const blogs = [
    {
        id: 1,
        image: [image1, image2, image3, image4],
        title: 'The Virtue of the Quran ',
        desc: `1.	Guidance and Light:
    The Quran is the light that brought humanity out of the darkness of ignorance into the light of faith. Allah says: "With it, Allah guides those who seek His pleasure to the paths of peace." (Al-Maidah: 16).
    2.	Healing and Mercy:
    It is a cure for the soul and heart from doubts and desires. Allah says: "And We send down from the Quran that which is healing and mercy for the believers." (Al-Isra: 82).
    3.	The Stronghold of the Believers:
     The Quran is the fortress that protects the believers from trials and deviations. It is the strong rope, and whoever holds onto it is saved. The Prophet (PBUH) said: "The Book of Allah contains guidance and light; whoever clings to it will be guided, and whoever abandons it will be misled." (Muslim).
    4.	Elevation in This World and the Hereafter:
    The Quran elevates its reciter to the highest ranks in this world and the Hereafter. The Prophet (PBUH) said: "It will be said to the companion of the Quran: ‘Recite and ascend, and recite as you used to in the world, for your status is at the last verse you recite.’" (Tirmidhi).
    5.	The Virtue of Recitation:
    Reciting the Quran is a great act of worship, and for every letter recited, the believer is rewarded with a good deed. The Prophet (PBUH) said: "Whoever recites a letter from the Book of Allah will have a good deed, and a good deed is multiplied by ten." (Tirmidhi).
   ______________________
   The Quran is the word of Allah, revealed to the heart of His Prophet Muhammad (PBUH) by the trustworthy Gabriel. It is revered for its recitation, miraculous in its wording and meaning, starting with Surah Al-Fatiha and ending with Surah An-Nas.It is the book that no falsehood comes to from before or behind it, a revelation from the Most Wise, the Most Praiseworthy, and the source of guidance and light for the believers .'
        `
    },
    {
        id: 2,
        image: [image2, image3, image4, image5],
        title: 'Definition of the Quran',
        desc: 'In the Arabic language, the word "Quran" is derived from "Qara’a," which means to gather or combine, as Allah says: "Indeed, upon Us is its collection and its recitation." (Al-Qiyama: 17), referring to combining the letters and words together.In its technical sense, the Quran is the word of Allah revealed to His Messenger Muhammad (PBUH), which is recited and preserved in its original form, passed down to us through authentic transmission, and challenged with producing even the shortest chapter from it, all written in the Mushafs.'
    },
    {
        id: 3,
        image: [image3, image4, image5, image1],
        title: 'The Status of the Quran in Islam',
        desc: `Preserving the Arabic Language:
The Quran is the primary reference for the Arabic language, preserving it from distortion and decay throughout the ages.
•	A Constitution for the Nation:
It is the straight path of Allah and the true constitution, organizing the life of the individual and society and establishing justice and righteousness.
•	The Eternal Miracle:
The Quran is the enduring miracle of Islam, which Allah challenged both humans and jinn with. Allah says: "Bring forth a surah like it." (Yunus: 38).
'`
    },
    {
        id: 4,
        image: [image4, image5, image1, image2],
        title: 'Quran The Key to Happiness',
        desc: `
        The Quran is not just a book to be recited; it is a way of life to be followed, and it is the foundation of happiness in both this world and the Hereafter. Allah says: "Whoever does righteous deeds, whether male or female, while being a believer, We will surely give him a good life." (An-Nahl: 97).
        The Quran is the great blessing that Allah has given us, and it is the path to happiness and success in this world and the Hereafter. Learning it and teaching it is a great honor, and living by it brings light and blessings into your life.
        •	Honor in Abundance:
The Quran is the source of honor for anyone who carries it in their heart, learns it, and teaches it. The Prophet (PBUH) said: "The best of you are those who learn the Quran and teach it." (Bukhari).
Everyone who listens to it or contributes to its teaching and spreading, whether through effort, time, or money, receives a share of its light and blessings
•	Dignity in Its Greatest Form:
There is no greater dignity than having the Quran in your heart, speaking it with your tongue, and letting its light illuminate your life and the lives of those around you. The Prophet (PBUH) said: "Allah raises some people with this Book and lowers others with it." (Muslim).

        `
    },
    {
        id: 5,
        image: [image5, image1, image2, image3],
        title: 'A Call to Hold Fast to the Quran',
        desc: `O Muslim, let the Quran be your companion in life:
•	Strive to recite it daily and reflect on its verses.
•	Memorize as much of it as you can, for memorization is light and blessings.
•	Implement its rulings, for it is the straight path of Allah.
Allah says: "Indeed, this Quran guides to that which is most suitable." (Al-Isra: 9).

        
        The Quran is the greatest blessing that Allah has bestowed upon His servants, and it is our path to salvation and success. Let us make an effort to learn it, teach it, and act upon it, for it is our honor, dignity, and glory.
O Allah, make the great Quran the spring of our hearts, the light of our breasts, the relief of our sorrows, and the removal of our worries. Ameen.

        `
    },
    {
        id: 6,
        image: [image6, image2, image5, image4],
        title: 'Make the Quran light of your life',
        desc: `The Quran is the great blessing that Allah has given us, and it is the path to happiness and success in this world and the Hereafter. Learning it and teaching it is a great honor, and living by it brings light and blessings into your life.
If you wish to learn the Quran with mastery, or desire to memorize it and deepen your understanding of its recitation and Tajweed, we invite you to join the "The Quran Way Academy."
We offer specialized programs for Quran memorization, Tajweed, and the teaching of its sciences, delivered by qualified scholars and teachers using advanced educational tools that cater to all ages and levels.

The Quran is the greatest blessing that Allah has bestowed upon His servants, and it is our path to salvation and success. Let us make an effort to learn it, teach it, and act upon it, for it is our honor, dignity, and glory.
O Allah, make the great Quran the spring of our hearts, the light of our breasts, the relief of our sorrows, and the removal of our worries. Ameen.

`
    }
]
export const blogsArabic = [
    {
        id: 1,
        image: [image1, image2, image3, image4],
        title: 'أهمية وفضل القرآن الكريم',
        desc: `
        :1.	هداية ونور:
القرآن الكريم هو النور الذي أخرج البشرية من ظلمات الجهل إلى نور الإيمان. قال تعالى: "يَهْدِي بِهِ اللَّهُ مَنِ اتَّبَعَ رِضْوَانَهُ سُبُلَ السَّلَامِ" (المائدة: 16).
2.	الشفاء والرحمة:
هو شفاء للأرواح والقلوب من الشبهات والشهوات. قال تعالى: "وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ لِلْمُؤْمِنِينَ" (الإسراء: 82).
3.	الحصن المتين:
القرآن هو حصن المؤمنين من الفتن والضلالات، فهو الحبل المتين الذي من تمسك به نجا. قال صلى الله عليه وسلم: "كتاب الله، فيه الهدى والنور، من استمسك به كان على الهدى، ومن تركه كان على الضلالة" (رواه مسلم).
4.	رفعة في الدنيا والآخرة:
يحمل القرآن حامله إلى مراتب عليا في الدنيا والآخرة. قال صلى الله عليه وسلم: "يُقال لصاحب القرآن: اقرأ وارقَ ورتل كما كنت ترتل في الدنيا، فإن منزلتك عند آخر آية تقرؤها" (رواه الترمذي).
5.	فضل التلاوة:
تلاوة القرآن هي عبادة عظيمة، ويكتب للمؤمن بكل حرف حسنة. قال صلى الله عليه وسلم: "من قرأ حرفًا من كتاب الله فله حسنة، والحسنة بعشر أمثالها" (رواه الترمذي).

        `
    },
    {
        id: 2,
        image: [image2, image3, image4, image5],
        title: 'القرآن الكريم: شرف وكرامة',
        desc: `•	الشرف كل الشرف:
القرآن الكريم هو مصدر التشريف لمن حمله في قلبه، أو تعلمه وعلَّمه. قال النبي صلى الله عليه وسلم: "خيركم من تعلم القرآن وعلَّمه" (رواه البخاري).
يتشرف كل من سمعه، أو ساهم في تعليمه ونشره، سواء بالجهد أو الوقت أو المال، فيناله نصيب من نور القرآن وبركاته.
•	الكرامة كل الكرامة:
لا كرامة أعظم من أن يحمل المؤمن القرآن في صدره، ويجري على لسانه، ويُضيء بنوره حياته وحياة من حوله. قال صلى الله عليه وسلم: "إن الله يرفع بهذا الكتاب أقوامًا ويضع به آخرين" (رواه مسلم).
`
    },
    {
        id: 3,
        image: [image5, image1, image2, image3],
        title: 'تعريف القرآن الكريم',
        desc: `
        لغةً، مشتق من "قرأ" بمعنى جمع وضم، كما في قوله تعالى: "إِنَّ عَلَيْنَا جَمْعَهُ وَقُرْآنَهُ" (القيامة: 17)، أي ضم الحروف والكلمات بعضها إلى بعض.
اصطلاحًا، هو كلام الله المنزل على رسوله محمد صلى الله عليه وسلم، المتعبد بتلاوته، المنقول إلينا بالتواتر، والمتحدى بأقصر سورة منه، والمحفوظ في المصاحف.
القرآن الكريم هو النعمة العظمى التي منحنا الله إياها، وهو طريق السعادة والفلاح في الدنيا والآخرة. تعلمه وتعليمه شرف عظيم، والعمل به نور وبركة في حياتك
     `
    },
    {
        id: 4,
        image: [image3, image4, image5, image1],
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
        image: [image4, image5, image1, image2],
        title: 'العمل بالقرآن: مفتاح السعادة ',
        desc: `القرآن ليس مجرد كتاب يُتلى، بل منهج حياة يُعمل به، وهو أساس السعادة في الدنيا والآخرة. قال تعالى: "مَنْ عَمِلَ صَالِحًا مِّن ذَكَرٍ أَوْ أُنثَىٰ وَهُوَ مُؤْمِنٌ فَلَنُحْيِيَنَّهُ حَيَاةً طَيِّبَةً" (النحل: 97).
القرآن الكريم هو النعمة العظمى التي منَّ الله بها على عباده، وهو سبيلنا إلى النجاة والفلاح. فلنحرص على تعلمه وتعليمه والعمل به، فإنه شرفنا وعزنا وكرامتنا.
اللهم اجعل القرآن العظيم ربيع قلوبنا، ونور صدورنا، وجلاء أحزاننا، وذهاب همومنا. آمين
        `
    },
    {
        id: 6,
        image: [image6, image2, image5, image4],
        title: 'دعوة إلى التمسك بالقرآن',
        desc: ` القرآن الكريم هو النعمة العظمى التي منَّ الله بها على عباده، وهو سبيلنا إلى النجاة والفلاح. فلنحرص على تعلمه وتعليمه والعمل به، فإنه شرفنا وعزنا وكرامتنا.
اللهم اجعل القرآن العظيم ربيع قلوبنا، ونور صدورنا، وجلاء أحزاننا، وذهاب همومنا. آمين

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
        title: 'Reading Skills (Noor Al-Bayan and Al-Nouraniya)',
        desc: 'Unlock the foundation of Arabic literacy with our Reading Skills Program',
        points: [
            {
                title: 'Who it’s for : ',
                info: 'Perfect for beginners of all ages or those aiming to improve their basic reading skills.'
            },
            {
                title: 'What we offer : ',
                info: 'Structured lessons using the Noor Al-Bayan and Al-Nouraniya methods, with fun, engaging exercises'
            },
            {
                title: 'What your child will gain : ',
                info: 'A strong foundation in Arabic phonetics, letters, and fluency in reading Arabic texts, alongside with writing skills'
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
                title: 'What your child will gain : ',
                info: 'Memorization of the Qur’an, whether a portion or its entirety, with focus on consistent retention'
            },
            {
                title: 'What we offer : ',
                info: 'Individualized plans, daily revision schedules, and expert guidance to inspire confidence and dedication'
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
                title: 'What your child will gain : ',
                info: 'Mastery of Tajweed rules, enabling them to recite the Qur’an fluently and melodiously with confidence'
            },
            {
                title: 'What we offer : ',
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
                title: 'Who it’s for : ',
                info: 'Perfect for learners at any level, whether they are complete beginners or intermediate students aiming to refine their skills'
            },
            {
                title: 'What we offer : ',
                info: 'Interactive lessons covering listening, speaking, reading, and writing, using trusted curricula like “Arabic Between Your Hands” and “Madinah Book”.'
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
                title: 'Who it’s for : ',
                info: 'Perfect for learners inspired to learn Arabic through the words of Allah'
            },
            {
                title: 'What we offer : ',
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
                title: 'What your child will gain : ',
                info: 'A strong foundation in Fiqh, Tafseer, Hadith, Du’aa, and Aqeedah all of what they can’t be ignorant of'
            },
            {
                title: 'What we offer : ',
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
            image: image11,
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
            image: image9,
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
            image: image32,
            title: " تعلم اللغة العربية من خلال القرآن",
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
            id: 2,
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
                numberperweek: '2 classes/',
                cost: '40GBP/',
                numberpermonth: '8 classes/',
                costforclass: '5£/',
            },
            {
                numberperweek: '3 classes/',
                cost: '51GBP/',
                numberpermonth: '12 classes/',
                costforclass: '4.25£/',
            },
            {
                numberperweek: '4 classes/',
                cost: '64GBP/',
                numberpermonth: '16 classes/',
                costforclass: '4£/',
            },
            {
                numberperweek: '5 classes/',
                cost: '75GBP/',
                numberpermonth: '20 classes/',
                costforclass: '3.75£/',
            },
        ],
    },
    {
        id: 2,
        image: image1,
        plan: '45 min class ',
        classes: [
            {
                numberperweek: '1 class/',
                cost: '21GBP/',
                numberpermonth: '4 classes/',
                costforclass: '7£/',
            },
            {
                numberperweek: '2 classes/',
                cost: '52GBP/',
                numberpermonth: '8 classes/',
                costforclass: '6.50£/',
            },
            {
                numberperweek: '3 classes/',
                cost: '74GBP/',
                numberpermonth: '12 classes/',
                costforclass: '6.20£/',
            },
            {
                numberperweek: '4 classes/',
                cost: '92GBP/',
                numberpermonth: '16 classes/',
                costforclass: '5.75£/',
            },
        ],
    },
    {
        id: 3,
        image: image1,
        plan: '60 min class ',
        classes: [
            {
                numberperweek: '1 class/',
                cost: '40GBP/',
                numberpermonth: '4 classes/',
                costforclass: '10£/',
            },
            {
                numberperweek: '2 classes/',
                cost: '72GBP/',
                numberpermonth: '8 classes/',
                costforclass: '9£/',
            },
            {
                numberperweek: '3 classes/',
                cost: '96GBP/',
                numberpermonth: '12 classes/',
                costforclass: '8£/',
            },
            {
                numberperweek: '4 classes/',
                cost: '112GBP/',
                numberpermonth: '16 classes/',
                costforclass: '7£/',
            },
        ],
    },
]

export const pricingArabic = [
    {
        id: 1,
        image: image1,
        plan: 'حصة  30 دقيقة',
        classes: [
            {
                numberperweek: 'حصتان/',
                cost: '40 جنيه إسترليني/',
                numberpermonth: '8 حصص/',
                costforclass: '5£/',
            },
            {
                numberperweek: '3 حصص/',
                cost: '51 جنيه إسترليني/',
                numberpermonth: '12 حصة/',
                costforclass: '4.25£/',
            },
            {
                numberperweek: '4 حصص/',
                cost: '64 جنيه إسترليني/',
                numberpermonth: '16 حصة/',
                costforclass: '4£/',
            },
            {
                numberperweek: '5 حصص/',
                cost: '75 جنيه إسترليني/',
                numberpermonth: '20 حصة/',
                costforclass: '3.75£/',
            },
        ],
    },
    {
        id: 2,
        image: image1,
        plan: 'حصة  45 دقيقة',
        classes: [
            {
                numberperweek: 'حصة /',
                cost: '21 جنيه إسترليني/',
                numberpermonth: '4 حصص/',
                costforclass: '7£/',
            },
            {
                numberperweek: 'حصتان/',
                cost: '52 جنيه إسترليني/',
                numberpermonth: '8 حصص/',
                costforclass: '6.50£/',
            },
            {
                numberperweek: '3 حصص/',
                cost: '74 جنيه إسترليني/',
                numberpermonth: '12 حصة/',
                costforclass: '6.20£/',
            },
            {
                numberperweek: '4 حصص/',
                cost: '92 جنيه إسترليني/',
                numberpermonth: '16 حصة/',
                costforclass: '5.75£/',
            },
        ],
    },
    {
        id: 3,
        image: image1,
        plan: 'حصة  60 دقيقة',
        classes: [
            {
                numberperweek: 'حصة/',
                cost: '40 جنيه إسترليني/',
                numberpermonth: '4 حصص/',
                costforclass: '10£/',
            },
            {
                numberperweek: 'حصتان/',
                cost: '72 جنيه إسترليني/',
                numberpermonth: '8 حصص/',
                costforclass: '9£/',
            },
            {
                numberperweek: '3 حصص/',
                cost: '96 جنيه إسترليني/',
                numberpermonth: '12 حصة/',
                costforclass: '8£/',
            },
            {
                numberperweek: '4 حصص/',
                cost: '112 جنيه إسترليني/',
                numberpermonth: '16 حصة/',
                costforclass: '7£/',
            },
        ],
    },
];
