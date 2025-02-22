import React from 'react'
const ChooseItem = ({ mode, imageDark, image, text, title, id, aos }) => {
    return (
        <div
            className={`flex flex-col pb-1
            ${mode ? "bg-lighter shadow-md" : "bg-white border border-gray-300"}`}
            key={id}
            data-aos={aos}>
            <img
                className=' w-[110px] h-[110px] object-contain mx-auto'
                src={mode ? imageDark : image}
                alt="choose-item" />
            <h3 className='p-1 font-bold lg:text-[20px] text-[18px]'>
                {title}
            </h3>
            <p
                className={`p-2 ${mode ? " text-textDark" : ""} text-[15px] leading-[22px]`}
                data-aos="fade-up">
                {text}
            </p>
        </div>
    )
}

export default ChooseItem