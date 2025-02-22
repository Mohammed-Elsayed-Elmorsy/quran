import { useSelector } from "react-redux";
import { teachersArabic, teaches } from "../utils/data";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import LinksOfDetails from "../components/LinksOfDetails";
import Loading from "../components/Loading";
import { Helmet } from 'react-helmet-async';

const TeachersDetails = () => {
    const { dark } = useSelector(state => state.mode);
    const mode = localStorage.getItem('dark') ? JSON.parse(localStorage.getItem('dark')) : dark;
    const [loading, setLoading] = useState(true);
    const lang = useSelector(state => state.lang.arabic);
    const state = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : lang;
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        const specificBlog = !state ? teaches.find(i => i.id.toString() === id) :
            teachersArabic.find(i => i.id.toString() === id);
        setBlog(specificBlog);
        window.scrollTo(0, 0);
        setLoading(true);
    }, [id]);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className={`details-page ${mode ? "bg-dark" : "bg-light"}`}>
            {/* Helmet for SEO */}
            <Helmet>
                <title>{blog?.name} | Shatha Alquran</title>
                <meta
                    name="description"
                    content={blog?.details} />
                <meta
                    name="keywords"
                    content="Certified Quran Teacher, Quran Teacher, Quran Classes, 
                    Islamic Education, Online Quran Teacher, Learn Quran, Al-Azher University" />
                <meta property="og:title"
                    content={`${blog?.name} | Shatha Alquran`} />
                <meta property="og:description"
                    content={blog?.details} />
                <meta property="og:image"
                    content={blog?.imagedetaildark || blog?.imaged} />
            </Helmet>
            <div className="details-page-content">
                <div className='container pt-5 px-6 md:px-[60px] lg:px-[100px] xl:px-[150px] mx-auto pb-[70px]'>
                    <div className={`flex items-center justify-center p-2 
                        ${mode ? "bg-lighter" : "bg-white border border-gray-300"}`}>
                        <div className="overflow-hidden w-[130px] h-[170px] md:w-[240px] 
                        md:h-[250px] lg:w-[260px] lg:h-[300px]">
                            <img src={!mode ? blog?.imaged : blog?.imagedetaildark}
                                alt={blog?.name}
                                className="object-contain w-full h-full" />
                        </div>
                        <ul>
                            <li className={`font-bold md:text-[25px] text-[17px] capitalized text-primary`}>
                                {blog?.name}
                            </li>
                            {!state ?
                                <li className={`underline ${mode ? "text-gray-400" : "text-primary"}`}>
                                    Certified Quran Teacher
                                </li>
                                :
                                <li className={`underline ${mode ? "text-gray-400" : "text-primary"}`}>
                                    {blog?.id === 1 ? " معلم قران معتمد" : " معلمة قران معتمدة"}
                                </li>
                            }
                            <li className={`${mode ? "text-gray-200" : ""}`}>
                                {blog?.experience}
                            </li>
                            {!state ?
                                <li className={`${mode ? "text-gray-200" : ""}`}>
                                    Cairo, Egypt
                                </li>
                                :
                                <li className={`${mode ? "text-gray-200" : ""}`}>
                                    القاهرة، مصر
                                </li>
                            }
                            {!state ?
                                <li className={`${mode ? "text-gray-200" : ""}`}>
                                    AL_Azher University
                                </li>
                                :
                                <li className={`${mode ? "text-gray-200" : ""}`}>
                                    جامعة الأزهر
                                </li>
                            }
                        </ul>
                    </div>
                    <div>
                        <h3 className="title">{state ? " المزيد عن المعلم" : "about the teacher"}</h3>
                        <p className={`p-3 my-3 ${mode ? "bg-lighter text-light" : "bg-white"} leading-[25px]`}>
                            {blog?.details}
                        </p>
                    </div>
                </div>
            </div>
            <div className="pb-[70px]">
                <LinksOfDetails />
            </div>
            <Footer />
        </div>
    );
};

export default TeachersDetails;
