import React from 'react'
import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaPhone, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { FaMapLocation, FaTelegram } from 'react-icons/fa6'
import { links, linksarabic } from '../utils/data'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Footer = () => {
    const lang = useSelector(state => state.lang.arabic)
    const state = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : lang
    return (
        <div className=' footer pt-[40px] pb-[70px]'>
            <footer className=' container mx-auto px-3 md:px-[70px] lg:px-[120px] pb-0'>
                <div className="footer-container justify-between  flex-wrap   flex gap-5 ">
                    <div className=" text-slate-200 flex flex-col  gap-4">
                        {state ? <h4 className=' text-[25px]'> تواصل معنا</h4> :
                            <h4 className=' text-[25px]'>Contact Us</h4>}
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
                        {state ? <h4 className=' text-[25px]'> الروابط السريعة</h4> :
                            <h4 className=' text-[25px]'>Quick links</h4>}
                        <ul className='flex flex-col gap-2 text-[20px]'>
                            {!state ? links.map(link => <li key={link.id}>
                                <Link className={` capitalize`} to={link.to == '/' ? '/' : '/' + link.to}>
                                    {link.to == '/' ? 'home' : link.to}
                                </Link>
                            </li>
                            ) : linksarabic.map(link => <li key={link.id}>
                                <Link className={` capitalize`} to={link.to == '/' ? '/' : '/' + link.to}>
                                    {link.text == '/' ? 'home' : link.text}
                                </Link>
                            </li>)}
                        </ul>
                    </div>

                    <div className="footer-contact  text-slate-200  flex flex-col gap-4">
                        {state ? <h4 className=' text-[25px]'> تابعنا الان</h4> :
                            <h4 className=' text-[25px]'>   Follow us</h4>}
                        {state ? <div className=" flex-1 flex flex-col gap-2 text-[20px]">
                            <a className=' flex items-center gap-1' href="https://www.facebook.com/yourprofile" target="_blank">
                                <FaFacebook /> <span>الفيسبوك</span>
                            </a>
                            <a className=' flex items-center gap-1' href="https://www.twitter.com/yourprofile" target="_blank">
                                <FaTwitter /> <span>تويتر</span>
                            </a>
                            <a className=' flex items-center gap-1' href="https://www.twitter.com/in/yourprofile" target="_blank">
                                <FaLinkedin /> <span>لينكد ان</span>
                            </a>
                            <a className=' flex items-center gap-1' href="https://www.linkedin.com/in/yourprofile" target="_blank">
                                <FaGithub /> <span>جيت هاب</span>
                            </a>
                            <a className=' flex items-center gap-1' href="https://www.linkedin.com/in/yourprofile" target="_blank">
                                <FaYoutube /> <span>اليوتيوب</span>
                            </a>
                            <a className=' flex items-center gap-1' href="https://www.linkedin.com/in/yourprofile" target="_blank">
                                <FaInstagram /> <span>انستقرام</span>
                            </a>
                            <a className=' flex items-center gap-1' href="https://t.me/Muhammad_550" target="_blank">
                                <FaTelegram /> <span>التيلجرام</span>
                            </a>
                        </div> : <div className=" flex-1 flex flex-col gap-2 text-[20px]">
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
                            <a className=' flex items-center gap-1' href="https://t.me/Muhammad_550" target="_blank">
                                <FaTelegram /> <span>Telegram</span>
                            </a>
                        </div>}
                    </div>

                    <div className=" flex flex-col gap-4">
                        {state ? <h4 className=' text-[25px]'>دوراتنا التعليمية</h4> :
                            <h4 className=' text-[25px]'>Our Courses</h4>}
                        {state ? <div className=' text-slate-200 capitalize flex flex-col gap-2' >
                            <Link to='/programms/4' className=' text-[20px]'>دراسات اسلامية</Link>
                            <Link to='/programms/3' className=' text-[20px]'>التلاوة</Link>
                            <Link to='/programms/2' className=' text-[20px]'>التجويد</Link>
                            <Link to='/programms/1' className=' text-[20px]'>التفسير</Link>
                            <Link to='/programms/6' className=' text-[20px]'>العربية</Link>
                            <Link to='/programms/5' className=' text-[20px]'>مفاتيح السور</Link>
                        </div> : <div className=' text-slate-200 capitalize flex flex-col gap-2' >
                            <Link to='/programms/4' className=' text-[20px]'>islamic courses</Link>
                            <Link to='/programms/3' className=' text-[20px]'>memorization</Link>
                            <Link to='/programms/2' className=' text-[20px]'>tagweed</Link>
                            <Link to='/programms/1' className=' text-[20px]'>tafseer</Link>
                            <Link to='/programms/6' className=' text-[20px]'>arabic</Link>
                            <Link to='/programms/5' className=' text-[20px]'>Surah key</Link>
                        </div>}
                    </div>
                </div>

                <div className="footer-bottom mt-5 p-10">
                    <p className=''>&copy; <span id="current-year"></span> MOHAMMED ELMORSY. All rights reserved.</p>
                </div>
            </footer >
        </div >
    )
}

export default Footer