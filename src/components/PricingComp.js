import React from 'react'
import { Link } from 'react-router-dom'
import { pricing } from '../utils/data'

const PricingComp = () => {
    return (
        <div className=' pricing'>
            <div className=' container mx-auto px-7 pb-[70px]'>
                <h2 className=' title'>
                    choose your plan
                </h2>
                <div className=' content grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  grid-cols-1 gap-6'>
                    {pricing.map(item =>
                        <div data-aos="zoom-in" key={item.id} className=' relative p-2 flex flex-col justify-between gap-4'>
                            <img src={item.image} alt="" className=' object-cover h-[150px]' />
                            <h2 className=' font-bold capitalize text-[22px]'>{item.title}</h2>
                            <p className=' mt-[-10px]'>{item.desc}</p>
                            <div>
                                <h3 className=' text-[20px] capitalize'>
                                    features
                                </h3>
                                <ul className='list-[square] p-5'>
                                    {item.features.map(feat => (<li className='' key={feat}>{feat}</li>))}
                                </ul>
                            </div>
                            <span className=' font-bold capitalize text-[25px]'>
                                {item.price}
                            </span>
                            <div className=' flex justify-between items-center'>
                                <Link to={'/contact'}>
                                    <button className=' btn-pri'>contact us</button>
                                </Link>
                                <button className=' btn-sec'>select plan</button>
                            </div>
                        </div>)}
                </div>
            </div>
        </div>
    )
}

export default PricingComp