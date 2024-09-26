import React from 'react'
import Header from '../components/Header'
import { teaches } from '../utils/data'
import { FaCheck, FaEnvelope, FaFacebook, FaWhatsapp } from 'react-icons/fa'
import Footer from '../components/Footer'

const Teachers = () => {
    return (
        <div>
            <div className='p-2 bg-blue-500 upper-header'>
                <div className="container mx-auto px-5  py-2 flex justify-between items-center">
                    <span className=' rounded-md capitalize bg-orange-400 block p-3 text-slate-100'>start with us now</span>
                    <span className=' flex gap-3 items-center text-[25px] upper-span'>
                        <span><FaWhatsapp /></span>
                        <span><FaFacebook /></span>
                        <span><FaEnvelope /></span>
                    </span>
                </div>
            </div>
            <Header />
            <div className=' teachers pb-[70px]'>
                <div className=' container px-5 mx-auto'>
                    <h2 className=' title  flex items-center gap-2'>
                        Our Teachers
                        <FaCheck />
                    </h2>
                    <div className=' content grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6'>
                        {teaches.map(item =>
                            <div data-aos="zoom-in" key={item.id} className=' relative p-2 flex flex-col gap-4'>
                                <img src={item.image} alt="" className=' object-cover h-[150px]' />
                                <h2 className=''>{item.name}</h2>
                                <p>{item.desc}</p>
                                <div className=' flex justify-between items-center'>
                                    <button className=' btn-pri'>read more</button>
                                    <button className=' btn-sec'>select teacher</button>
                                </div>
                            </div>)}
                    </div>
                </div>
            </div>
<Footer/>
        </div>
    )
}

export default Teachers