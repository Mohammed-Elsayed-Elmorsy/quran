import image from "../static/2.png";
import aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
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

    useEffect(() => {
        aos.init({
            duration: 900,
            delay: 100,
        });
    }, []);
    return (
        <div className={`${mode ? "bg-dark" : "bg-light"}  about pb-[40px] flex flex-col `}>
            <h2 className=" title"> {!state ? " about us" : "اقرأ عنا"}</h2>
            <div className="container  mx-auto px-7 md:px-[60px] lg:px-[80px] xl:px-[150px] flex lg:justify-between justify-center">
                <div
                    className="w-full flex flex-col justify-between lg:w-[54%] text"
                    data-aos={state ? "fade-down" : "fade-up"}
                >
                    {!state ? (
                        <p className={`p-3 ${mode ? "bg-lighter shadow shadow-black text-textDark" : "bg-white shadow shadow-slate-400"} mb-3`}>
                            Welcome to
                            <span className={`inline m-1 text-[18px] font-bold`}>
                                Shatha Alqur’an Academy
                            </span>
                            your trusted path to learning the Qur’an, Arabic, Tafseer, and
                            Islamic studies. We proudly serve students across the globe,
                            including the USA, UK, Canada, Australia, UAE, India, Saudi
                            Arabia, and beyond. Our team of highly qualified and experienced
                            teachers, all graduates of the Al-Azhar University and qualified
                            with ijazah and Hifz, is committed to nurturing both the minds and
                            hearts of our students. Using creative and innovative teaching
                            methods
                        </p>
                    ) : (
                        <p className={`p-2 mb-3 
                        ${mode ? "bg-lighter shadow shadow-black text-textDark" : "bg-white shadow shadow-slate-400"} `}>
                            مرحبًا بكم في
                            <h2
                                className=" text-[18px] m-1 inline font-bold">
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
                            من يسعى لعلمه
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
                    className={`  hidden lg:w-[45%] lg:block relative  p-2 
                        ${mode ? "bg-lighter shadow shadow-black" : "bg-white  shadow shadow-slate-400"} 
                        ${state ? "left-[0px]" : "right-[0px]"
                        } `}
                >
                    <img src={image} alt="" className=" h-full w-full object-cover " />
                </div>
            </div>
        </div>
    );
};

export default AboutComp;
