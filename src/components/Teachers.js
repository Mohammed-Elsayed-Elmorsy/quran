import { teachersArabic, teaches } from '../utils/data'
import { FaCheck } from 'react-icons/fa6'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import LinksOfDetails from './LinksOfDetails'

const TeachersComp = () => {
    const lang = useSelector(state => state.lang.arabic)
    const state = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : lang
    return (
        <div className=' teachers bg-light pb-[40px]'>
            <div className=' container px-7 md:px-[80px] lg:px-[120px] mx-auto'>
                <h2 className=' title  flex items-center gap-2'>
                    {!state ? 'Our Teachers' : 'المعلمون'}
                    {/* <FaCheck className=' font-bold ' /> */}
                </h2>
                <div className=' content grid md:grid-cols-2 xl:grid-cols-3  grid-cols-1 gap-6'>
                    {!state ? teaches.map(item =>
                        <div data-aos="zoom-in" key={item.id} className=' relative justify-between flex flex-col gap-3'>
                            <div className='  overflow-hidden'>
                                <img src={item.image} alt="" className=' object-cover' />
                            </div>
                            <h3 className='lg:text-[22px] text-[20px] mt-[-40px] font-bold px-1 text-center  capitalize'>{item.name}</h3>
                            <p className='mt-[-10px] lg:text-[16px] text-[16px]'>{item.desc.substring(0, 214) + '...'}</p>
                            <div className=' mt-auto'>
                                <Link className=' w-full' to={'/teachers/' + item.id}>
                                    <button className='w-full btn-pri'>read more</button>
                                </Link>
                            </div>
                        </div>) : teachersArabic.map(item =>
                            <div data-aos="zoom-in" key={item.id} className=' relative  flex flex-col gap-3'>
                                <div className=' overflow-hidden'>
                                    <img src={item.image} alt="" className=' object-cover ' />
                                </div>
                                <h3 className='lg:text-[22px] mt-[-40px] text-[20px] text-center font-bold px-1'>{item.name}</h3>
                                <p className='mt-[-10px] lg:text-[16px] text-[16px]'>{item.desc.substring(0, 214) + '...'}</p>
                                <div className=' mt-auto'>
                                    <Link className=' block w-full' to={'/teachers/' + item.id}>
                                        <button className='w-full btn-pri'>
                                            اقرا المزيد
                                        </button>
                                    </Link>
                                </div>
                            </div>)}
                </div>
                <div className=' pt-[70px]'>
                    <LinksOfDetails />
                </div>
            </div>
        </div>





    )
}

export default TeachersComp