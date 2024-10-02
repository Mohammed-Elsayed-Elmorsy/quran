import React, { useEffect } from 'react'
import TopNav from '../components/TopNav'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Studies = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <TopNav />
            <Header />
            <div>

                <h2 className=' title'>
                    Studies of islam
                </h2>
            </div>
            <Footer />
        </div>
    )
}

export default Studies