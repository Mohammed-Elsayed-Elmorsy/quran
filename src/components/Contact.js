import React from 'react'
import { medias } from '../utils/data'
import { Link } from 'react-router-dom'
import { FaCheck, FaCheckCircle, FaFacebook, FaGithub, FaGoogle, FaLinkedin, FaPhone } from 'react-icons/fa'
import { useSelector } from 'react-redux'

const ContactComp = () => {
    const lang = useSelector(state => state.lang.arabic)
    const state = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : lang
    return (
        <div className='Contact pb-[70px]'>
            <div className=' container mx-auto px-7 md:px-[80px] lg:px-[120px]'>
                <h2 className='title'>

                    {state ? ' تواصل معنا' : 'contact us '}

                    <FaCheck /></h2>
                <div>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:p-0 p-4'>
                        {medias.map(item => {
                            return (
                                <div data-aos='fade-down'
                                    key={item.id}
                                    className='contact-item rounded-md flex flex-col gap-2 bg-white p-2'>
                                    <Link target='_blank' to={item.to}
                                        className=' md:text-[20px] text-wrap break-all break-words  text-blue-500'>
                                        <span style={{ color: 'var(--main-color)' }}
                                            className='text-[50px]'>
                                            {item.icon}
                                        </span>
                                        <h3 style={{ color: 'var(--main-color)' }} className=' font-bold'>
                                            {item.title}
                                        </h3>
                                        {item.content}
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                    {/* <div className=' flex mt-[70px] gap-12 justify-between items-center md:flex-row flex-col'> */}
                    {/* <div
                            data-aos='zoom-in'
                            className='flex-1 flex flex-col gap-3'>
                            <h1 className=' font-bold text-[20px]'>LET'S WORK TOGETHER</h1>
                            <p className=' text-gray-500'>
                                Consider your development experience and when you started working on both front- and back-end development. Example: "I became interested in becoming a
                                full-stack developer while working as a front-end developer .
                            </p>
                            <div className=''>
                                <span
                                    className='  flex  items-center gap-1 text-blue-500'><FaGoogle />sallealamohammed@gmail.com </span>
                                <span
                                    className=' inline-flex  items-center gap-1 text-blue-500'><FaPhone />01212659525</span>
                            </div>
                            <div className=' flex gap-3'>
                                <a
                                    className=' text-[30px] text-orange-600' href="https://www.facebook.com/profile.php?id=100079764606912"><FaFacebook /></a>
                                <a
                                    className=' text-[30px] text-orange-600' href="https://github.com/Mohammed-Elsayed-Elmorsy"><FaGithub /></a>
                                <a
                                    className=' text-[30px] text-orange-600' href="https://www.linkedin.com/in/mohammed-elmorsy-018378258/"><FaLinkedin /></a>
                            </div>
                            <p>
                                All Rights Preserved
                                &copy;
                                <span className=' font-bold text-blue-500'>
                                    MOHAMMED ELMORSY
                                </span>
                                <span className=' ml-1 text-orange-500 font-bold inline-flex items-center gap-1'>2023 <FaCheckCircle /></span>
                            </p>
                        </div> */}
                    {/* <form data-aos='fade-up'
                            className=' flex gap-3 flex-col'>
                            <input
                                className=' w-full'
                                type="text"
                                placeholder='Enter Name' />
                            <input
                                className=' w-full'
                                type="email"
                                placeholder='Enter Email' />
                            <textarea
                                className=' w-full'
                                placeholder=' Enter Your Message'
                                cols="30"
                                rows="5">
                            </textarea>
                            <button
                                className=''
                                type='submit'>Submit</button>
                        </form> */}
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default ContactComp