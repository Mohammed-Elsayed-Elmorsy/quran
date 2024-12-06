import React, { useEffect, useState } from 'react'
import TopNav from '../components/TopNav'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useSelector } from 'react-redux'
import { medias, mediasarab, progs, progsArabic } from '../utils/data'
import { Link, useParams } from 'react-router-dom'
import LinksOfDetails from '../components/LinksOfDetails'

const PorgDetails = () => {
    const lang = useSelector(state => state.lang.arabic)
    const state = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : lang
    const { id } = useParams()
    const [prog, setProg] = useState(null)
    useEffect(() => {
        const specificprog = !state ? progs.find(i => i.id.toString() === id) :
            progsArabic.find(i => i.id.toString() === id)
        setProg(specificprog)
        window.scrollTo(0, 0);
    }, [id])
    return (
        <div className='details-page'>
            <TopNav />
            <Header />
            <div className='details-page-content'>
                <div className=' container px-7  mx-auto pb-[70px]'>
                    <h2 className=' title '>{prog?.title}</h2>
                    <p className=' text-[20px]'>{prog?.desc}
                        Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. Odit libero minus vel ratione
                        repellat modi veritatis laboriosam dicta? Pariatur, aliquam.
                        Eligendi consectetur error ullam
                        perferendis quidem alias voluptatibus iure sit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugit harum necessitatibus dolor. A doloremque inventore quaerat rem,
                        suscipit alias! Minima in, consequuntur libero fugiat eveniet ipsa earum totam expedita, ipsum,
                        assumenda debitis hic eius vel explicabo iusto ipsam dolorum omnis.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Dolorum qui sit laborum corrupti, obcaecati voluptates eveniet quaerat, magni veritatis
                        fuga, saepe vero. Obcaecati totam,
                        exercitationem repellendus unde et eos dolores.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aliquid necessitatibus,
                        quisquam ipsam facilis
                        assumenda!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, deserunt!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, quod?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, quasi?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sint non
                        praesentium enim totam, modi culpa necessitatibus perspiciatis illum adipisci
                        pariatur aut. Dolorem officia, aliquid vitae aut
                        totam sunt nisi.
                    </p>
                </div>
            </div>
            <div className=' pb-[70px]'>
                <LinksOfDetails />
            </div>
            <Footer />
        </div>
    )
}

export default PorgDetails