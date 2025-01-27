import { teachersArabic, teaches } from '../utils/data'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import LinksOfDetails from './LinksOfDetails'
import { useEffect, useState } from 'react'

const TeachersComp = () => {

    const lang = useSelector(state => state.lang.arabic)
    const state = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : lang
    const text = state ? 'المعلمون ' : 'Our Teachers'
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {

        const timeout = setTimeout(() => {
            if (!isDeleting && index < text.length) {
                // Typing forward
                setDisplayText((prev) => prev + text.charAt(index));
                setIndex((prev) => prev + 1);
            }

        }, 130);

        return () => clearTimeout(timeout);
    }, [index, isDeleting, text]);


    return (
        <div className=' teachers bg-light pb-[40px]'>
            <div className=' container px-7 md:px-[80px] lg:px-[80px] xl:px-[100px] mx-auto'>
                <h2 className=' title  flex items-center gap-2'>
                    {!state ? 'Our Teachers' : ''}
                    {displayText}
                </h2>
                <div className=' content grid md:grid-cols-2 xl:grid-cols-3  grid-cols-1 gap-6'>
                    {!state ? teaches.map(item =>
                        <div data-aos="zoom-in" key={item.id} className=' relative justify-between flex flex-col gap-3'>
                            <div className='  overflow-hidden flex justify-center items-center'>
                                <img src={item.image} alt="" className=' object-cover' />
                                <h3 className='lg:text-[22px] text-[20px] font-bold px-1 text-center  capitalize'>{item.name}</h3>
                            </div>
                            <p className='mt-[-10px] px-2'>{item.desc.substring(0, 214) + '...'}</p>
                            <div className=' mt-auto'>
                                <Link className=' w-full' to={'/teachers/' + item.id}>
                                    <button className='w-full btn-pri'>read more</button>
                                </Link>
                            </div>
                        </div>) : teachersArabic.map(item =>
                            <div data-aos="zoom-in" key={item.id} className=' relative  flex flex-col gap-3'>
                                <div className=' overflow-hidden flex justify-center items-center'>
                                    <img src={item.image} alt="" className='h-[150px] object-cover ' />
                                    <h3 className='lg:text-[22px] text-[20px] text-center font-bold px-1'>{item.name}</h3>
                                </div>
                                <p className='mt-[-10px] px-2'>{item.desc.substring(0, 214) + '...'}</p>
                                <div className=' mt-auto'>
                                    <Link className=' block w-full' to={'/teachers/' + item.id}>
                                        <button className='w-full btn-pri'>
                                            اقرا المزيد
                                        </button>
                                    </Link>
                                </div>
                            </div>)}
                </div>
                <div className=' pt-[50px]'>
                    <LinksOfDetails />
                </div>
            </div>
        </div>





    )
}

export default TeachersComp