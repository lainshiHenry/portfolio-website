import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div name='home' className='bg-[#EAEBED] w-full h-screen'>
            <div className='max-w-[700px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-black'>Hi! My name is</p>
                <h1 className='text-8xl sm:text-9xl font-bold text-black'>Henry Le</h1>
                <h2 className='text-3xl sm:text-5xl font-bold text-[#7b5675]'>I'm a Full Stack Software Developer.</h2>
                <div>
                    <Link to='work' smooth={true} duration={500} offset={-70}><button className='hover:text-white border-2 border-[#7b5675] text-[#7b5675] px-6 py-3 my-4 flex items-center hover:bg-[#7b5675]'>View Work <HiArrowNarrowRight className='ml-2' /></button> </Link>
                </div>
            </div>

        </div>
    )
}

export default Home