import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../assets/logo.png'

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#244D61]'>
            <img src={Logo} alt='Logo Image' style={{ width: '80px' }} />

            {/* menu */}
            <navigation className='hidden md:flex'>
                <ul className='hidden md:flex'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Work</li>
                    <li>Contact</li>
                </ul>
            </navigation>

            {/* Hamburger */}
            <div className='md:hidden z-10' onClick={handleClick}>
                <FaBars />
            </div>

            {/* Mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#244D61] flex flex-col justify-center items-center'}>
                <li className='py-4 text-4xl'>Home</li>
                <li className='py-4 text-4xl'>About</li>
                <li className='py-4 text-4xl'>Skills</li>
                <li className='py-4 text-4xl'>Work</li>
                <li className='py-4 text-4xl'>Contact</li>
            </ul>

            {/* Social menu */}
            <navigation className='hidden'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Work</li>
                    <li>Contact</li>
                </ul>
            </navigation>
        </div>
    );
};

export default NavBar