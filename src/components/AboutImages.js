import React from 'react'

const AboutImages = ({ mode, image, image2, image3, image4 }) => {
    return (
        <div className=' grid grid-cols-2  md:grid-cols-3 xl:grid-cols-4 auto-rows-fr auto-cols-fr gap-4 text-center'>
            <img
                data-aos={'fade-up'}
                src={image} alt="learn quran about us images shatha alquran shatha quran"
                className={`p-1 
                ${mode ? ' bg-lighter shadow shadow-black' : 'bg-white shadow shadow-slate-400'}  w-full h-[150px]   xl:h-[200px] object-cover`} />
            <img
                data-aos={'fade-down'}
                src={image2} alt="learn quran about us images shatha alquran shatha quran"
                className={`p-1 
                ${mode ? ' bg-lighter shadow shadow-black' : 'bg-white shadow shadow-slate-400'} w-full  h-[150px]   xl:h-[200px] object-cover`} />
            <img
                data-aos={'fade-up'}
                src={image3} alt="learn quran about us images shatha alquran shatha quran"
                className={`p-1 
                ${mode ? ' bg-lighter shadow shadow-black' : 'bg-white shadow shadow-slate-400'}  w-full h-[150px]   xl:h-[200px] object-cover`} />
            <img
                data-aos={'fade-down'}
                src={image4} alt="learn quran about us images shatha alquran shatha quran"
                className={`p-1 
                ${mode ? ' bg-lighter shadow shadow-black' : 'bg-white shadow shadow-slate-400'} w-full  h-[150px]   xl:h-[200px] object-cover`} />
        </div>
    )
}

export default AboutImages