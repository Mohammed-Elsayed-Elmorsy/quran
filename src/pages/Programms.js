import React, { useEffect } from 'react'
import TopNav from '../components/TopNav'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProgComp from '../components/ProgComp'


const Programms = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div >
            <TopNav />
            <Header />
            <ProgComp />
            <Footer />
        </div>
    )
}

export default Programms