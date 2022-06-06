import React from 'react'
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

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
                <a href='https://github.com/lainshiHenry/portfolio-website/blob/8930ebeff5dd9c0deb1e4a748877b781732e43b6/Henry%20Le%20Resume.pdf' target='_blank' rel='noreferrer' className='flex justify-between items-center w-full text-gray-300 hover:-translate-y-2 duration-500'>
                    <li className='w-[60px] h-[60px] flex justify-between items-center ml-[0px] bg-[#7b5675]'>
                        <FaFileDownload size={30} />
                    </li>
                </a>
            </ul>
        </div >


    );
};

export default SocialBottomBar