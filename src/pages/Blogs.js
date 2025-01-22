import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import BlogsCOMP from '../components/Blogs'
import Loading from '../components/Loading';
import LinksOfDetails from '../components/LinksOfDetails';

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
        return <Loading />
    }
    return (
        <div>
            <BlogsCOMP slider={false} />

            <Footer />

        </div>
    )
}

export default Blogs