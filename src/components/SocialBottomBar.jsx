import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialBottomBar = () => {
    return (
        <div className='flex fixed flex-col bottom-[00%] left-[35%] lg:hidden' >
            <ul>
                <a href='https://www.linkedin.com/in/lehenry/' className='inline-block justify-between items-center w-full text-gray-300'>
                    <li className='w-[60px] h-[60px] flex justify-between items-center ml-[-100px] bg-[#2c6da5]'>
                        <FaLinkedin size={30} />
                    </li>
                </a>
                <a href='https://github.com/lainshiHenry' className='inline-block justify-between items-center w-full text-gray-300'>
                    <li className='w-[60px] h-[60px] flex justify-between items-center ml-[-100px] bg-[#333333]'>
                        <FaGithub size={30} />
                    </li>
                </a>
                <a href='mailto:henryle913@outlook.com' className='flex justify-between items-center w-full text-gray-300'>
                    <li className='w-[60px] h-[60px] flex justify-between items-center ml-[-100px] bg-[#5689C0]'>
                        <HiOutlineMail size={30} />
                    </li>
                </a>
                <a href='/' className='flex justify-between items-center w-full text-black'>
                    <li className='w-[60px] h-[60px] flex justify-between items-center ml-[-100px] bg-[#75E2FF]'>
                        <BsFillPersonLinesFill size={30} />

                    </li>
                </a>
            </ul>
        </div >
    );
};

export default SocialBottomBar