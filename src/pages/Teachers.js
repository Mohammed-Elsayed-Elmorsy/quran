import React, { useEffect } from 'react'
import Header from '../components/Header'
import { teaches } from '../utils/data'
import { FaCheck, FaEnvelope, FaFacebook, FaWhatsapp } from 'react-icons/fa'
import Footer from '../components/Footer'
import TeachersComp from '../components/Teachers'
import TopNav from '../components/TopNav'

const Teachers = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <TopNav />
            <Header />
            <TeachersComp />
            <Footer />
        </div>
    )
}

export default Teachers