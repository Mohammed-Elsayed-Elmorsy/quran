import React, { useState, useEffect } from 'react';
import img from '../static/mosque6.jpg'
import img2 from '../static/mosque4.png'
import img3 from '../static/mosque1.png'
import img4 from '../static/mosque3.png'
const Slideshow = ({ children }) => {
    const images = [img, img2, img3, img4];
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='slideshow   landing flex justify-center items-center '
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
