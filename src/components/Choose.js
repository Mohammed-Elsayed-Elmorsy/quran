import React from 'react'
import { choose } from '../utils/data'
import { FaCheck } from 'react-icons/fa'
import aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
const Choose = () => {
    useEffect(() => {
        aos.init({
            duration: 1000,
            delay: 100
        })
    }, [])
    return (
        <div className='choose pb-[70px]' >
            <h2 className='title ' >
                why choose us
                <FaCheck />
            </h2>
            <div className=' container mx-auto px-5'>
                {choose.map(item => <div className='item ' key={item.id} data-aos={item.aos}>
                    <img src={item.image} alt="" />
                    <h2 className=' title' style={{ fontSize: '20px' }}>{item.title}</h2>
                    <p data-aos="fade-up">{item.text}</p>
                </div>)}
            </div>
        </div >
    )
}

export default Choose