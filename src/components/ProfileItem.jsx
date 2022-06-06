import React, { useState } from 'react'

const ProfileItem = ({ image, name }) => {
    const [isHovering, setIsHovering] = useState(false);
    const isHoveringTrue = () => { setIsHovering(true) };
    const isHoveringFalse = () => { setIsHovering(false) };

    let altName = name + ' icon';

    return (
        <div onMouseOver={isHoveringTrue} onMouseOut={isHoveringFalse}>
            <div className='relative border border-[#b18aab] hover:scale-110 duration-500 hover:bg-slate-800 w-72 h-40' >
                {/*<img className='mx-auto w-full h-full opacity-1 hover:opacity-30 -z-10' src={image} alt={altName}></img>*/}
                {isHovering ? <img className='mx-auto h-full opacity-30' src={image} alt={altName}></img> : <img className='mx-auto h-full opacity-100' src={image} alt={altName}></img>}
                <p className='absolute top-0 bottom-0 left-0 right-0 mx-auto opacity-0 hover:opacity-100 leading-[150px] duration-500 text-[#EAEBED] text-center z-10'>{name}</p>
            </div>
        </div>

    )
}

export default ProfileItem