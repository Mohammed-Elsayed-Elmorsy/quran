import React, { useEffect, useState } from 'react'
import { progs, progsArabic } from '../utils/data'
import { useSelector } from 'react-redux'
import SingleProg from './SingleProg'

const ProgComp = () => {
    const { dark } = useSelector(state => state.mode)
    const mode = localStorage.getItem('dark') ? JSON.parse(localStorage.getItem('dark')) : dark
    const lang = useSelector(state => state.lang.arabic)
    const state = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : lang
    const text = state ? 'برامجنا المختلفة ' : 'our programmes'
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (index < text.length) {
                setDisplayText((prev) => prev + text.charAt(index));
                setIndex((prev) => prev + 1);
            }
        }, 150);
        return () => clearTimeout(timeout);
    }, [index, text]);
    return (
        <div className={`  pb-[50px] ${mode ? 'bg-dark' : 'bg-light'}`}>
            <h2 className='title ' >
                {displayText}
            </h2>
            <div className=' container  px-7 md:px-[50px] lg:px-[80px] xl:px-[150px] mx-auto 
            grid md:grid-cols-2 lg:grid-cols-3  grid-cols-1 gap-5'>
                {!state ? progs.map(item => <SingleProg {...item} mode={mode} state={state} />
                ) : progsArabic.map(item => <SingleProg {...item} mode={mode} state={state} />)}
            </div>
        </div >
    )
}

export default ProgComp