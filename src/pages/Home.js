import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Landing from '../components/Landing';
import Footer from '../components/Footer';
import Choose from '../components/Choose';
import About from '../components/AboutComp';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';
import Blogs from '../components/Blogs';
import ProgComp from '../components/ProgComp';
import Loading from '../components/Loading';
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
        return <Loading />;
    }
    return (
        <div>
            {/* Helmet for SEO Metadata */}
            <Helmet>
                <title>Shatha Alquran - Learn Quran Online</title>
                <meta
                    name="description"
                    content="Join Shatha Alquran Academy for expert Quran learning, Tajweed, and 
                    Islamic studies. Sign up today for free trial classes!" />
                <meta
                    name="keywords"
                    content="Quran classes, online Quran school, learn Tajweed, Islamic education" />
                <meta
                    name="author"
                    content="Shatha Alquran Academy" />
                <meta
                    property="og:title"
                    content="Shatha Alquran - Learn Quran Online" />
                <meta
                    property="og:description"
                    content="Join expert Quran teachers for online learning and Tajweed. 
                    Start your journey today!" />
            </Helmet>
            {/* Page Components */}
            <Landing />
            <About more={true} />
            <Choose />
            <ProgComp />
            <Blogs slider={true} />
            <Reviews />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;
