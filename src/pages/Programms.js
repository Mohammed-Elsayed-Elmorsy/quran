import React, { useEffect } from 'react'
import TopNav from '../components/TopNav'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { progs } from '../utils/data'
import { FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Programms = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div >
            <TopNav />
            <Header />
            <div className='choose Programms'>
                <h2 className='title ' >
                    our programms
                    <FaCheck />
                </h2>
                <div className=' container mx-auto px-7'>
                    {progs.map(item =>
                        <div className='item justify-between ' key={item.id} data-aos={item.aos}>
                            <img src={item.image} alt="" className=' h-[250px] object-cover' />
                            <h2 className=' title' style={{ fontSize: '20px' }}>{item.title}</h2>
                            <p className=' h-[110px]' data-aos="fade-up">{item.desc}</p>
                            <div className=' flex justify-between items-center ' style={{ zIndex: '1000', position: 'relative' }}>
                                <Link to={'/register'}>
                                    <button className=' btn-pri'>register now</button>
                                </Link>
                                <Link to={'/contact'}>
                                    <button className=' btn-sec'>contact us</button>
                                </Link>
                            </div>
                        </div>)}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Programms