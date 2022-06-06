import React from 'react'
//import PlaceHolderImage from '../assets/placeholder-image.png'
import PortfolioWebsiteImage from '../assets/portfolio-website.png';
import RevealedDatingImage from '../assets/Revealed-dating-mockup.png';
import TileTapperMockup from '../assets/Tile-tapper-mockup.png';
import WeatherAppMockup from '../assets/Weather-app-mockup.png';
import A3MusicAppImage from '../assets/a3-music-app-image.jpg';
import ProfileItem from './ProfileItem'

const Work = () => {
    return (
        <section name='work' className='bg-[#EAEBED] w-full min-h-screen'>
            <div className='max-w-[700px] mx-auto p-8 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#5689C0]'>Work</p>
                    <p className='py-4'>Here are some of the projects I have worked on.</p>
                </div>
                <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-4 py-8'>
                    <ProfileItem image={PortfolioWebsiteImage} name='Portfolio Website' />
                    <ProfileItem image={TileTapperMockup} name='Tile Tapper Game' />
                    <ProfileItem image={RevealedDatingImage} name='Revealed Dating' />
                    {/*<ProfileItem image={PlaceHolderImage} name='Bearserk Pantry' />*/}
                    <ProfileItem image={A3MusicAppImage} name='A3! Music App' />
                    <ProfileItem image={WeatherAppMockup} name='Weather App' />
                </div>
            </div>
        </section>
    )
}

export default Work