import React from 'react'
import { Link } from 'react-router-dom'

const PlanItem = ({ plan, currentid, id, setCurrentid, mode }) => {
    return (
        <Link id={id} onClick={(e) => setCurrentid((Number(e.target.id))
        )}
            className={` p-[6px] text-[15px]  lg:text-[16px] 
                                            ${id === currentid && !mode ? 'bg-primarylighter text-white shadow shadow-slate-400' :
                    id === currentid && mode ? ' shadow shadow-black bg-primarylighter text-white' :
                        id !== currentid && mode ? 'shadow shadow-black bg-lighter text-primary' :
                            'bg-white text-primary shadow shadow-slate-400'}
                                    capitalize font-bold 
                                    flex-1 text-center 
                                    transition-all duration-300 ease-in-out`}
        >
            {plan}
        </Link>
    )
}

export default PlanItem