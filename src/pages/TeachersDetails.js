import { useSelector } from "react-redux"
import { teachersArabic, teaches } from "../utils/data"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import LinksOfDetails from "../components/LinksOfDetails"
import Loading from "../components/Loading"
const TeachersDetails = () => {
    const [loading, setLoading] = useState(true)
    const lang = useSelector(state => state.lang.arabic)
    const state = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : lang
    const { id } = useParams()
    const [blog, setBlog] = useState(null)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
        const specificBlog = !state ? teaches.find(i => i.id.toString() === id) :
            teachersArabic.find(i => i.id.toString() === id)
        setBlog(specificBlog)
        window.scrollTo(0, 0);
        setLoading(true)
    }, [id])
    if (loading) {
        return <Loading />
    }
    return (
        <div className="details-page bg-light">
            <div className="details-page-content">

                <div className=' container pt-5 px-6 md:px-[60px] lg:px-[80px] xl:px-[100px] mx-auto pb-[70px]'>


                    <div className=" bg-white flex items-center justify-center  p-2 border border-gray-300">
                        <div className="  overflow-hidden w-[130px] h-[170px] md:w-[240px] md:h-[250px] lg:w-[320px] lg:h-[350px]">
                            <img src={blog?.imaged} alt=""
                                className=" object-contain w-full h-full" />
                        </div>

                        <ul className="">
                            <li className=" font-bold md:text-[25px] text-[17px] capitalize">
                                {blog?.name}
                            </li>

                            {!state ?
                                <li className=" underline md:text-[17px] text-[16px] text-gray-800 ">
                                    Certified Quran Teacher
                                </li>
                                :
                                <li className=" underline text-[18px] text-gray-800 ">
                                    {blog?.id === 1 ? " معلم قران معتمد" : " معلمة قران معتمدة"}
                                </li>
                            }
                            <li>
                                {blog?.experience}
                            </li>
                            {!state ?
                                <li>
                                    Cairo, Egypt
                                </li>
                                :
                                <li>
                                    القاهرة، مصر
                                </li>
                            }
                            {!state ?
                                <li>
                                    AL_Azher University
                                </li>
                                :
                                <li>
                                    جامعة الأزهر
                                </li>
                            }

                        </ul>
                    </div>



                    <div>
                        <h3 className=" title ]">{state ? " المزيد عن المعلم" : "about the teacher"} </h3>
                        <p className=' bg-white p-3 '>
                            {blog?.details}
                        </p>
                    </div>

                </div>
            </div>
            <div className=" pb-[70px]">
                <LinksOfDetails />
            </div>
            <Footer />
        </div>
    )
}

export default TeachersDetails