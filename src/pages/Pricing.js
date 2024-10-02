import React, { useEffect } from 'react'
import TopNav from '../components/TopNav'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PricingComp from '../components/PricingComp'

const PricingPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <TopNav />
            <Header />
            <PricingComp />
            <Footer />
        </div>
    )
}

export default PricingPage