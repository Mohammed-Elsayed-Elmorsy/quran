import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';
import { progs, progsArabic } from '../utils/data';
import { useParams } from 'react-router-dom';
import LinksOfDetails from '../components/LinksOfDetails';
import Loading from '../components/Loading';

const PorgDetails = () => {
    const { dark } = useSelector(state => state.mode);
    const mode = localStorage.getItem('dark') ? JSON.parse(localStorage.getItem('dark')) : dark;
    const lang = useSelector(state => state.lang.arabic);
    const state = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : lang;
    const { id } = useParams();
    const [prog, setProg] = useState(null);
    const [loading, setLoading] = useState(true);
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setIndex(0); // Reset index for typing effect
        setDisplayText(""); // Clear previous text
        setTimeout(() => {
            setLoading(false);
        }, 1000);
        const specificProg = !state ? progs.find(i => i.id.toString() === id) :
            progsArabic.find(i => i.id.toString() === id);
        setProg(specificProg);
        window.scrollTo(0, 0);
        setLoading(true);
    }, [id]);

    useEffect(() => {
        if (!prog?.title || index >= prog.title.length) return;
        const timeout = setTimeout(() => {
            if (index < prog?.title.length) {
                setDisplayText((prev) => prev + prog?.title.charAt(index));
                setIndex((prev) => prev + 1);
            }
        }, 100);
        return () => clearTimeout(timeout);
    }, [index, prog]);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className={mode ? 'bg-dark' : 'bg-light'}>
            {/* Helmet for SEO */}
            <Helmet>
                <title>{prog?.title} | Shatha Alquran</title>
                <meta name="description" content={prog?.desc} />
                <meta name="keywords" content="Quran programs, Quran memorization, Tajweed classes, Islamic education online, Quran courses" />
                <meta property="og:title" content={`${prog?.title} | Shatha Alquran`} />
                <meta property="og:description" content={prog?.desc} />
            </Helmet>
            <div className='details-page-content container mx-auto px-8 md:px-[70px] lg:px-[180px] xl:px-[150px]'>
                <h2 className='title'>{displayText}</h2>
                <div className={'p-2 flex ' + (mode ? 'bg-lighter text-light shadow-black shadow' : 'bg-white border border-gray-300')}>
                    <img src={prog?.image} className='md:w-[50%] lg:w-[50%] xl:w-[50%] object-cover hidden lg:block' alt="" />
                    <div className='xl:w-[50%] md:w-[100%] lg:w-[50%] w-full'>
                        <p className='text-[16px] font-bold p-2 md:p-3'>{prog?.desc}</p>
                        <ul className='p-2 md:p-3 text-[15px]'>
                            {prog?.points.map((point, index) => (
                                <li key={index} className='text-[16px]'>
                                    <h4>{point.title}</h4>
                                    <span>{point.info}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className='py-[50px]'>
                <LinksOfDetails />
            </div>
            <Footer />
        </div>
    );
};

export default PorgDetails;
