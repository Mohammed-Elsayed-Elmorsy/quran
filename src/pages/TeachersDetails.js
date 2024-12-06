import { useSelector } from "react-redux"
import { medias, mediasarab, teachersArabic, teaches } from "../utils/data"
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import TopNav from "../components/TopNav"
import Header from "../components/Header"
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
            <TopNav />
            <Header />
            <div className="details-page-content">

                <div className=' container px-7  mx-auto pb-[70px]'>
                    <h2 className=' title '>{blog?.name}</h2>
                    <p className=' text-[20px]'>
                        {blog?.desc}
                        Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. Odit libero minus vel ratione
                        repellat modi veritatis laboriosam dicta? Pariatur, aliquam.
                        Eligendi consectetur error ullam
                        perferendis quidem alias voluptatibus iure sit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugit harum necessitatibus dolor. A doloremque inventore quaerat rem,
                        suscipit alias! Minima in, consequuntur libero fugiat eveniet ipsa earum totam expedita, ipsum,
                        assumenda debitis hic eius vel explicabo iusto ipsam dolorum omnis.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Dolorum qui sit laborum corrupti, obcaecati voluptates eveniet quaerat, magni veritatis
                        fuga, saepe vero. Obcaecati totam,
                        exercitationem repellendus unde et eos dolores.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero architecto maiores illo impedit unde laborum in, placeat quia eligendi, aliquid ab cumque incidunt quibusdam. Nulla vel maiores odio similique voluptatem?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa corrupti porro ex, tempora ullam doloremque inventore nam nulla facere illum, reiciendis, repellendus adipisci dolorem. Maiores nobis nulla officiis accusamus molestias.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem inventore iste repudiandae consequuntur sit commodi veniam quaerat vel at, autem officiis. Reprehenderit ipsum odio error natus minima iusto molestiae officiis?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi dolorum similique laboriosam rerum at odit earum sit ex velit laborum est fuga voluptatibus reprehenderit, et, consectetur quos hic nam numquam?

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