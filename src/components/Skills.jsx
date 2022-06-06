import React from 'react'
import HTML from '../assets/html-bw.png';
import CSS from '../assets/css-bw.png';
import DART from '../assets/dart-bw.png';
import FLUTTER from '../assets/flutter-bw.png';
import FIREBASE from '../assets/firebase-bw.png';
import JAVASCRIPT from '../assets/javascript-bw.png';
import GITHUB from '../assets/github-bw.png';
import REACT from '../assets/react-bw.png';
import TAILWIND from '../assets/tailwind-bw.png';
import MSSQL from '../assets/mssql.png';
import ExperienceItem from './ExperienceItem';


const Skills = () => {
    return (
        <section name='skills' className='bg-[#EAEBED] w-full min-h-screen'>
            <div className='max-w-[700px] mx-auto p-8 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#5689C0]'>Skills</p>
                    <p className='py-4'>These are the technologies that I've worked with</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 py-8'>
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

