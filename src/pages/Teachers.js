import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import TeachersComp from '../components/Teachers'
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
        return <Loading />
    }
    return (
        <div>
            <TeachersComp />
            <Footer />
        </div>
    )
}

export default Teachers