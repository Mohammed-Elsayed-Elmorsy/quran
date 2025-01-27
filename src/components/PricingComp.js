import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { pricing, pricingArabic } from '../utils/data'
import { useSelector } from 'react-redux'
import LinksOfDetails from './LinksOfDetails'
const PricingComp = () => {
    const [currentid, setCurrentid] = useState(1)
    const lang = useSelector(state => state.lang.arabic)
    const state = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : lang
    return (
        <div className=' pricing pb-[50px] bg-light ' >
            <h2 className=' title'>

                {state ? 'اختر باقتك ' : 'pricing'}

            </h2>
            <div className=' container mx-auto px-6 md:px-[70px] lg:px-[80px] xl:px-[100px] '>
                <div>
                    <div className='flex justify-between gap-3 mb-6'>
                        {!state ? pricing.map(item =>
                            <Link id={item.id} onClick={(e) => setCurrentid((Number(e.target.id))
                            )}
                                className={` p-[6px] text-[15px]  lg:text-[16px] ${item.id === currentid ? 'bg-secondary text-white' : ' bg-white text-primary'}
                            border capitalize font-bold 
                             flex-1 text-center 
                             transition-all duration-300 ease-in-out`}
                            >
                                {item.plan}
                            </Link>
                        ) : pricingArabic.map(item =>
                            <Link id={item.id} onClick={(e) => setCurrentid((Number(e.target.id))
                            )}
                                className={` p-[8px] text-[14px]  lg:text-[16px] ${item.id === currentid ? 'bg-secondary text-white' : ' bg-white text-primary'}
                            border capitalize font-bold 
                             flex-1 text-center 
                             transition-all duration-300 ease-in-out`}
                            >
                                {item.plan}
                            </Link>
                        )}
                    </div>
                    <div className=' text-center w-fit mx-auto font-bold text-[20px] lg:text-[24px] mb-4' >
                        <span>{state ? pricingArabic[currentid - 1].plan : pricing[currentid - 1].plan}</span>
                    </div>
                    <div className='  grid ld:grid-cols-3 xl:grid-cols-4  grid-cols-2 gap-4'>
                        {state ? pricingArabic[currentid - 1].classes.map(item =>
                            <div key={item.id}
                                className={`  ${currentid === 1 ? 'pricing-1' : currentid === 2 ? 'pricing-2' : 'pricing-3'}    flex-col flex  border border-gray-300 p-2  bg-white`}>
                                <div className=' font-normal capitalize text-[15px] p-[6px] py-2 bg-primary text-white'>

                                    <span className=' lg:text-[18px] text-[15px] font-bold'>
                                        {item.numberperweek}
                                    </span>
                                    الأسبوع

                                </div>
                                <p className=' text-[15px] bg-secondary text-white p-[6px] py-2'>
                                    <span className=' lg:text-[18px] text-[15px] font-bold'>{item.cost}</span>الشهر</p>

                                <span style={{ backgroundColor: '#eee' }}
                                    className='capitalize block p-1  text-[15px]'>
                                    <span className='lg:text-[18px] text-[15px] font-bold'>{item.numberpermonth}
                                    </span>الشهر</span>
                                <p style={{ backgroundColor: '#eee' }}
                                    className='capitalize p-1  text-[15px]'>
                                    <span className='lg:text-[18px] text-[15px] font-bold'>{item.costforclass}</span>الحصة</p>
                            </div>)
                            : pricing[currentid - 1].classes.map(item =>
                                <div key={item.id}
                                    className={`  ${currentid === 1 ? 'pricing-1' : currentid === 2 ? 'pricing-2' : 'pricing-3'}     flex-col flex border border-gray-300 p-2 bg-white`}>
                                    <div className=' font-normal capitalize  text-[14px] p-[6px] py-2 bg-primary text-white'>
                                        <span className=' lg:text-[18px] text-[15px] font-bold'>
                                            {item.numberperweek}
                                        </span>
                                        week
                                    </div>
                                    <p className='text-[15px]  bg-secondary text-white p-[6px] py-2'>
                                        <span className='lg:text-[18px] text-[15px] font-bold'>{item.cost}</span>month</p>

                                    <span style={{ backgroundColor: '#eee' }}
                                        className='capitalize block p-[6px]  text-[15px]'>
                                        <span className='lg:text-[18px] text-[15px] font-bold'>{item.numberpermonth}</span>month</span>
                                    <p style={{ backgroundColor: '#eee' }}
                                        className='capitalize p-[6px]  text-[15px]'>
                                        <span className='lg:text-[18px] text-[15px] font-bold'>{item.costforclass}</span>class</p>
                                </div>)}
                    </div>
                </div>
            </div>
            <div className=' pt-[50px]'>
                <LinksOfDetails />
            </div>
        </div >
    )
}

export default PricingComp