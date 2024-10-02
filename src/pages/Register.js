import { useEffect, useState } from 'react'
import { FaEye, FaEyeSlash, FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import TopNav from '../components/TopNav'
import Header from '../components/Header'
import Footer from '../components/Footer'
const Register = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [showPass, setShowPass] = useState(false)
    const [showPassConfirm, setShowPassConfirm] = useState(false)
    const [firstName, setfirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [passConfirm, setPassConfirm] = useState('')
    const [image, setImage] = useState(null)
    const [loading, setloading] = useState(false)


    return (
        <div className=' register'>
            <TopNav />
            <Header />
            <div className=' container px-7 py-[50px] mx-auto'>
                <div className=''>
                    <p className=' w-fit p-1 mt-[-25px] mx-auto'>Upload Your Profile Image</p>
                    <label htmlFor='upload'
                        className=' mb-6 mt-2 w-[80px] h-[80px] cursor-pointer hover:drop-shadow transition-all 
            text-center mx-auto flex flex-col items-center justify-center shadow-md bg-white p-1 rounded-full ' >
                        {image ? <img className=' w-full h-full rounded-full' src={image} /> : <>
                            <FaUserPlus className='text-blue-400 mx-auto text-[30px]' />
                            <span className=' text-[14px]'>Upload</span>
                        </>}
                        <input type="file" id='upload' hidden className=' w-full h-full' />
                    </label>
                    <p className=' font-bold text-[22px] w-fit p-1 mx-auto capitalize mt-[-15px] mb-[10px]'>register now and start learning with us </p>
                </div>
                <form data-aos={'fade-up'}

                    className='flex flex-col gap-[30px] p-7
                    md:flex-row 
                    flex-wrap  
                    w-full 
                    md:w-[640px] 
                    lg:w-[800px]
                    xl:w-[800px]
                    mx-auto bg-white shadow-lg rounded'>
                    <div className=' flex flex-col gap-1'>
                        <label className=' font-bold' htmlFor='first'>First Name</label>
                        <input
                            value={firstName}
                            onChange={(e) => setfirstName(e.target.value)}
                            placeholder='Ex:Mohammed'
                            type="text"
                            id='first'
                            className=' w-full px-2 py-[10px] rounded border focus:outline-blue-300 focus:outline' />
                    </div>
                    <div className=' flex flex-col gap-1'>
                        <label className=' font-bold' htmlFor='last'>Last Name</label>
                        <input
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder='Ex:Elmorsy'
                            type="text"
                            id='last'
                            className=' w-full px-2 py-[10px] rounded border focus:outline-blue-300 focus:outline' />
                    </div>
                    <div className=' flex flex-col gap-1'>
                        <label className=' font-bold' htmlFor='email'>Email</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Ex:MohammedElmorsy@g.com'
                            type="email"
                            id='email'
                            className=' w-full px-2 py-[10px] rounded border focus:outline-blue-300 focus:outline' />
                    </div>
                    <div className=' flex flex-col gap-1 relative'>
                        {showPass
                            ?
                            <FaEyeSlash
                                onClick={() => setShowPass(false)}
                                className=' cursor-pointer text-blue-500 absolute right-[10px] top-[38px]' />
                            :
                            <FaEye
                                onClick={() => setShowPass(true)}
                                className=' cursor-pointer text-blue-500 absolute right-[10px] top-[38px]' />
                        }
                        <label className=' font-bold' htmlFor='pass'>Password</label>
                        <input
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
                            placeholder='Ex:MoEl550!'
                            type={showPass ? 'text' : "password"}
                            id='pass'
                            className=' w-full px-2 py-[10px] rounded border focus:outline-blue-300 focus:outline' />
                    </div>
                    <div className=' flex flex-col gap-1 relative'>
                        {showPassConfirm
                            ?
                            <FaEyeSlash
                                onClick={() => setShowPassConfirm(false)}
                                className=' cursor-pointer text-blue-500 absolute right-[10px] top-[38px]' />
                            :
                            <FaEye
                                onClick={() => setShowPassConfirm(true)}
                                className=' cursor-pointer text-blue-500 absolute right-[10px] top-[38px]' />
                        }
                        <label className=' font-bold' htmlFor='Confirm'>Confirm Password</label>
                        <input
                            value={passConfirm}
                            onChange={(e) => setPassConfirm(e.target.value)}
                            placeholder='Ex:MoEl550!'
                            type={showPassConfirm ? 'text' : "password"}
                            id='Confirm'
                            className=' w-full px-2 py-[10px] rounded border focus:outline-blue-300 focus:outline' />
                    </div>
                    <div className=' flex'>
                        <button className='px-2 py-[10px] w-full md:mt-[27px] rounded bg-blue-400 text-white'>Sign Up</button>
                    </div>
                    <p className=' flex justify-center mx-auto'>Have an Account <Link className=' text-blue-400 font-bold mx-2 underline' to={'/login'}>Log in</Link></p>
                </form>
            </div>
            <Footer />

        </div>

    )
}

export default Register

