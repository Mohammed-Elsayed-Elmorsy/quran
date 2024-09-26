import React, { useState } from 'react'
import Header from '../components/Header'
import Landing from '../components/Landing'
import Footer from '../components/Footer'
import Choose from '../components/Choose'
import About from '../components/AboutComp'
import Teachers from '../components/Teachers'
import Reviews from '../components/Reviews'
import Contact from '../components/Contact'
import Blogs from '../components/Blogs'
import TopNav from '../components/TopNav'
import PopUp from '../components/PopUp'
import { FaMessage } from 'react-icons/fa6'

const Home = () => {
    const [isVisible, setIsVisible] = useState(true);
    return (
        <div>
            <span className=' show-message' onClick={() => setIsVisible(!isVisible)}>
                <FaMessage />
            </span>
            <PopUp isVisible={isVisible} />
            <TopNav />
            <Header />
            <Landing />
            <About />
            <Choose />
            <Teachers />
            <Blogs />
            <Reviews />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home