import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from '../components/Footer';
import PricingComp from '../components/PricingComp';
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
        return <Loading />;
    }
    return (
        <div>
            {/* Helmet for SEO */}
            <Helmet>
                <title>Affordable Online Quran Classes | Pricing & Plans | Shatha Alquran</title>
                <meta
                    name="description"
                    content="Check out our affordable Quran learning plans. 
                    Choose the best pricing plan for online Quran classes with experienced 
                    teachers at Shatha Alquran." />
                <meta
                    name="keywords"
                    content="Quran class pricing, online Quran lessons cost, 
                    Quran teacher fees, learn Quran online price, best Quran classes" />
                <meta
                    property="og:title"
                    content="Affordable Online Quran Classes | Pricing & Plans | Shatha Alquran" />
                <meta
                    property="og:description"
                    content="Check out our affordable Quran learning plans. 
                    Choose the best pricing plan for online Quran classes with experienced 
                    teachers at Shatha Alquran." />
            </Helmet>
            <PricingComp />
            <Footer />
        </div>
    );
};

export default PricingPage;
