import React from 'react'

const PricingItem = ({ costforclass, id, state, numberperweek, numberpermonth, cost, currentid, mode }) => {
    return (
        <div key={id}
            className={`  
            ${currentid === 1 ? 'pricing-1' :
                    currentid === 2 ? 'pricing-2' : 'pricing-3'}  
                    ${mode ? 'bg-lighter shadow shadow-black' : 'bg-white shadow shadow-slate-400'}  
                    flex-col flex   border-gray-300 `}>
            <div
                className=' font-normal capitalize text-[15px] p-[6px] py-2 bg-primary text-light'>
                <span
                    className=' lg:text-[18px] text-[15px] font-bold'>
                    {numberperweek}
                </span>
                {state ? ' الاسبوع' : 'week'}
            </div>
            <p
                className={` text-[15px]  
                    ${mode ? 'bg-primarylighter ' : 'bg-secondary '} 
                text-light p-[6px] py-2`}>
                <span className=' lg:text-[18px] text-[15px] font-bold'>
                    {cost}</span>{state ? ' الشهر' : 'month'}</p>
            <span
                style={!mode ?
                    { backgroundColor: '#ccc' } :
                    { backgroundColor: '#1a1a1a', color: '#ccc' }}
                className='capitalize block p-1  text-[15px]'>
                <span
                    className='lg:text-[18px] text-[15px] font-bold'>
                    {numberpermonth}
                </span>
                {state ? 'الشهر' : 'month'}</span>
            <p style={!mode ?
                { backgroundColor: '#eee' } :
                { backgroundColor: '#131313', color: '#ccc' }}
                className='capitalize p-1  text-[15px]'>
                <span className='lg:text-[18px] text-[15px] font-bold'>
                    {costforclass}
                </span>
                {state ? 'الحصة' : 'class'}
            </p>
        </div >
    )
}

export default PricingItem