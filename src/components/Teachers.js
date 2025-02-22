import { teachersArabic, teaches } from '../utils/data'
import { useSelector } from 'react-redux'
import LinksOfDetails from './LinksOfDetails'
import { useEffect, useState } from 'react'
import TeacherComp from './TeacherComp'

const TeachersComp = () => {
    const { dark } = useSelector(state => state.mode)
    const mode = localStorage.getItem('dark') ? JSON.parse(localStorage.getItem('dark')) : dark
    const lang = useSelector(state => state.lang.arabic)
    const state = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : lang
    const text = state ? 'المعلمون ' : 'Our Teachers'
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (index < text.length) {
                setDisplayText((prev) => prev + text.charAt(index));
                setIndex((prev) => prev + 1);
            }
        }, 130);
        return () => clearTimeout(timeout);
    }, [index, text]);
    return (
        <div className={`teachers ${mode ? 'bg-dark' : 'bg-light'} pb-[40px]`}>
            <div className=' container px-7 md:px-[40px] lg:px-[60px] xl:px-[140px] mx-auto'>
                <h2 className=' title  flex items-center gap-2'>
                    {displayText}
                </h2>
                <div className=' grid md:grid-cols-2 lg:grid-cols-3  grid-cols-1 gap-5'>
                    {!state
                        ?
                        teaches.map(item => <TeacherComp {...item} state={state} mode={mode} />)
                        :
                        teachersArabic.map(item => <TeacherComp {...item} state={state} mode={mode} />)
                    }
                </div>
                <div className=' pt-[50px]'>
                    <LinksOfDetails />
                </div>
            </div>
        </div>
    )
}

export default TeachersComp