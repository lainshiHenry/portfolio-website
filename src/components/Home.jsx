import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
    const summaryText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in sapien vel nulla mattis rhoncus nec quis leo. Proin mollis mauris lectus. Integer eu leo in lorem placerat eleifend in quis dui.';


    return (
        <div name='home' className='bg-[#EAEBED] w-full h-screen'>
            <div className='max-w-[700px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-black'>Hi! My name is</p>
                <h1 className='text-8xl sm:text-9xl font-bold text-black'>Henry Le</h1>
                <h2 className='text-3xl sm:text-5xl font-bold text-[#7b5675]'>I'm a Full Stack Software Developer.</h2>
                <p className='text-black py-4 max-w-[700px]'>{summaryText}</p>

                <div>
                    <button className='hover:text-white border-2 border-[#7b5675] text-[#7b5675] px-6 py-3 my-2 flex items-center hover:bg-[#7b5675]'>View Work <HiArrowNarrowRight className='ml-2' /> </button>
                </div>
            </div>

        </div>
    )
}

export default Home