import React, { useState, useEffect } from 'react';
import img from '../static/mosque6.jpg'
import img2 from '../static/mosque4.png'
import img3 from '../static/mosque1.png'
const Slideshow = ({ children }) => {
    const images = [img, img2, img3];
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='slideshow   landing flex justify-center items-center '
            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                backgroundImage: `url(${images[currentIndex]})`,
                transition: 'background-image 2s ease-in-out',
            }}
        >
            {children}
        </div>
    );
};

export default Slideshow;
