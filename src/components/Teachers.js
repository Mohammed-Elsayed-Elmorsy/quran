import React from 'react'
import { teaches } from '../utils/data'
import { FaCheck } from 'react-icons/fa6'

const Teachers = () => {
    return (
        <div className=' teachers pb-[70px]'>
            <div className=' container px-5 mx-auto'>
                <h2 className=' title  flex items-center gap-2'>
                    Our Teachers
                    <FaCheck />
                </h2>
                <div className=' content grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6'>
                    {teaches.map(item =>
                        <div data-aos="zoom-in" key={item.id} className=' relative p-2 flex flex-col gap-4'>
                            <img src={item.image} alt="" className=' object-cover h-[150px]' />
                            <h2 className=''>{item.name}</h2>
                            <p>{item.desc}</p>
                            <div className=' flex justify-between items-center'>
                                <button className=' btn-pri'>read more</button>
                                <button className=' btn-sec'>select teacher</button>
                            </div>
                        </div>)}
                </div>
            </div>
        </div>
    )
}

export default Teachers