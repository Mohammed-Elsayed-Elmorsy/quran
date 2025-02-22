import React, { useState, useEffect } from 'react';
import img1 from '../static/mosque1.png'
import img2 from '../static/mosque2.png'
import img3 from '../static/mosque3.png'
import img4 from '../static/mosque4.png'
import img5 from '../static/mosque5.png'
import img6 from '../static/mosque6.jpg'
import img7 from '../static/mosque7.png'
import img8 from '../static/mosque8.png'
import { useSelector } from 'react-redux';
const Slideshow = ({ children }) => {
    const { dark } = useSelector(state => state.mode);
    const mode = localStorage.getItem('dark') ? JSON.parse(localStorage.getItem('dark')) : dark;
    const images = [img1, img2, img3, img4, img5, img6, img7, img8];
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`slideshow landing flex justify-center items-center 
            ${mode ? 'after:bg-afterdark' : 'after:bg-afterlight'}
            `}
            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                backgroundImage: `url(${images[currentIndex]})`,
                transition: 'background-image 1.5s ease-in-out',
            }}
        >
            {children}
        </div>
    );
};

export default Slideshow;
