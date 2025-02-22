import React from 'react'
import { useSelector } from 'react-redux'
import { medias, mediasarab } from '../utils/data'
import LinkItem from './LinkItem'
const LinksOfDetails = () => {
    const { dark } = useSelector(state => state.mode)
    const mode = localStorage.getItem('dark') ? JSON.parse(localStorage.getItem('dark')) : dark
    const lang = useSelector(state => state.lang.arabic)
    const state = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : lang
    return (
        <div className=' flex gap-2 flex-wrap justify-center '>
            {state
                ?
                mediasarab.map(
                    i => <LinkItem {...i} mode={mode} />
                ) :
                medias.map(
                    i => <LinkItem {...i} mode={mode} />
                )
            }
        </div>
    )
}

export default LinksOfDetails