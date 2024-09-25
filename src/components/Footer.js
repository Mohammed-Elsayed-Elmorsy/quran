import React from 'react'
import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaPhone, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { FaMapLocation } from 'react-icons/fa6'
import { links } from '../utils/data'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className=' footer pt-[40px]'>
            <footer className=' container mx-auto px-5 pb-0'>
                <div className="footer-container justify-between  flex-wrap   flex gap-5 ">
                    <div className=" text-slate-200 flex flex-col  gap-4">
                        <h4 className=' text-[25px]'>Contact Us</h4>
                        <a className=' flex items-center gap-1'>
                            <span className=' font-bold text-[22px]'><FaPhone /></span>
                            : <a className='text-[20px]' href="tel:+1234567890">+20-012-1265-9525</a>
                        </a>
                        <a className=' flex items-center gap-1'>
                            <span className=' font-bold text-[22px]'><FaEnvelope /></span>
                            : <a className='text-[20px]' href="mailto:sallealamohammed@gmail.com">sallealamohammed@gmail.com</a>
                        </a>
                        <p className='text-[20px] flex items-center gap-1'>
                            <span className=' font-bold text-[22px]'><FaMapLocation /></span>
                            :kapher Elsharaqua, Dakahlia , Eygpt</p>
                        <a className='text-[20px] flex items-center gap-1' href='https://wa.me/201212659525' target='_blank'>
                            <span className=' font-bold text-[22px]'><FaWhatsapp /></span>:+201212659525
                        </a>
                    </div>

                    <div className="Links text-slate-200 flex flex-col gap-4">
                        <h4 className=' text-[25px]'>Quick Links</h4>
                        <ul className='flex flex-col gap-2 text-[20px]'>
                            {links.map(link => <li key={link.id}>
                                <Link className={` capitalize`} to={link.text == '/' ? '/' : '/' + link.text}>
                                    {link.text == '/' ? 'home' : link.text}
                                </Link>
                            </li>)}
                        </ul>
                    </div>

                    <div className="footer-contact  text-slate-200  flex flex-col gap-4">
                        <h4 className=' text-[25px]'>Follow Us</h4>
                        <div className=" flex-1 flex flex-col gap-2 text-[20px]">
                            <a className=' flex items-center gap-1' href="https://www.facebook.com/yourprofile" target="_blank">
                                <FaFacebook /> <span>Facebook</span>
                            </a>
                            <a className=' flex items-center gap-1' href="https://www.twitter.com/yourprofile" target="_blank">
                                <FaTwitter /> <span>Twitter</span>
                            </a>
                            <a className=' flex items-center gap-1' href="https://www.twitter.com/in/yourprofile" target="_blank">
                                <FaLinkedin /> <span>Linkedin</span>
                            </a>
                            <a className=' flex items-center gap-1' href="https://www.linkedin.com/in/yourprofile" target="_blank">
                                <FaGithub /> <span>Github</span>
                            </a>
                            <a className=' flex items-center gap-1' href="https://www.linkedin.com/in/yourprofile" target="_blank">
                                <FaYoutube /> <span>Youtube</span>
                            </a>
                            <a className=' flex items-center gap-1' href="https://www.linkedin.com/in/yourprofile" target="_blank">
                                <FaInstagram /> <span>Instagram</span>
                            </a>
                        </div>
                    </div>

                    <div className=" flex flex-col gap-4">
                        <h4 className=' text-[25px]'>Our Courses</h4>
                        <div className=' text-slate-200 capitalize flex flex-col gap-2' >
                            <a href='#' className=' text-[20px]'>islamic courses</a>
                            <a href='#' className=' text-[20px]'>recitation</a>
                            <a href='#' className=' text-[20px]'>tagweed</a>
                        </div>
                    </div>
                </div>

                <div class="footer-bottom mt-5 p-10">
                    <p className=''>&copy; <span id="current-year"></span> MOHAMMED ELMORSY. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer