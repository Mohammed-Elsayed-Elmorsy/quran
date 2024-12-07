import React, { useEffect } from 'react'
import TopNav from '../components/TopNav'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Revision = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <div>

                <h2 className=' title'>
                    Revision
                </h2>
            </div>
            <Footer />
        </div>
    )
}

export default Revision