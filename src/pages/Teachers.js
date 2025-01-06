import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import TeachersComp from '../components/Teachers'


const Teachers = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <TeachersComp />
            <Footer />
        </div>
    )
}

export default Teachers