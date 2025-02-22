import React from 'react'
import { Link } from 'react-router-dom'

const LinkItem = ({ title, to, id, back, color, icon, mode }) => {
    return (
        <Link className=' hover:bg-lighter w-[103px] text-[14px] '
            target={title.indexOf('Email') !== -1
                || title.indexOf('hone') !== -1 ?
                '' : '_blank'}
            to={title.indexOf('Email') !== -1 ? '' : to}
            key={id}>
            <span
                style={{ background: back }}
                className={` bg-slate-300 ${mode ? 'text-white' : 'hover:text-white'} 
                  py-2 cursor-pointer  justify-center
                                    flex items-center gap-1`}  >
                <span
                    className='text-[15px] md:text-[18px]'
                    style={{ color: color }}>
                    {icon}
                </span>
                {title}
            </span>
        </Link>
    )
}

export default LinkItem