import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import { blogs, blogsArabic } from '../utils/data';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LinksOfDetails from '../components/LinksOfDetails';
import { GoShare, GoCopy, GoVideo, GoBell } from 'react-icons/go';
import Loading from '../components/Loading';
import { Helmet } from 'react-helmet-async';
import RelatedItem from '../components/RelatedItem';
const BlogDetails = () => {
    const { dark } = useSelector(state => state.mode);
    const mode = localStorage.getItem('dark') ? JSON.parse(localStorage.getItem('dark')) : dark;
    const lang = useSelector(state => state.lang.arabic);
    const state = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : lang;
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);
    useEffect(() => {
        setIndex(0); // Reset index for typing effect
        setDisplayText(""); // Clear previous text
        setTimeout(() => {
            setLoading(false);
        }, 1000);
        const specificProg = !state ? blogs.find(i => i.id.toString() === id) :
            blogsArabic.find(i => i.id.toString() === id);
        setBlog(specificProg);
        window.scrollTo(0, 0);
        setLoading(true);
    }, [id]);

    useEffect(() => {
        if (!blog?.title || index >= blog.title.length) return;
        const timeout = setTimeout(() => {
            if (index < blog?.title.length) {
                setDisplayText((prev) => prev + blog?.title.charAt(index));
                setIndex((prev) => prev + 1);
            }
        }, 80);
        return () => clearTimeout(timeout);
    }, [index, blog]);


    if (loading) {
        return <Loading />;
    }
    return (
        <div className={`details-page ${mode ? 'bg-dark' : 'bg-light'}`}>
            {/* Helmet for SEO */}
            <Helmet>
                <title>{blog?.title} | Shatha Alquran Blog</title>
                <meta
                    name="description"
                    content={blog?.desc} />
                <meta
                    name="keywords"
                    content="Quran, Islamic Blog, 
                Quran Teaching, Quran Education, Shatha Alquran, Online Quran" />
                <meta
                    property="og:title"
                    content={`${blog?.title} | Shatha Alquran`} />
                <meta
                    property="og:description"
                    content={blog?.desc} />
                <meta
                    property="og:image"
                    content={blog?.image[0]} />
            </Helmet>
            <div className='details-page-content'>
                <div className='container px-6 md:px-[40px] lg:px-[60px] xl:px-[150px] mx-auto pb-[30px]'>
                    <h2 className='title !pt-5 !pb-5 text-center'>
                        {displayText}
                    </h2>
                    <div className='flex justify-between flex-col items-center'>
                        <div className='flex justify-center gap-4 pb-5 items-center w-full mx-auto'>
                            <span className='flex items-center gap-1'>
                                <img
                                    src={blog?.image[1]}
                                    className={`p-[3px] ${mode ? 'bg-lighter shadow shadow-black' : 'bg-white shadow shadow-slate-400'} 
                                                w-[40px] h-[38px] rounded-full object-cover`}
                                    alt={blog?.title} />
                                <div>
                                    <h3 className='capitalize text-[14px]'>
                                        {!state ? "shatha Alqur'an" :
                                            'شذا القرآن'}</h3>
                                    <p className='text-[14px] mt-[-5px] text-gray-500'>12/12/2021</p>
                                </div>
                            </span>
                            <span className={`flex items-center gap-3 
                                ${mode ? 'text-light' : ''} text-[18px]`}>
                                <GoShare />
                                <GoVideo />
                                <GoCopy />
                                <GoBell />
                            </span>
                        </div>
                        <div className='grid-area'>
                            <div>
                                <img className={`p-1
                                    ${mode ? 'bg-lighter shadow shadow-black' : 'bg-white shadow shadow-slate-400'} w-full h-full `}
                                    src={blog?.image[0]} alt="" />
                            </div>
                            <div>
                                <img className={`p-1 
                                    ${mode ? 'bg-lighter shadow shadow-black' : 'bg-white shadow shadow-slate-400'} w-full h-full object-cover`}
                                    src={blog?.image[1]} alt="" />
                            </div>
                            <div>
                                <img className={`p-1 transition 
                                    ${mode ? 'bg-lighter shadow shadow-black' : 'bg-white shadow shadow-slate-400'} w-full h-full object-cover`}
                                    src={blog?.image[2]} alt="" />
                            </div>
                            <div>
                                <img className={`p-1 
                                    ${mode ? 'bg-lighter shadow shadow-black' : 'bg-white shadow shadow-slate-400'} w-full h-full object-cover`}
                                    src={blog?.image[3]} alt="" />
                            </div>
                        </div>
                        <div className='flex items-start'>
                            <p className={`text-[16px] w-full mt-5 p-3 
                                ${mode ? 'bg-lighter shadow shadow-black text-textDark ' : 'bg-white border border-slate-300'}`}>
                                {blog?.desc}
                            </p>
                        </div>
                        <div>
                            {blog?.details.map(item =>
                                <div>
                                    <p data-aos="fade-up" data-aos-delay="200" className={`
                                    text-[16px] w-full p-3
                                ${mode ? 'bg-lighter shadow shadow-black text-textDark ' :
                                            'bg-white border border-slate-300'}`}>
                                        <h3 className='text-[20px] font-bold py-3'>
                                            {item.title}
                                        </h3>
                                        {item.desc.includes('1.') ? item.desc.split(/1\.|2\.|3\.|4\.|5\./)
                                            .filter((text, index) => index > 0)
                                            .map((item, index) =>
                                                <div className={`
                                                    ${mode ? 'bg-lighter  text-textDark ' :
                                                        'bg-white'}`}
                                                    key={index}>
                                                    -{item}
                                                </div>) : item.desc.includes('•') ? item.desc.split(/•/)
                                                    .filter((text, index) => index > 0)
                                                    .map((item, index) =>
                                                        <div className={`
                                                    ${mode ? 'bg-lighter  text-textDark ' :
                                                                'bg-white'}`}
                                                            key={index}>
                                                            -{item}
                                                        </div>) :
                                            item.desc
                                        }
                                    </p>
                                </div>
                            )}
                        </div>
                        <p data-aos="fade-up" data-aos-delay="200" className={`text-[16px] w-full p-3 
                                ${mode ? 'bg-lighter shadow shadow-black text-textDark ' :
                                'bg-white border border-slate-300'}`}>
                            {blog?.conclusion}
                        </p>
                    </div>
                </div>
            </div>
            <div className='container px-6  md:px-[40px] lg:px-[80px] xl:px-[140px] mx-auto pb-[70px]'>
                <div>
                    <h2 className='text-[25px] font-bold my-[20px]'>
                        {!state ? 'Related Blogs' : 'المواضيع ذات الصلة'}</h2>
                    <div className='grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                        {!state
                            ?
                            blogs.filter(i => i.id !== Number(id)).map(item =>
                                <RelatedItem  {...item} mode={mode} />
                            )
                            :
                            blogsArabic.filter(i => i.id !== Number(id)).map(item =>
                                <RelatedItem  {...item} mode={mode} />
                            )}
                    </div>
                </div>
                <div className='pt-[50px]'>
                    <LinksOfDetails />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default BlogDetails;
