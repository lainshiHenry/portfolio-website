import React from 'react'

const ExperienceItem = ({ iconImage, name }) => {
    let altName = name + ' icon';

    return (
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='h-20 w-20 mx-auto' src={iconImage} alt={altName}></img>
            <p className='my-4'>{name}</p>
        </div>
    )
}

export default ExperienceItem