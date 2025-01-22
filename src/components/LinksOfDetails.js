import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { medias, mediasarab } from '../utils/data'

const LinksOfDetails = () => {
    const lang = useSelector(state => state.lang.arabic)
    const state = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : lang
    return (
        <div className=' flex gap-2 flex-wrap justify-center'>
            {state ? mediasarab.map(
                i => <Link

                    target={i.title.indexOf('Email') !== -1
                        || i.title.indexOf('hone') !== -1 ?
                        '' : '_blank'} to={i.title.indexOf('Email') !== -1 ? '' : i.to}
                    key={i.id}>
                    <span
                        style={{ background: i.back }}
                        className=' bg-slate-300 hover:text-white px-3 py-2 cursor-pointer 
                               flex items-center gap-2'  >
                        <span
                            className='text-[16px] pb-1 md:text-[18px]'
                            style={{ color: i.color }}>
                            {i.icon
                            }</span>
                        {i.title}
                    </span>
                </Link>) : medias.map(
                    i => <Link
                        target={i.title.indexOf('Email') !== -1
                            || i.title.indexOf('hone') !== -1 ?
                            '' : '_blank'} to={i.title.indexOf('Email') !== -1 ? '' : i.to}
                        key={i.id}>
                        <span
                            style={{ background: i.back }}
                            className=' bg-slate-300 hover:text-white px-3 py-2 cursor-pointer 
                               flex is-center gap-2'  >
                            <span
                                className=' lg:text-[18px] pb-1 text-[16px]'
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