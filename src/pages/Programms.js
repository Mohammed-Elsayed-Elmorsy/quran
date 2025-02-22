import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from '../components/Footer';
import ProgComp from '../components/ProgComp';
import Loading from '../components/Loading';
const Programms = () => {
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
                <title>Our Quran Learning Programs | Shatha Alquran</title>
                <meta
                    name="description"
                    content="Explore our Quran learning programs, 
                    including Tajweed, Tafsir, and memorization courses for all ages and skill levels." />
                <meta
                    name="keywords"
                    content="Quran programs, Quran memorization, Tajweed classes, Islamic education online" />
                <meta
                    property="og:title"
                    content="Our Quran Learning Programs | Shatha Alquran" />
                <meta
                    property="og:description"
                    content="Explore our Quran learning programs, 
                    including Tajweed, Tafsir, and memorization courses for all ages and skill levels." />
            </Helmet>
            <ProgComp />
            <Footer />
        </div>
    );
};

export default Programms;
