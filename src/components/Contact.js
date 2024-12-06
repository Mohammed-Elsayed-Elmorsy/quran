import React, { useEffect, useState } from 'react'
import { medias } from '../utils/data'
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/js/utils";
const ContactComp = () => {
    const lang = useSelector(state => state.lang.arabic)
    const state = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : lang
    const [phoneNumber, setPhoneNumber] = useState("");
    const [itiInstance, setItiInstance] = useState(null);

    useEffect(() => {
        // Initialize intl-tel-input when the component mounts
        const input = document.querySelector("#phone");
        const instance = intlTelInput(input, {
            preferredCountries: ["us", "gb", "in", "ae", "au"],
        });
        setItiInstance(instance);

        // Cleanup when the component unmounts
        return () => instance.destroy();
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (itiInstance) {
            const formattedNumber = itiInstance.getNumber();
            alert(`Phone Number: ${formattedNumber}`);
            setPhoneNumber(formattedNumber);

        }
    };
    console.log(phoneNumber);
    return (
        <div className='Contact pb-[70px] bg-tertiary'>

            <div className=' container mx-auto px-3 md:px-[70px] lg:px-[120px]'>
                <h2 className='title'>
                    {state ? ' تواصل معنا' : 'contact us '}
                    <FaCheck />
                </h2>
                <div class="form-container">
                    <form className=' ' onSubmit={handleSubmit}>
                        <div class="form-group">
                            <label for="firstName">First Name</label>
                            <input type="text" id="firstName" name="firstName" placeholder="Enter your first name" required />
                        </div>
                        <div class="form-group">
                            <label for="lastName">Last Name</label>
                            <input type="text" id="lastName" name="lastName" placeholder="Enter your last name" required />
                        </div>
                        <div class="form-group">
                            <label for="age">Age</label>
                            <input type="number" id="age" name="age" placeholder="Enter your age" required />
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Enter your email" required />
                        </div>
                        <div class="form-group">
                            <label for="phone">Phone</label>
                            <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />
                        </div>
                        <div class="form-group">
                            <label for="timezone">Time Zone</label>
                            <select id="timezone" name="timezone" required>
                                <option value="" disabled selected>Select your time zone</option>
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
                        <div class="form-group">
                            <label for="country">Country</label>
                            <input type="text" id="country" name="country" placeholder="Enter your country" required />
                        </div>
                        <div class="form-group">
                            <label for="city">City</label>
                            <input type="text" id="city" name="city" placeholder="Enter your city" required />
                        </div>
                        <div class="form-group">
                            <label for="gender">Gender</label>
                            <select id="gender" name="gender" required>
                                <option value="" disabled selected>Select your gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <button type="submit" class="btn-submit">Submit</button>
                    </form>
                </div>
                <div>
                    <h2 className='title text-[25px] text-center capitalize pb-5'> {state ? 'معلومات الاتصال' : 'contact information'}</h2>
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
                                        <h3 style={{ color: 'var(--second-color)' }} className=' font-bold'>
                                            {item.title}
                                        </h3>
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