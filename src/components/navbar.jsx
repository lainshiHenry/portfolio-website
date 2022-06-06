import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/logo-bw.png';
import { Link } from 'react-scroll';

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className=' w-full h-[80px] flex justify-between items-center px-4 bg-[#EAEBED] border-b border-black sticky top-0'>

            <img src={Logo} alt='Logo' style={{ width: '80px' }} />

            {/* menu */}
            <navigation className='hidden md:flex '>
                <ul className='hidden md:flex'>
                    <li><Link to='home' smooth={true} duration={500}>Home</Link></li>
                    <li><Link to='about' smooth={true} duration={500} offset={-70}>About</Link></li>
                    <li><Link to='skills' smooth={true} duration={500} offset={-70}>Skills</Link></li>
                    <li><Link to='work' smooth={true} duration={500} offset={-70}>Work</Link></li>
                    <li><Link to='contact' smooth={true} duration={500} offset={-70}>Contact</Link></li>
                </ul>
            </navigation>


            {/* Hamburger */}
            <div className='md:hidden z-10' onClick={handleClick}>

                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#EAEBED] flex flex-col justify-center items-center'}>
                <li className='py-4 text-4xl'><Link to='home' smooth={true} duration={500}>Home</Link></li>
                <li className='py-4 text-4xl'><Link to='about' smooth={true} duration={500} offset={-70}>About</Link></li>
                <li className='py-4 text-4xl'><Link to='skills' smooth={true} duration={500} offset={-70}>Skills</Link></li>
                <li className='py-4 text-4xl'><Link to='work' smooth={true} duration={500} offset={-70}>Work</Link></li>
                <li className='py-4 text-4xl'><Link to='contact' smooth={true} duration={500} offset={-70}>Contact</Link></li>
            </ul>



        </div>
    );
};

export default NavBar