import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import ContactComp from '../components/Contact'
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
        return <Loading />
    }
    return (
        <div >
            <ContactComp />
            <Footer />
        </div>
    )
}


export default Contact