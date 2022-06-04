import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialBottomBar = () => {
    return (
        <div className='flex fixed flex-row bottom-[-0%] left-[60%] lg:hidden' >
            <ul className=''>
                <a href='https://www.linkedin.com/in/lehenry/' className='flex justify-between items-center w-full text-gray-300 hover:-translate-y-2 duration-500'>
                    <li className='w-[60px] h-[60px] flex justify-between items-center mb-[-60px] ml-[-180px] bg-[#2c6da5]'>
                        <FaLinkedin size={30} />
                    </li>
                </a>
                <a href='https://github.com/lainshiHenry' className='flex justify-between items-center w-full text-gray-300 hover:-translate-y-2 duration-500'>
                    <li className='w-[60px] h-[60px] flex justify-between items-center mb-[-60px] ml-[-120px] bg-[#333333]'>
                        <FaGithub size={30} />
                    </li>
                </a>
                <a href='mailto:henryle913@outlook.com' className='flex justify-between items-center w-full text-gray-300 hover:-translate-y-2 duration-500'>
                    <li className='w-[60px] h-[60px] flex justify-between items-center mb-[-60px] ml-[-60px] bg-[#5689C0]'>
                        <HiOutlineMail size={30} />
                    </li>
                </a>
                <a href='/' className='flex justify-between items-center w-full text-black hover:-translate-y-2 duration-500'>
                    <li className='w-[60px] h-[60px] flex justify-between items-center mb-[0px] ml-[0px] bg-[#75E2FF]'>
                        <BsFillPersonLinesFill size={30} />

                    </li>
                </a>
            </ul>
        </div >
    );
};

export default SocialBottomBar