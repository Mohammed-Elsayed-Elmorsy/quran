import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from '../components/Footer';
import TeachersComp from '../components/Teachers';
import Loading from '../components/Loading';
const Teachers = () => {
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
                <title>Meet Our Expert Quran Teachers | Shatha Alquran</title>
                <meta
                    name="description"
                    content="Meet our highly qualified Quran teachers, all graduates from Al-Azhar University, 
                    certified with Ijazah and dedicated to teaching Quran online." />
                <meta
                    name="keywords"
                    content="Quran teachers, online Quran classes, certified Quran tutors, Al-Azhar teachers, 
                    Ijazah Quran, learn Quran online" />
                <meta
                    property="og:title"
                    content="Meet Our Expert Quran Teachers | Shatha Alquran" />
                <meta
                    property="og:description"
                    content="Meet our highly qualified Quran teachers, 
                    all graduates from Al-Azhar University, 
                    certified with Ijazah and dedicated to teaching Quran online." />
            </Helmet>
            <TeachersComp />
            <Footer />
        </div>
    );
};

export default Teachers;
