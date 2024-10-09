import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { medias, mediasarab } from '../utils/data'

const LinksOfDetails = () => {
    const lang = useSelector(state => state.lang.arabic)
    const state = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : lang
    return (
        <div className=' flex gap-2 flex-wrap justify-center pb-2 mt-[50px] border-b'>
            {state ? mediasarab.map(
                i => <Link
                    target='_blank '
                    to={i.to}
                    key={i.id}>
                    <span
                        style={{ background: i.back }}
                        className=' text-[20px] bg-slate-300 hover:text-gray-400 px-3 py-2 cursor-pointer rounded
                               flex items-center gap-2'  >
                        <span
                            className=' text-[22px]'
                            style={{ color: i.color }}>
                            {i.icon
                            }</span>
                        {i.title}
                    </span>
                </Link>) : medias.map(
                    i => <Link
                        target='_blank '
                        to={i.to}
                        key={i.id}>
                        <span
                            style={{ background: i.back }}
                            className=' text-[20px] bg-slate-300 hover:text-gray-400 px-3 py-2 cursor-pointer rounded
                               flex items-center gap-2'  >
                            <span
                                className=' text-[22px]'
                                style={{ color: i.color }}>
                                {i.icon
                                }</span>
                            {i.title}
                        </span>
                    </Link>)}
        </div>
    )
}

export default LinksOfDetails