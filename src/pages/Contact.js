import React, { useEffect } from 'react'
import TopNav from '../components/TopNav'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { medias } from '../utils/data'
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import ContactComp from '../components/Contact'

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div >

            <TopNav />
            <Header />
            <ContactComp />
            <Footer />

        </div>
    )
}

export default Contact