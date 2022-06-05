import React from 'react'

const Contact = () => {
    return (
        <section name='contact' className='bg-[#EAEBED] w-full h-screen'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#5689C0]'>Contact</p>
                </div>
                <div className='w-full grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    <ul>
                        <li><a href='mailto:henryle913@outlook.com'>Email: henryle913@outlook.com</a></li>
                        <li><a href='https://www.linkedin.com/in/lehenry/'>LinkedIn</a></li>

                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Contact