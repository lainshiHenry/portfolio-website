import React from 'react'

const ExperienceItem = ({ iconImage, name }) => {
    let altName = name + ' icon';

    return (
        <div className='border-2 border-[#7b5675] hover:scale-110 duration-500'>
            <img className='h-20 w-20 mx-auto grayscale' src={iconImage} alt={altName}></img>
            <p className='my-4 text-black]'>{name}</p>
        </div>
    )
}

export default ExperienceItem