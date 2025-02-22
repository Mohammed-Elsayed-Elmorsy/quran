import React from 'react'
import { useSelector } from 'react-redux'

const Loading = () => {
    const { dark } = useSelector(state => state.mode)
    const mode = localStorage.getItem('dark') ?
        JSON.parse(localStorage.getItem('dark'))
        :
        dark
    return (
        <div className={`loading ${mode ? 'bg-dark' : 'bg-light'}`}>
            <div className='first'></div>
            <div className='second'></div>
            <div className='third'></div>
            <div className='fourth'></div>
            <div className='fifth'></div>
        </div>
    )
}

export default Loading