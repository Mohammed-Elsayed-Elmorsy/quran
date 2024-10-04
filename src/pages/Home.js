import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Landing from '../components/Landing'
import Footer from '../components/Footer'
import Choose from '../components/Choose'
import About from '../components/AboutComp'
import Teachers from '../components/Teachers'
import Reviews from '../components/Reviews'
import Contact from '../components/Contact'
import Blogs from '../components/Blogs'
import TopNav from '../components/TopNav'
import PopUp from '../components/PopUp'
import PricingComp from '../components/PricingComp'
import ProgComp from '../components/ProgComp'

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [isVisible, setIsVisible] = useState(true);
    const [arabic, setArabic] = useState(false)
    return (
        <div className={`${arabic ? 'arabic' : ''}`}>
            <PopUp isVisible={isVisible} setIsVisible={setIsVisible} />
            <TopNav />
            <Header setArabic={setArabic} arabic={arabic} />
            <Landing />
            <About />
            <Choose />
            <Teachers />
            <Blogs />
            <ProgComp />
            <PricingComp />
            <Reviews />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home