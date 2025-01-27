import image from "../static/2.png";
import aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const AboutComp = ({ more }) => {
    const lang = useSelector((state) => state.lang.arabic);
    const { dark } = useSelector((state) => state.mode);
    const mode = localStorage.getItem("dark")
        ? JSON.parse(localStorage.getItem("dark"))
        : dark;
    const state = localStorage.getItem("lang")
        ? JSON.parse(localStorage.getItem("lang"))
        : lang;
    // const [displayText, setDisplayText] = useState("");
    // const [index, setIndex] = useState(0);
    // const [isDeleting, setIsDeleting] = useState(false);

    // useEffect(() => {
    //     const speed = isDeleting ? 200 : 200; // Adjust speed for typing and deleting

    //     const timeout = setTimeout(() => {
    //         if (!isDeleting && index < text.length) {
    //             // Typing forward
    //             setDisplayText((prev) => prev + text.charAt(index));
    //             setIndex((prev) => prev + 1);
    //         } else if (isDeleting && index > 0) {
    //             // Deleting backward
    //             setDisplayText((prev) => prev.slice(0, -1));
    //             setIndex((prev) => prev - 1);
    //         }

    //         if (index === text.length && !isDeleting) {
    //             // Pause before deleting starts
    //             setTimeout(() => setIsDeleting(true), 1000);
    //         }

    //         if (isDeleting && index === 0) {
    //             // Pause before typing starts again
    //             setIsDeleting(false);
    //         }
    //     }, speed);

    //     return () => clearTimeout(timeout);
    // }, [index, isDeleting, text]);



    useEffect(() => {
        aos.init({
            duration: 900,
            delay: 100,
        });
    }, []);
    return (
        <div className={` bg-light about pb-[40px] flex flex-col `}>
            <h2 className=" title"> {!state ? " about us" : "اقرأ عنا"}</h2>
            <div className="container  mx-auto px-7 md:px-[60px] lg:px-[80px] xl:px-[100px] flex lg:justify-between justify-center">
                <div
                    className="w-full flex flex-col justify-between lg:w-[54%] text"
                    data-aos={state ? "fade-down" : "fade-up"}
                >
                    {!state ? (
                        <p className={`p-3 bg-white mb-3`}>
                            Welcome to
                            <span className=" border-b-[2px] md:border-none border-white block md:inline  m-2 md:m-1 text-[18px] font-bold">
                                Shatha Alqur’an Academy
                            </span>
                            your trusted path to learning the Qur’an, Arabic, Tafseer, and
                            Islamic studies. We proudly serve students across the globe,
                            including the USA, UK, Canada, Australia, UAE, India, Saudi
                            Arabia, and beyond. Our team of highly qualified and experienced
                            teachers, all graduates of the Al-Azhar University and qualified
                            with ijazah and Hifz, is committed to nurturing both the minds and
                            hearts of our students. Using creative and innovative teaching
                            methods, we make learning engaging, accessible, and effective for
                            students of all ages and proficiency levels
                        </p>
                    ) : (
                        <p className={`p-2 mb-3 bg-white `}>
                            مرحبًا بكم في
                            <h2
                                className="border-b-[2px] md:border-none border-white block md:inline  md:m-1 text-[20px] font-bold">
                                أكاديمية شذا القرآن
                            </h2>{" "}
                            طريقكم الموثوق لتعلم القرآن الكريم، واللغة العربية، والتفسير،
                            والدراسات الإسلامية. نفخر في بتقديم خدماتنا التعليمية لطلابنا في
                            جميع أنحاء العالم، بما في ذلك الولايات المتحدة الأمريكية، المملكة
                            المتحدة، كندا، أستراليا، الإمارات العربية المتحدة، الهند، المملكة
                            العربية السعودية، وغيرهم. يضم فريقنا معلمين ومعلمات مؤهلين وذوي
                            خبرة عالية، خريجو جامعة الأزهر الشريف، حاصلون على الإجازة في
                            التلاوة والاقراء وحفظ القرآن الكريم. معلمون كرّسوا أنفسهم لخدمة
                            القرآن الكريم، فهو نورٌ يملأ الصدور ويضيء الأنفاس، يهدي به الله كل
                            من يسعى لعلمه ، كباراً وصغاراً رجالاَ ونساءاً. في أكادميتنا نبذل
                            كل جهد ممكن، ونستخدم كل وسيلة متاحة، لنقل رسالة القرآن وتعاليمه،
                            غير مبالين بالتعب أو الجهد، نهب وقتنا وطاقتنا لإيصال آيات الله إلى
                            القلوب.
                        </p>
                    )}
                    <div className="   flex gap-3 lg:justify-start justify-center">
                        {more ? (
                            <Link to={"/about"} className=" flex-1">
                                <button className="btn-pri w-full">
                                    {!state ? "Learn More" : "اقرأ المزيد"}
                                </button>
                            </Link>
                        ) : null}
                        <Link className=" flex-1" to={"/programms"}>
                            <button className="btn-sec w-full">
                                {!state ? "Our programms" : " برامجنا المختلفة"}
                            </button>
                        </Link>
                    </div>
                </div>
                <div
                    data-aos={state ? "fade-up" : "fade-down"}
                    className={`  hidden lg:w-[45%] lg:block relative  p-2 bg-white ${state ? "left-[0px]" : "right-[0px]"
                        } `}
                >
                    <img src={image} alt="" className=" h-full w-full object-cover " />
                </div>
            </div>
        </div>
    );
};

export default AboutComp;
