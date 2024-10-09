import React from 'react'
import { Link } from 'react-router-dom'
import { pricing, pricingArabic } from '../utils/data'
import { FaCheck } from 'react-icons/fa'
import { useSelector } from 'react-redux'

const PricingComp = () => {
    const lang = useSelector(state => state.lang.arabic)
    const state = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : lang
    return (
        <div className=' pricing pb-[70px]'>
            <h2 className=' title'>

                {state ? 'اختار باقتك  :' : 'choose your plan '}

                <FaCheck />
            </h2>
            <div className=' container mx-auto px-7 '>
                <div className=' content grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  grid-cols-1 gap-6'>
                    {!state ? pricing.map(item =>
                        <div data-aos="zoom-in" key={item.id} className='rounded-md relative p-2 flex flex-col justify-between gap-4'>
                            <img src={item.image} alt="" className=' object-cover h-[180px]' />
                            <h2 className=' font-bold capitalize text-[22px]'>{item.title}</h2>
                            <p className='text-[19px] mt-[-10px]'>{item.desc}</p>
                            <div>
                                <h3 className=' text-[21px] capitalize'>
                                    {state ? 'المميزات ' : 'features '}
                                </h3>
                                <ul className='list-[square] p-5 h-[120px]'>
                                    {item.features.map(feat => (<li className=' text-[17px]' key={feat}>{feat}</li>))}
                                </ul>
                            </div>
                            <span className=' font-bold capitalize text-[25px]'>
                                {item.price}
                            </span>
                            <div className=' flex gap-2 items-center'>
                                <Link to={'/contact'} className=' flex-1'>
                                    <button className='w-full btn-pri'>contact us</button>
                                </Link>
                                <button className=' flex-1 btn-sec'>select</button>
                            </div>
                            <div className=' after absolute top-0 left-0 h-[160px] w-[100%]  bg-slate-400'>

                            </div>
                        </div>) : pricingArabic.map(item =>
                            <div data-aos="zoom-in" key={item.id} className='rounded-md relative p-2 flex flex-col justify-between gap-4'>
                                <img src={item.image} alt="" className=' object-cover h-[180px]' />
                                <h2 className=' font-bold capitalize text-[22px]'>{item.title}</h2>
                                <p className='text-[20px] mt-[-10px]'>{item.desc}</p>
                                <div>
                                    <h3 className=' text-[22px] capitalize'>
                                        المميزات
                                    </h3>
                                    <ul className='list-[square] p-5 h-[120px]'>
                                        {item.features.map(feat => (<li className=' text-[19px]' key={feat}>{feat}</li>))}
                                    </ul>
                                </div>
                                <span className=' font-bold capitalize text-[25px]'>
                                    {item.price}
                                </span>
                                <div className=' flex gap-2 items-center'>
                                    <Link to={'/contact'} className=' flex-1'>
                                        <button className='w-full btn-pri'>

                                            {state ? ' تواصل معنا  ' : 'contact us'}
                                        </button>
                                    </Link>
                                    <button className=' flex-1 btn-sec'>

                                        {state ? 'اختار الباقة ' : 'select'}
                                    </button>
                                </div>
                                <div className=' after absolute top-0 left-0 h-[160px] w-[100%] bg-slate-400'>

                                </div>
                            </div>)}
                </div>
            </div>
        </div>
    )
}

export default PricingComp