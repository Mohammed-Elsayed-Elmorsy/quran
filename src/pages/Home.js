import React, { useState } from 'react'
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

const Home = () => {
    const [isVisible, setIsVisible] = useState(true);
    return (
        <div>
            <PopUp isVisible={isVisible} setIsVisible={setIsVisible} />
            <TopNav />
            <Header />
            <Landing />
            <About />
            <Choose />
            <Teachers />
            <Blogs />
            <Reviews />
            <PricingComp />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home