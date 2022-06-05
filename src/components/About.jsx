import React from 'react'

const About = () => {
    return (
        <section name='about' className='bg-[#EAEBED] w-full h-screen'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#5689C0]'>About</p>
                </div>
                <div>
                    <p className='py-8 w-full'>I'm a full-stack web and mobile software developer building exception and functional digital experiences.</p>
                </div>
            </div>
        </section>
    )
}

export default About