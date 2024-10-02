import React from 'react'
import { medias } from '../utils/data'
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'

const ContactComp = () => {
    return (
        <div className='Contact pb-[70px]'>
            <div className=' container mx-auto px-7'>
                <h2 className='title'>contact us<FaCheck /></h2>
                <div>
                    <div className=' container mx-auto gap-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:p-0 p-4'>
                        {medias.map(item => {
                            return (
                                <div data-aos='fade-down'
                                    key={item.id}
                                    className='contact-item flex flex-col gap-2 bg-white p-2'>
                                    <Link target='_blank' to={item.to}
                                        className=' md:text-[20px] text-wrap break-all break-words  text-blue-500'>
                                        <span style={{ color: 'var(--main-color)' }}
                                            className='text-[50px]'>
                                            {item.icon}
                                        </span>
                                        <h3 style={{ color: 'var(--main-color)' }} className=' font-bold'>{item.title} :</h3>
                                        {item.content}
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactComp