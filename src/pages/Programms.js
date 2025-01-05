import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import ProgComp from '../components/ProgComp'
import Loading from '../components/Loading'

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
        return <Loading />
    }
    return (
        <div >
            <ProgComp />
            <Footer />
        </div>
    )
}

export default Programms