import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useSwiper } from 'swiper/react';

const SliderBtns = () => {
    const lang = useSelector(state => state.lang.arabic)
    const state = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : lang
    const Swiper = useSwiper()
    return (
        <div
            className='btns'
            style={{ position: 'absolute', right: '-6px', top: '0px', width: '100%' }}>
            <button className=''
                onClick={() => Swiper.slidePrev()}>
                {!state ? <FaAngleLeft /> : <FaAngleRight />}
            </button>
            <button className=''
                onClick={() => Swiper.slideNext()}>
                {!state ? <FaAngleRight /> : <FaAngleLeft />}
            </button>
            <button
                className='btn-pri'
            >
                {!state ?
                    <Link to='/blogs'>
                        all blogs
                    </Link>
                    :
                    <Link to='/blogs'>
                        كل المدونات
                    </Link>
                }
            </button>
        </div >
    )
}

export default SliderBtns;