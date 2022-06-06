import React from 'react'
import { FaGithub, FaLinkedin, FaAppStoreIos } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialBottomBar = () => {
    return (
        < div className='flex fixed bottom-[0%] left-[40%]' >
            <ul className='flex'>
                <a href='https://www.linkedin.com/in/lehenry/' className='flex justify-between items-center w-full text-gray-300 hover:-translate-y-2 duration-500'>
                    <li className='w-[60px] h-[60px] flex justify-between items-center ml-[0px] bg-[#333333]'>
                        <FaLinkedin size={30} />
                    </li>

                </a>
                <a href='https://github.com/lainshiHenry' className='flex justify-between items-center w-full text-gray-300 hover:-translate-y-2 duration-500'>
                    <li className='w-[60px] h-[60px] flex justify-between items-center ml-[0px] bg-[#7b5675]'>
                        <FaGithub size={30} />
                    </li>
                </a>
                <a href='mailto:henryle913@outlook.com' className='flex justify-between items-center w-full text-gray-300 hover:-translate-y-2 duration-500'>
                    <li className='w-[60px] h-[60px] flex justify-between items-center ml-[0px]  bg-[#333333]'>
                        <HiOutlineMail size={30} />
                    </li>
                </a>
                <a href='/' className='flex justify-between items-center w-full text-gray-300 hover:-translate-y-2 duration-500'>
                    <li className='w-[60px] h-[60px] flex justify-between items-center ml-[0px] bg-[#7b5675]'>
                        <BsFillPersonLinesFill size={30} />
                    </li>
                </a>
            </ul>
        </div >


    );
};

export default SocialBottomBar