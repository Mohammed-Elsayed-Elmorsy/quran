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

                <div className=' container pt-12 px-8 md:px-[80px] lg:px-[120px]  mx-auto pb-[70px]'>


                    <div className=" bg-white flex items-center justify-center  p-5 border border-gray-300">
                        <div className=" overflow-hidden w-[250px] h-[250px]">
                            <img src={blog?.image} alt=""
                                className=" object-cover relative left-[-20px]" />
                        </div>

                        <ul className="relative left-[-30px] ">
                            <li className=" font-bold text-[22px] capitalize">
                                {blog?.name}
                            </li>
                            <li className=" underline ">
                                Certified Quran Teacher
                            </li>
                            <li>
                                10+ years of teaching
                            </li>
                            <li>
                                Cairo, Egypt
                            </li>
                            <li>
                                AL_Azher University
                            </li>
                        </ul>
                    </div>



                    <div className=" mt-5">
                        <h3 className=" title ]">{state ? " تفاصيل المعلم" : "about the teacher"} </h3>
                        <p className=' bg-white p-3 lg:text-xl text-[18px]'>
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