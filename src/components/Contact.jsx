import React from 'react'
import { FaLinkedin, FaFileDownload } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Contact = () => {
    return (
        <section name='contact' className='bg-[#EAEBED] w-full h-screen' tabIndex="0">
            <div className='max-w-[700px] mx-auto p-8 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#5689C0]'>Contact</p>
                </div>
                <div>
                    <p className='py-4 w-full'>You can reach me at one contact methods found in the social links below.</p>
                    <ul>
                        <a href='https://www.linkedin.com/in/lehenry/' target='_blank' rel='noreferrer'><li className='flex py-2'><FaLinkedin size={30} /> LinkedIn</li></a>
                        <a href='mailto:henryle913@outlook.com'><li className='flex py-2'><HiOutlineMail size={30} /> Email</li></a>
                        <a href='https://github.com/lainshiHenry/portfolio-website/blob/8930ebeff5dd9c0deb1e4a748877b781732e43b6/Henry%20Le%20Resume.pdf' target='_blank' rel='noreferrer'><li className='flex py-2'><FaFileDownload size={30} /> Resume</li></a>
                    </ul>


                </div>
            </div>
        </section>
    )
}

export default Contact