import { useSelector } from "react-redux"
import { teachersArabic, teaches } from "../utils/data"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import LinksOfDetails from "../components/LinksOfDetails"

const TeachersDetails = () => {
    const lang = useSelector(state => state.lang.arabic)
    const state = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : lang
    const { id } = useParams()
    const [blog, setBlog] = useState(null)
    useEffect(() => {
        const specificBlog = !state ? teaches.find(i => i.id.toString() === id) :
            teachersArabic.find(i => i.id.toString() === id)
        setBlog(specificBlog)
        window.scrollTo(0, 0);
    }, [id])
    return (
        <div className="details-page">
            <div className="details-page-content">

                <div className=' container px-7  mx-auto pb-[70px]'>
                    <h2 className='  title after-before'>{blog?.name}</h2>
                    <p className=' text-[20px]'>
                        {blog?.details}
                    </p>
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