
import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutComp from '../components/AboutComp'
import { useEffect } from 'react';
import TopNav from '../components/TopNav';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <TopNav />
            <Header />
            <AboutComp />
            <Footer />
        </div>
    )
}

export default About