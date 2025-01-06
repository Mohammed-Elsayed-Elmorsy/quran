import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import PricingComp from '../components/PricingComp'

const PricingPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <PricingComp />
            <Footer />
        </div>
    )
}

export default PricingPage