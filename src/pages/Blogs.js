import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from '../components/Footer';
import BlogsCOMP from '../components/Blogs';
import Loading from '../components/Loading';

const Blogs = () => {
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
                <title>Islamic Blog | Learn Quran, Tafseer & Arabic | Shatha Alquran</title>
                <meta
                    name="description"
                    content="Explore our Islamic blog with articles on Quran learning, 
                    Tafseer, Arabic, and Islamic studies. Stay informed and inspired on your spiritual journey." />
                <meta
                    name="keywords"
                    content="Islamic blog, learn Quran, Tafseer articles, Arabic learning, 
                    Islamic studies, online Quran blog" />
                <meta
                    property="og:title"
                    content="Islamic Blog | Learn Quran, Tafseer & Arabic | Shatha Alquran" />
                <meta
                    property="og:description"
                    content="Explore our Islamic blog with articles on Quran learning, 
                    Tafseer, Arabic, and Islamic studies. Stay informed and inspired on your spiritual journey." />
            </Helmet>

            <BlogsCOMP slider={false} />
            <Footer />
        </div>
    );
};

export default Blogs;
