import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { pricing, pricingArabic } from '../utils/data'
import { FaCheck } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import LinksOfDetails from './LinksOfDetails'
const PricingComp = () => {
    const [currentid, setCurrentid] = useState(1)
    const lang = useSelector(state => state.lang.arabic)
    const state = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : lang
    return (
        <div className=' pricing pb-[70px] bg-light ' >
            <h2 className=' title'>

                {state ? 'اختار باقتك ' : 'pricing'}

                <FaCheck />
            </h2>
            <div className=' container mx-auto px-3 md:px-[70px] lg:px-[120px] '>
                <div>
                    <div className='flex justify-between gap-5 mb-6'>
                        {!state ? pricing.map(item =>
                            <Link id={item.id} onClick={(e) => setCurrentid((Number(e.target.id))
                            )}
                                className={` p-2 ${item.id === currentid ? 'bg-secondary text-white' : ' bg-white text-primary'}
                            border capitalize font-bold 
                             flex-1 text-center text-[20px]
                             transition-all duration-300 ease-in-out`}
                            >
                                {item.plan}
                            </Link>
                        ) : pricingArabic.map(item =>
                            <Link id={item.id} onClick={(e) => setCurrentid((Number(e.target.id))
                            )}
                                className={` p-2 ${item.id === currentid ? 'bg-secondary text-white' : ' bg-white text-primary'}
                            border capitalize font-bold 
                             flex-1 text-center text-[20px]
                             transition-all duration-300 ease-in-out`}
                            >
                                {item.plan}
                            </Link>
                        )}
                    </div>
                    <h2 className=' text-primary w-fit px-2 p-1 mx-auto font-bold md:text-[25px] lg:text-[30px] text-[22px] mb-6' >
                        <span>{state ? pricingArabic[currentid - 1].plan : pricing[currentid - 1].plan}</span>
                    </h2>
                    <div className='  grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  grid-cols-1 gap-4'>
                        {state ? pricingArabic[currentid - 1].classes.map(item =>
                            <div key={item.id}
                                className={` ${currentid === 1 ? 'pricing-1' : currentid === 2 ? 'pricing-2' : 'pricing-3'} shadow-md rounded-md gap-2 flex-col flex gap border  bg-white p-2`}>
                                <h3 className=' font-bold capitalize text-[20px] p-3 py-3 bg-primary text-white'>

                                    <span className=' text-[30px] font-bold'>{item.numberperweek}</span>
                                    الأسبوع

                                </h3>
                                <p className='text-[18px] bg-secondary text-white p-3'><span className=' text-[25px] font-bold'>{item.cost}</span>الشهر</p>

                                <span style={{ backgroundColor: '#eee' }} className='capitalize block p-3 text-[18px]'><span className='text-[30px] font-bold'>{item.numberpermonth}</span>الشهر</span>
                                <p style={{ backgroundColor: '#eee' }} className='capitalize p-3 text-[18px]'><span className='text-[30px] font-bold'>{item.costforclass}</span>الحصة</p>
                            </div>)
                            : pricing[currentid - 1].classes.map(item =>
                                <div key={item.id}
                                    className={` ${currentid === 1 ? 'pricing-1' : currentid === 2 ? 'pricing-2' : 'pricing-3'} shadow-md rounded-md  gap-2 flex-col flex gap border  bg-white p-2`}>
                                    <h3 className=' font-bold capitalize text-[20px] p-3 py-3 bg-primary text-white'>
                                        <span className=' text-[30px] font-bold'>{item.numberperweek}</span>week</h3>
                                    <p className='text-[18px] bg-secondary text-white p-3'><span className=' text-[25px] font-bold'>{item.cost}</span>month</p>

                                    <span style={{ backgroundColor: '#eee' }} className='capitalize block p-3 text-[18px]'><span className='text-[30px] font-bold'>{item.numberpermonth}</span>month</span>
                                    <p style={{ backgroundColor: '#eee' }} className='capitalize p-3 text-[18px]'><span className='text-[30px] font-bold'>{item.costforclass}</span>class</p>
                                </div>)}
                    </div>
                </div>
            </div>
            <LinksOfDetails />
        </div >
    )
}

export default PricingComp