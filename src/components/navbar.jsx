import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaAppStoreIos } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo-inverse.png';
import { Link } from 'react-scroll';

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#EAEBED] border-b border-black'>
            <img src={Logo} alt='Logo' style={{ width: '80px' }} />

            {/* menu */}
            <navigation className='hidden md:flex'>
                <ul className='hidden md:flex'>
                    <li><Link to='home' smooth={true} duration={500}>Home</Link></li>
                    <li><Link to='about' smooth={true} duration={500}>About</Link></li>
                    <li><Link to='skills' smooth={true} duration={500}>Skills</Link></li>
                    <li><Link to='work' smooth={true} duration={500}>Work</Link></li>
                    <li><Link to='contact' smooth={true} duration={500}>Contact</Link></li>
                </ul>
            </navigation>

            {/* Hamburger */}
            <div className='md:hidden z-10' onClick={handleClick}>

                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#244D61] flex flex-col justify-center items-center'}>
                <li className='py-4 text-4xl'><Link to='home' smooth={true} duration={500}>Home</Link></li>
                <li className='py-4 text-4xl'><Link to='about' smooth={true} duration={500}>About</Link></li>
                <li className='py-4 text-4xl'><Link to='skills' smooth={true} duration={500}>Skills</Link></li>
                <li className='py-4 text-4xl'><Link to='work' smooth={true} duration={500}>Work</Link></li>
                <li className='py-4 text-4xl'><Link to='contact' smooth={true} duration={500}>Contact</Link></li>
            </ul>

            {/* Social menu */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <a href='https://www.linkedin.com/in/lehenry/' className='flex justify-between items-center w-full text-gray-300'>
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#2c6da5]'>
                            LinkedIn <FaLinkedin size={30} />
                        </li>

                    </a>
                    <a href='https://github.com/lainshiHenry' className='flex justify-between items-center w-full text-gray-300'>
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                            GitHub <FaGithub size={30} />
                        </li>
                    </a>
                    <a href='/' className='flex justify-between items-center w-full text-gray-300'>
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3780EB]'>
                            App Store <FaAppStoreIos size={30} />
                        </li>
                    </a>
                    <a href='mailto:henryle913@outlook.com' className='flex justify-between items-center w-full text-gray-300'>
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#5689C0]'>
                            Email <HiOutlineMail size={30} />
                        </li>
                    </a>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#75E2FF]'>
                        <a href='/' className='flex justify-between items-center w-full text-black'>
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>


        </div>
    );
};

export default NavBar