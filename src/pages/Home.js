import React, { useEffect, useState } from 'react'
import Landing from '../components/Landing'
import Footer from '../components/Footer'
import Choose from '../components/Choose'
import About from '../components/AboutComp'
import Teachers from '../components/Teachers'
import Reviews from '../components/Reviews'
import Contact from '../components/Contact'
import Blogs from '../components/Blogs'
import PricingComp from '../components/PricingComp'
import ProgComp from '../components/ProgComp'
import Loading from '../components/Loading'

const Home = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1600);
        window.scrollTo(0, 0);
        setLoading(true);
    }, []);
    if (loading) {
        return <Loading />
    }
    return (
        <div >
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
