import React, { useEffect, useRef, useState } from 'react'
import Footer from '../components/Footer'
import PricingComp from '../components/PricingComp'
import Loading from '../components/Loading';
const PricingPage = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        window.scrollTo(0, 0);
        setLoading(true);
    }, []);
    if (loading) {
        return <Loading />
    }

    return (
        <div>

            <PricingComp />
            <Footer />

        </div>
    )
}

export default PricingPage