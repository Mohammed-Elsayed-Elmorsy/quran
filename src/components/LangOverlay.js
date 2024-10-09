import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const LangOverlay = () => {
    const over = useSelector(state => state.over.show)
    const lang = useSelector(state => state.lang.arabic)
    const dispatch = useDispatch()
    const hidelangover = () => {
        dispatch({ type: 'HIDE' })

    }
    const changetoEnglish = () => {
        window.location = '/'
        setTimeout(() => {
            dispatch({ type: 'ENGLISH' })
        }, 100);
        localStorage.setItem('lang', 'false')
    }
    const changetoAranbic = () => {
        window.location = '/'
        setTimeout(() => {
            dispatch({ type: 'ARABIC' })
        }, 500);
        localStorage.setItem('lang', 'true')
    }
    return (
        <div
            onClick={() => hidelangover()}
            style={{ zIndex: '100000', background: 'rgba(0,0,0,0.6)' }}
            className={` 
                        outer-overlay fixed top-0 left-0 right-0 h-full  flex justify-center items-center
                        w-full z-50 bottom-0 bg-slate-400  ${over ? 'show' : ''}`}>
            <div
                onClick={(e) => e.stopPropagation()}
                className='p-3 flex flex-col justify-between inner-overlay 
                           w-[350px] h-[170px] bg-white shadow-lg  rounded-md' >
                <h2 className=' text-center font-bold capitalize text-[25px] my-2'>
                    change the language
                </h2>
                <div className='flex gap-3 items-center'>
                    <span
                        onClick={() => changetoAranbic()}
                        className='text-center  rounded-md text-[22px]
                                 hover:bg-slate-300 cursor-pointer block bg-slate-200 p-3 flex-1'>
                        اللغة العربية
                    </span>
                    <span
                        onClick={() => changetoEnglish()}
                        className='text-center  rounded-md text-[22px]
                                hover:bg-slate-300 cursor-pointer block bg-slate-200 p-3 flex-1'>
                        English
                    </span>
                </div>
            </div>
        </div >
    )
}

export default LangOverlay