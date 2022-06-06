import React from 'react'

const ExperienceItem = ({ iconImage, name }) => {
    let altName = name + ' icon';
    return (
        <div>
            <div className='relative border border-[#b18aab] hover:scale-110 duration-500 hover:bg-slate-800' >
                <img className='h-20 w-20 m-7 mx-auto hover:opacity-80' src={iconImage} alt={altName}></img>

                <p className='absolute top-0 bottom-0 left-0 right-0 mx-auto opacity-0 hover:opacity-100 leading-[150px] duration-500 text-[#EAEBED] text-center'>{name}</p>
            </div>
        </div>

    )
}

export default ExperienceItem