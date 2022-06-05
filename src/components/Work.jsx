import React from 'react'
import PlaceHolderImage from '../assets/placeholder-image.png'

const Work = () => {
    return (
        <section name='work' className='bg-[#EAEBED] w-full h-screen'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#5689C0]'>Work</p>
                    <p className='py-4'>Here are some of the projects I have worked on.</p>
                </div>
                <div className='w-full grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    <ul>
                        <li><img src={PlaceHolderImage} alt='image 1'></img></li>
                        <li><img src={PlaceHolderImage} alt='image 2'></img></li>
                        <li><img src={PlaceHolderImage} alt='image 3'></img></li>

                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Work