import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import DART from '../assets/dart.png';
import FLUTTER from '../assets/flutter.png';
import FIREBASE from '../assets/firebase.png';
import JAVASCRIPT from '../assets/javascript.png';
import GITHUB from '../assets/github.png';
import REACT from '../assets/react.png';
import TAILWIND from '../assets/tailwind.png';
import MSSQL from '../assets/mssql.png';
import ExperienceItem from './ExperienceItem';


const Skills = () => {
    return (
        <section name='skills' className='bg-[#244D61] w-full h-screen'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#5689C0]'>Experience</p>
                    <p className='py-4'>These are the technologies that I've worked with</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <ExperienceItem name='React JS' iconImage={REACT} />
                    <ExperienceItem name='Flutter' iconImage={FLUTTER} />
                    <ExperienceItem name='Dart' iconImage={DART} />
                    <ExperienceItem name='HTML' iconImage={HTML} />
                    <ExperienceItem name='CSS' iconImage={CSS} />
                    <ExperienceItem name='GitHub' iconImage={GITHUB} />
                    <ExperienceItem name='Firebase' iconImage={FIREBASE} />
                    <ExperienceItem name='JavaScript' iconImage={JAVASCRIPT} />
                    <ExperienceItem name='Tailwind CSS' iconImage={TAILWIND} />
                    <ExperienceItem name='Microsoft SQL' iconImage={MSSQL} />
                </div>
            </div>
        </section>
    )
}

export default Skills