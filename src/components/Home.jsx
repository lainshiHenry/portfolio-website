import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
    return (
        <div name='home' className='bg-[#244D61] w-full h-screen'>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#75E2FF]'>Hi! My name is</p>
                <h1 className='text-8xl sm:text-9xl font-bold text-[#EAEBED]'>Henry Le</h1>
                <h2 className='text-3xl sm:text-5xl font-bold text-[#EAEBED]'>I'm a Full Stack Software Developer.</h2>
                <p className='text-[#EAEBED] py-4 max-w-[700px]'>Summary</p>

                <div>
                    <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#5689C0]'>View Work <HiArrowNarrowRight className='ml-2' /> </button>
                </div>
            </div>

        </div>
    )
}

export default Home