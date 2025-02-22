import React, { useState } from 'react'
import { testmonials, testmonialsArabic } from '../utils/data'
import { useSelector } from 'react-redux'
import ReviewsItem from './ReviewsItem'
const Reviews = () => {
    const [showReview, setShowReview] = useState(null)
    const { dark } = useSelector(state => state.mode)
    const mode = localStorage.getItem('dark') ? JSON.parse(localStorage.getItem('dark')) : dark
    const lang = useSelector(state => state.lang.arabic)
    const state = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : lang
    return (
        <div className={`Reviews  ${mode ? 'bg-dark' : 'bg-light'}`}>
            <div className=' container mx-auto px-6 md:px-[60px] lg:px-[80px] xl:px-[150px] pb-[40px]'>
                <h2 className='title'>
                    {state ? 'آراءالطلاب' : ' students Reviews'}
                </h2>
                <div className='container mx-auto gap-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:p-0 p-1'>
                    {!state ? testmonials.map(item => {
                        return (

                            <ReviewsItem
                                {...item}
                                mode={mode}
                                state={state}
                                showReview={showReview}
                                setShowReview={setShowReview} />
                        )
                    }) : testmonialsArabic.map(item => {
                        return (
                            <ReviewsItem
                                {...item}
                                mode={mode}
                                state={state}
                                showReview={showReview}
                                setShowReview={setShowReview} />
                        )
                    })}
                </div>
            </div>
        </div >
    )
}

export default Reviews