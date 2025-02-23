import React, { useEffect, useState } from 'react'
import { medias, mediasarab } from '../utils/data'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/js/utils";
const ContactComp = () => {
    const { dark } = useSelector(state => state.mode)
    const mode = localStorage.getItem('dark') ? JSON.parse(localStorage.getItem('dark')) : dark
    const lang = useSelector(state => state.lang.arabic)
    const state = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : lang
    const [setPhoneNumber] = useState("");
    const [itiInstance, setItiInstance] = useState(null);
    const text = state ? 'تواصل معنا ' : 'contact us '
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {

        const timeout = setTimeout(() => {
            if (index < text.length) {
                // Typing forward
                setDisplayText((prev) => prev + text.charAt(index));
                setIndex((prev) => prev + 1);
            }

        }, 130);

        return () => clearTimeout(timeout);
    }, [index, text]);
    useEffect(() => {
        // Initialize intl-tel-input className={mode?'bg-lighter':'bg-white'} when the component mounts
        const input = document.querySelector("#phone");
        const instance = intlTelInput(input, {
            preferredCountries: ["us", "gb", "in", "ae", "au"],
        });
        setItiInstance(instance);

        return () => instance.destroy();
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (itiInstance) {
            const formattedNumber = itiInstance.getNumber();
            setPhoneNumber(formattedNumber);
        }
    };
    return (
        <div className={`Contact pb-[30px] ${mode ? 'bg-dark' : 'bg-light'}`}>
            <div className=' container mx-auto px-6 md:px-[70px] lg:px-[100px] xl:px-[150px]'>
                <h2 className='title'>
                    {displayText}
                </h2>
                {state ?
                    <div className="form-container" dir='rtl'>

                        <form >
                            <div className="form-group" data-aos="flip-left">
                                <label htmlFor="firstName">الاسم الأول</label>
                                <input
                                    className={mode ? 'bg-lighter text-textDark shadow shadow-black focus:outline' : 'bg-white shadow shadow-slate-400 focus:outline focus:outline-slate-300'} type="text" id="firstName" name="firstName" placeholder="ادخل اسمك الأول" required />
                            </div>
                            <div className="form-group" data-aos="flip-left">
                                <label htmlFor="lastName">الاسم الأخير</label>
                                <input className={mode ? 'bg-lighter text-textDark shadow shadow-black focus:outline' : 'bg-white shadow shadow-slate-400 focus:outline focus:outline-slate-300'} type="text" id="lastName" name="lastName" placeholder="ادخل اسمك الأخير" required />
                            </div>
                            <div className="form-group" data-aos="flip-left">
                                <label htmlFor="age">العمر</label>
                                <input className={mode ? 'bg-lighter text-textDark shadow shadow-black focus:outline' : 'bg-white shadow shadow-slate-400 focus:outline focus:outline-slate-300'} type="number" id="age" name="age" placeholder="ادخل عمرك" required />
                            </div>
                            <div className="form-group" data-aos="flip-left">
                                <label htmlFor="email">البريد الإلكتروني</label>
                                <input className={mode ? 'bg-lighter text-textDark shadow shadow-black focus:outline' : 'bg-white shadow shadow-slate-400 focus:outline focus:outline-slate-300'} type="email" id="email" name="email" placeholder="ادخل بريدك الإلكتروني" required />
                            </div>
                            <div className="form-group z-50" data-aos="flip-left">
                                <label htmlFor="phone">رقم الهاتف</label>
                                <input className={mode ? 'bg-lighter text-textDark shadow shadow-black focus:outline' : 'bg-white shadow shadow-slate-400 focus:outline focus:outline-slate-300'} type="tel" id="phone" name="phone" placeholder="ادخل رقم هاتفك" required />
                            </div>
                            <div className="form-group" data-aos="flip-left">
                                <label htmlFor="timezone">المنطقة الزمنية</label>
                                <select className={mode ? 'bg-lighter text-gray-600 focus:text-textDark shadow shadow-black focus:outline' : 'bg-white shadow shadow-slate-400 focus:outline focus:outline-slate-300'} id="timezone" name="timezone" required>
                                    <option defaultValue=" اختر منطقتك الزمنية" hidden>اختر منطقتك الزمنية</option>
                                    <option value="UTC-12:00">UTC-12:00</option>
                                    <option value="UTC-11:00">UTC-11:00</option>
                                    <option value="UTC-10:00">UTC-10:00</option>
                                    <option value="UTC-09:00">UTC-09:00</option>
                                    <option value="UTC-08:00">UTC-08:00</option>
                                    <option value="UTC-07:00">UTC-07:00</option>
                                    <option value="UTC-06:00">UTC-06:00</option>
                                    <option value="UTC-05:00">UTC-05:00</option>
                                    <option value="UTC-04:00">UTC-04:00</option>
                                    <option value="UTC-03:00">UTC-03:00</option>
                                    <option value="UTC-02:00">UTC-02:00</option>
                                    <option value="UTC-01:00">UTC-01:00</option>
                                    <option value="UTC+00:00">UTC+00:00</option>
                                    <option value="UTC+01:00">UTC+01:00</option>
                                    <option value="UTC+02:00">UTC+02:00</option>
                                    <option value="UTC+03:00">UTC+03:00</option>
                                    <option value="UTC+04:00">UTC+04:00</option>
                                    <option value="UTC+05:00">UTC+05:00</option>
                                    <option value="UTC+06:00">UTC+06:00</option>
                                    <option value="UTC+07:00">UTC+07:00</option>
                                    <option value="UTC+08:00">UTC+08:00</option>
                                    <option value="UTC+09:00">UTC+09:00</option>
                                    <option value="UTC+10:00">UTC+10:00</option>
                                    <option value="UTC+11:00">UTC+11:00</option>
                                    <option value="UTC+12:00">UTC+12:00</option>
                                </select>
                            </div>
                            <div className="form-group" data-aos="flip-left">
                                <label htmlFor="country">الدولة</label>
                                <input className={mode ? 'bg-lighter text-textDark shadow shadow-black focus:outline' : 'bg-white shadow shadow-slate-400 focus:outline focus:outline-slate-300'} type="text" id="country" name="country" placeholder="ادخل دولتك" required />
                            </div>
                            <div className="form-group" data-aos="flip-left">
                                <label htmlFor="gender">الجنس</label>
                                <select className={mode ? 'bg-lighter text-gray-600 focus:text-textDark shadow shadow-black focus:outline' : 'bg-white shadow shadow-slate-400 focus:outline focus:outline-slate-300'} id="gender" name="gender" required>
                                    <option defaultValue="  اختر جنسك" hidden    >اختر جنسك</option>
                                    <option value="male">ذكر</option>
                                    <option value="female">أنثى</option>
                                </select>
                            </div>
                            <div className="form-group" data-aos="flip-left">

                                <button type="submit" class="btn-submit">إرسال</button>
                            </div>
                        </form>
                    </div>
                    :
                    <div className="form-container">
                        <form >
                            <div className="form-group" data-aos="flip-left">
                                <label htmlFor="firstName">First Name</label>
                                <input className={mode ? 'bg-lighter text-textDark shadow shadow-black focus:outline' : 'bg-white shadow shadow-slate-400 focus:outline focus:outline-slate-300'} type="text" id="firstName" name="firstName" placeholder="Enter your first name" required />
                            </div>
                            <div className="form-group" data-aos="flip-left">
                                <label htmlFor="lastName">Last Name</label>
                                <input className={mode ? 'bg-lighter text-textDark shadow shadow-black focus:outline' : 'bg-white shadow shadow-slate-400 focus:outline focus:outline-slate-300'} type="text" id="lastName" name="lastName" placeholder="Enter your last name" required />
                            </div>
                            <div className="form-group" data-aos="flip-left">
                                <label htmlFor="age">Age</label>
                                <input className={mode ? 'bg-lighter text-textDark shadow shadow-black focus:outline' : 'bg-white shadow shadow-slate-400 focus:outline focus:outline-slate-300'} type="number" id="age" name="age" placeholder="Enter your age" required />
                            </div>
                            <div className="form-group" data-aos="flip-left">
                                <label htmlFor="email">Email</label>
                                <input className={mode ? 'bg-lighter text-textDark shadow shadow-black focus:outline' : 'bg-white shadow shadow-slate-400 focus:outline focus:outline-slate-300'} type="email" id="email" name="email" placeholder="Enter your email" required />
                            </div>
                            <div className="form-group z-50" data-aos="flip-left">
                                <label htmlFor="phone">Phone</label>
                                <input className={mode ? 'bg-lighter text-textDark shadow shadow-black focus:outline' : 'bg-white shadow shadow-slate-400 focus:outline focus:outline-slate-300'} type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />
                            </div>
                            <div className="form-group" data-aos="flip-left">
                                <label htmlFor="timezone">Time Zone</label>
                                <select className={mode ? 'bg-lighter text-gray-600 focus:text-textDark shadow shadow-black focus:outline' : 'bg-white shadow shadow-slate-400 focus:outline focus:outline-slate-300'} id="timezone" name="timezone" required>
                                    <option defaultValue="Select your time zone" hidden>Select your time zone</option>
                                    <option value="UTC-12:00">UTC-12:00</option>
                                    <option value="UTC-11:00">UTC-11:00</option>
                                    <option value="UTC-10:00">UTC-10:00</option>
                                    <option value="UTC-09:00">UTC-09:00</option>
                                    <option value="UTC-08:00">UTC-08:00</option>
                                    <option value="UTC-07:00">UTC-07:00</option>
                                    <option value="UTC-06:00">UTC-06:00</option>
                                    <option value="UTC-05:00">UTC-05:00</option>
                                    <option value="UTC-04:00">UTC-04:00</option>
                                    <option value="UTC-03:00">UTC-03:00</option>
                                    <option value="UTC-02:00">UTC-02:00</option>
                                    <option value="UTC-01:00">UTC-01:00</option>
                                    <option value="UTC+00:00">UTC+00:00</option>
                                    <option value="UTC+01:00">UTC+01:00</option>
                                    <option value="UTC+02:00">UTC+02:00</option>
                                    <option value="UTC+03:00">UTC+03:00</option>
                                    <option value="UTC+04:00">UTC+04:00</option>
                                    <option value="UTC+05:00">UTC+05:00</option>
                                    <option value="UTC+06:00">UTC+06:00</option>
                                    <option value="UTC+07:00">UTC+07:00</option>
                                    <option value="UTC+08:00">UTC+08:00</option>
                                    <option value="UTC+09:00">UTC+09:00</option>
                                    <option value="UTC+10:00">UTC+10:00</option>
                                    <option value="UTC+11:00">UTC+11:00</option>
                                    <option value="UTC+12:00">UTC+12:00</option>
                                </select>
                            </div>
                            <div className="form-group" data-aos="flip-left">
                                <label htmlFor="country">Country</label>
                                <input className={mode ? 'bg-lighter text-textDark shadow shadow-black focus:outline' : 'bg-white shadow shadow-slate-400 focus:outline focus:outline-slate-300'} type="text" id="country" name="country" placeholder="Enter your country" required />
                            </div>

                            <div className="form-group" data-aos="flip-left">
                                <label htmlFor="gender">Gender</label>
                                <select className={mode ? 'bg-lighter text-gray-600 focus:text-textDark shadow shadow-black focus:outline' : 'bg-white shadow shadow-slate-400 focus:outline focus:outline-slate-300'} id="gender" name="gender" required>
                                    <option defaultValue="Select your gender" hidden >Select your gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <div className='form-group'>

                                <button type="submit" className="btn-submit">Submit</button>
                            </div>
                        </form>
                    </div>
                }


                <div className=' text-center pb-10'>
                    <h2 className='title text-[22px] text-center capitalize pb-5'> {state ? 'معلومات الاتصال' : 'contact information'}</h2>
                    <div className='grid grid-cols-2 md:grid-cols-3  gap-4 md:p-0 '>
                        {!state ? medias.map(item => {
                            return (
                                <Link data-aos='fade-down'
                                    key={item.id}
                                    className={`flex items-center justify-center p-2 gap-2 
                                        ${mode ? 'bg-lighter shadow shadow-black hover:bg-graymy' :
                                            'bg-white hover:bg-slate-300 shadow shadow-slate-400'}`}
                                    target={item.title.indexOf('Email') !== -1
                                        || item.title.indexOf('hone') !== -1 ?
                                        '' : '_blank'} to={item.title.indexOf('Email') !== -1 ? '' : item.to}
                                >
                                    <h3 style={{ color: 'var(--second-color)' }} className=' font-bold'>
                                        {item.title}
                                    </h3>
                                    <span style={!mode ? { color: 'var(--main-color)' } : { color: '#F5F5DC' }}
                                        className='text-[35px] flex justify-center items-center'>
                                        {item.icon}
                                    </span>
                                </Link>
                            )
                        }) : mediasarab.map(item => {
                            return (
                                <Link key={item.id} data-aos='fade-down'
                                    className={`flex items-center justify-center gap-2 p-2  
                                        ${mode ? 'bg-lighter shadow shadow-black hover:bg-graymy' : 'bg-white shadow shadow-slate-400 hover:bg-slate-300'}`}
                                    target={item.title.indexOf('Email') !== -1
                                        || item.title.indexOf('hone') !== -1 ?
                                        '' : '_blank'} to={item.title.indexOf('Email') !== -1 ? '' : item.to}
                                >
                                    <h3 style={{ color: 'var(--second-color)' }} className=' font-bold'>
                                        {item.title}
                                    </h3>
                                    <span style={!mode ? { color: 'var(--main-color)' } : { color: '#F5F5DC' }}
                                        className='text-[35px] flex justify-center items-center'>
                                        {item.icon}
                                    </span>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ContactComp