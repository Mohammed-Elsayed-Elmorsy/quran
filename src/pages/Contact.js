import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import ContactComp from '../components/Contact'
const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div >
            <ContactComp />
            <Footer />
        </div>
    )
}

export default Contact