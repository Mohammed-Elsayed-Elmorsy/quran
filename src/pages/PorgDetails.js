import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import { useSelector } from 'react-redux'
import { progs, progsArabic } from '../utils/data'
import { useParams } from 'react-router-dom'
import LinksOfDetails from '../components/LinksOfDetails'
import Loading from '../components/Loading'
const PorgDetails = () => {
    const lang = useSelector(state => state.lang.arabic)
    const state = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : lang
    const { id } = useParams()
    const [prog, setProg] = useState(null)
    const [loading, setloading] = useState(true)
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);
    useEffect(() => {
        setIndex(0); // Reset index for typing effect
        setDisplayText(""); // Clear previous text
        setTimeout(() => {
            setloading(false)
        }, 1000);
        const specificprog = !state ? progs.find(i => i.id.toString() === id) :
            progsArabic.find(i => i.id.toString() === id)
        setProg(specificprog)
        window.scrollTo(0, 0);
        setloading(true)
    }, [id])


    useEffect(() => {
        if (!prog?.title || index >= prog.title.length) return; // Wait until title is ready
        const timeout = setTimeout(() => {
            if (index < prog?.title.length) {
                // Typing forward
                setDisplayText((prev) => prev + prog?.title.charAt(index));
                setIndex((prev) => prev + 1);
            }
        }, 100);
        return () => clearTimeout(timeout);
    }, [index, prog]);



    if (loading) {
        return <Loading />
    }
    return (
        <div className='details-page bg-light'>
            <div className='details-page-content container  mx-auto px-8 md:px-[80px] lg:px-[100px]'>
                <h2 className=' title '>{displayText}</h2>
                <div className=' p-1 bg-white border border-gray-300  flex items-stretch'>
                    <img src={prog?.image} className='md:w-[50%] border lg:w-[50%] xl:w-[45%] object-cover hidden lg:block' alt="" />
                    <div className='xl:w-[55%] md:w-[100%] lg:w-[50%] w-full'>
                        <p className=' text-[16px] font-bold p-2 md:p-3'>
                            {prog?.desc}
                        </p>
                        <ul className=' p-2 md:p-3 text-[15px]'>
                            {prog?.points.map((point, index) => (
                                <li key={index} className=' text-[16px]'>
                                    <h4>
                                        {point.title}
                                    </h4>
                                    <span>
                                        {point.info}
                                    </span>
                                </li>
                            ))}
                        </ul>


                    </div>
                </div>
            </div>
            <div className=' py-[50px]'>
                <LinksOfDetails />
            </div>
            <Footer />
        </div>
    )
}

export default PorgDetails