import React from 'react'
import { FaCheck, FaEnvelope, FaFacebook, FaWhatsapp } from 'react-icons/fa'
import Footer from '../components/Footer'
import Header from '../components/Header'
import BlogsCOMP from '../components/Blogs'
import { Link } from 'react-router-dom'

const Blogs = () => {
    return (
        <div>
            <div className='p-2 bg-blue-500 upper-header'>
                <div className="container mx-auto px-5  py-2 flex justify-between items-center">
                    <span className=' rounded-md capitalize bg-orange-400 block p-3 text-slate-100'>start with us now</span>
                    <span className=' flex gap-3 items-center text-[25px] upper-span'>
                        <span><FaWhatsapp /></span>
                        <span><FaFacebook /></span>
                        <span><FaEnvelope /></span>
                    </span>
                </div>
            </div>
            <Header />
            <BlogsCOMP />
            <Footer />

        </div>
    )
}

export default Blogs