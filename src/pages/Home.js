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
import PricingComp from '../components/PricingComp'
import ProgComp from '../components/ProgComp'

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div >
            <TopNav />
            <Header />
            <Landing />
            <About more={true} />
            <Choose />
            <Teachers />
            <Blogs slider={true} />
            <ProgComp />
            <PricingComp />
            <Reviews />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home
