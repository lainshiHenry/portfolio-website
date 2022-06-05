import React from 'react'

const ExperienceItem = ({ iconImage, name }) => {
    let altName = name + ' icon';

    return (
        <div>

            <div className='border border-[#b18aab] hover:scale-110 duration-500 hover:bg-slate-800'>
                <img className='h-20 w-20 m-7 mx-auto ' src={iconImage} alt={altName}></img>
            </div>
        </div>

    )
}

export default ExperienceItem