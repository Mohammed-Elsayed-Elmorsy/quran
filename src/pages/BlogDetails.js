import React, { useEffect, useState } from 'react'
import TopNav from '../components/TopNav'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { blogs } from '../utils/data'
import { useParams } from 'react-router-dom'

const BlogDetails = () => {
    const { id } = useParams()
    const [blog, setBlog] = useState(null)
    useEffect(() => {
        const specificBlog = blogs.find(i => i.id.toString() === id)
        setBlog(specificBlog)
    }, [id])
    return (
        <div >
            <TopNav />
            <Header />
            <div className=' container px-5  mx-auto pb-[70px]'>
                <h2 className=' title '>{blog?.title}</h2>
                <p className=' text-[20px]'>{blog?.desc}
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
                </p>
            </div>
            <Footer />

        </div>
    )
}

export default BlogDetails