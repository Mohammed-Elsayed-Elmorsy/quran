import React, { useEffect, useState } from 'react'
import { pricing, pricingArabic } from '../utils/data'
import { useSelector } from 'react-redux'
import LinksOfDetails from './LinksOfDetails'
import PricingItem from './PricingItem'
import PlanItem from './PlanItem'
const PricingComp = () => {
    const { dark } = useSelector(state => state.mode)
    const mode = localStorage.getItem('dark') ? JSON.parse(localStorage.getItem('dark')) : dark
    const [currentid, setCurrentid] = useState(1)
    const lang = useSelector(state => state.lang.arabic)
    const state = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : lang
    const text = state ? 'اختر باقتك ' : 'pricing'
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (index < text.length) {
                setDisplayText((prev) => prev + text.charAt(index));
                setIndex((prev) => prev + 1);
            }
        }, 130);
        return () => clearTimeout(timeout);
    }, [index, text]);
    return (
        <div className={' pb-[50px] ' + (mode ? 'bg-dark' : 'bg-light')} >
            <h2 className='title'>
                {displayText}
            </h2>
            <div className='container mx-auto px-6 md:px-[40px] lg:px-[60px] xl:px-[150px] '>
                <div>
                    <div className='flex justify-between gap-3 mb-6'>
                        {!state
                            ?
                            pricing.map(item =>
                                <PlanItem
                                    {...item}
                                    mode={mode}
                                    setCurrentid={setCurrentid}
                                    currentid={currentid} />)
                            :
                            pricingArabic.map(item =>
                                <PlanItem
                                    {...item}
                                    mode={mode}
                                    setCurrentid={setCurrentid}
                                    currentid={currentid} />
                            )}
                    </div>
                    <div className='text-center w-fit mx-auto font-bold text-[20px] lg:text-[24px] mb-6' >
                        <span className={`${mode ? 'text-textDark' : 'text-primary'}`}  >
                            {state
                                ?
                                pricingArabic[currentid - 1].plan
                                :
                                pricing[currentid - 1].plan
                            }
                        </span>
                    </div>
                    <div className='grid ld:grid-cols-3 xl:grid-cols-4 grid-cols-2 gap-4'>
                        {state
                            ?
                            pricingArabic[currentid - 1].classes.map(item =>
                                <PricingItem {...item} mode={mode} state={state} currentid={currentid} />)
                            :
                            pricing[currentid - 1].classes.map(item =>
                                <PricingItem {...item} mode={mode} state={state} currentid={currentid} />)
                        }
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