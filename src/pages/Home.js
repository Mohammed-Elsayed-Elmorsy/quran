import React from 'react'
import Header from '../components/Header'
import Landing from '../components/Landing'
import Footer from '../components/Footer'
import { FaEnvelope, FaFacebook, FaWhatsapp } from 'react-icons/fa'
import Choose from '../components/Choose'
import About from '../components/AboutComp'
import Teachers from '../components/Teachers'
import Reviews from '../components/Reviews'
import Contact from '../components/Contact'
import Blogs from '../components/Blogs'

const Home = () => {
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
            <Landing />
            <About />
            <Choose />
            <Teachers />
            <Blogs />
            <Reviews />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home