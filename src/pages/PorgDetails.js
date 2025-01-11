import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import { useSelector } from 'react-redux'
import { progs, progsArabic, teachersArabic, teaches } from '../utils/data'
import { Link, useParams } from 'react-router-dom'
import LinksOfDetails from '../components/LinksOfDetails'
import Loading from '../components/Loading'
const PorgDetails = () => {
    const lang = useSelector(state => state.lang.arabic)
    const state = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : lang
    const { id } = useParams()
    const [prog, setProg] = useState(null)
    const [loading, setloading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setloading(false)
        }, 2000);
        const specificprog = !state ? progs.find(i => i.id.toString() === id) :
            progsArabic.find(i => i.id.toString() === id)
        setProg(specificprog)
        window.scrollTo(0, 0);
        setloading(true)
    }, [id])
    if (loading) {
        return <Loading />
    }
    return (
        <div className='details-page bg-light'>
            <div className='details-page-content container  mx-auto px-8'>
                <h2 className=' title '>{prog?.title}</h2>
                <div className=' p-5 bg-white border border-gray-300  flex justify-between items-stretch  gap-2   '>
                    <img src={prog?.image} className='md:w-[50%] lg:w-[45%] xl:w-[40%] object-cover hidden lg:block' alt="" />
                    <div className='xl:w-[58%] md:w-[100%] lg:w-[54%] w-full'>
                        <p className=' text-[20px] font-bold py-4'>
                            {prog?.desc}
                        </p>
                        <ul>
                            {prog?.points.map((point, index) => (
                                <li key={index} className=' text-[20px]'>
                                    <h4>
                                        {point.title}
                                    </h4>
                                    <span>
                                        {point.info}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <h4 className='text-[20px] mt-[20px] md:text-[26px] font-bold'>{state ? 'المعلمون المختصون لهذا البرنامج' : 'Teachers for the program'}</h4>
                        <div className='flex gap-4 flex-col md:flex-row'>
                            {state ? teachersArabic.map((teacher, index) => (
                                <Link to={`/teachers/${teacher.id}`} key={index} className='flex items-center gap-1 '>
                                    <img src={teacher.image} className='w-[50px] h-[50px] rounded-full object-cover ' alt="" />
                                    <span className=' underline font-bold text-[16px]'>{teacher.name}</span>
                                </Link>
                            ))
                                :
                                teaches.map((teacher, index) => (
                                    <Link to={`/teachers/${teacher.id}`} key={index} className='flex items-center gap-1'>
                                        <img src={teacher.image} className='w-[50px] h-[50px] rounded-full object-cover ' alt="" />
                                        <span className=' underline font-bold text-[16px]'>{teacher.name}</span>
                                    </Link>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className=' pb-[70px]'>
                <LinksOfDetails />
            </div>
            <Footer />
        </div>
    )
}

export default PorgDetails