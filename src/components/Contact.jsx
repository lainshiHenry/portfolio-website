import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Contact = () => {
    return (
        <section name='contact' className='bg-[#EAEBED] w-full h-screen'>
            <div className='max-w-[700px] mx-auto p-8 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#5689C0]'>Contact</p>
                </div>
                <div>
                    <p className='py-4 w-full'>You can reach me at one contact methods found in the social links below.</p>
                    <ul>
                        <a href='https://www.linkedin.com/in/lehenry/' target='_blank' rel='noreferrer'><li className='flex py-2'><FaLinkedin size={30} /> LinkedIn</li></a>
                        <a href='mailto:henryle913@outlook.com'><li className='flex py-2'><HiOutlineMail size={30} /> Email</li></a>
                    </ul>


                </div>
            </div>
        </section>
    )
}

export default Contact