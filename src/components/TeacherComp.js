import { Link } from 'react-router-dom'
const TeacherComp = ({ id, desc, imagedark, name, image, mode, state }) => {
    return (
        <div
            data-aos="zoom-in"
            key={id}
            className={`relative teacher-item flex p-2 flex-col 
                                            ${mode ? 'bg-lighter shadow shadow-black after:bg-lighter  text-textDark' : 'after-light shadow shadow-slate-400 bg-white'} gap-3`}>
            <div className={` overflow-hidden flex justify-center items-center  p-2`}>
                <img
                    src={!mode ? image : imagedark}
                    alt="teachers-image1 "
                    className={`h-[160px]  object-cover ${state ? 'mr-[-30px]' : 'ml-[-48px]'}`} />
                <h3 className={`text-[17px]  ${state ? 'mr-[-25px]' : 'ml-[-70px]'} font-bold px-1 text-center  capitalize`}>
                    {name}
                </h3>
            </div>
            <p className='mt-[-28px] px-2  '>{desc.substring(0, 214) + '...'}</p>
            <div className=' mt-auto'>
                <Link className=' w-full' to={'/teachers/' + id}>
                    <button className='w-full btn-pri'>{state ? 'اقرأ المزيد' : 'read more'}</button>
                </Link>
            </div>
        </div>
    )
}

export default TeacherComp