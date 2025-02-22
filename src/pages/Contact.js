import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from '../components/Footer';
import ContactComp from '../components/Contact';
import Loading from '../components/Loading';
const Contact = () => {
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
                <title>Contact Us | Get in Touch with Quran Experts | Shatha Alquran</title>
                <meta
                    name="description"
                    content="Have questions about Quran classes? 
                    Contact us now! We're here to help with online Quran lessons, pricing, 
                    and teacher availability." />
                <meta
                    name="keywords"
                    content="contact Quran teacher, online Quran class support, 
                    Quran learning help, Islamic education contact" />
                <meta
                    property="og:title"
                    content="Contact Us | Get in Touch with Quran Experts | Shatha Alquran" />
                <meta
                    property="og:description"
                    content="Have questions about Quran classes? 
                    Contact us now! We're here to help with online Quran lessons, pricing, 
                    and teacher availability." />
            </Helmet>
            <ContactComp />
            <Footer />
        </div>
    );
};

export default Contact;
