import React from 'react'

const About = () => {
    return (
        <section name='about' className='bg-[#EAEBED] w-full min-h-screen'>
            <div className='max-w-[700px] mx-auto p-8 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#5689C0]'>About</p>
                </div>
                <div>
                    <p className='py-4 w-full'>I'm a full-stack web and mobile software developer, building software digital experiences that people find functional, fun, and even competitive.</p>
                    <p className='py-4 w-full'>My interest in web development started back in 2012 where I needed a consolidated web page that contained all of the video gaming information, tips and tricks, and news about my favourite video games. There wasn't a webpage like that at the time, so I ventured and created my own webpage.</p>
                    <p className='py-4 w-full'>Fast-forward to today, i've had the opportunity to build my personal portfolio website, a dating app, a household pantry web and mobile app, a young children-focused music mobile app, and a game. </p>


                </div>
            </div>
        </section>
    )
}

export default About