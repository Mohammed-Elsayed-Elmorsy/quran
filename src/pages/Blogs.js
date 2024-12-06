import React, { useEffect } from 'react'
import { FaCheck, FaEnvelope, FaFacebook, FaWhatsapp } from 'react-icons/fa'
import Footer from '../components/Footer'
import Header from '../components/Header'
import BlogsCOMP from '../components/Blogs'
import TopNav from '../components/TopNav'

const Blogs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <TopNav />
            <Header />
            <BlogsCOMP slider={false} />
            <Footer />

        </div>
    )
}

export default Blogs