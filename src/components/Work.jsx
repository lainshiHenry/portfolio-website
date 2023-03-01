import React from 'react'
//import PlaceHolderImage from '../assets/placeholder-image.png'
import PortfolioWebsiteImage from '../assets/portfolio-website.png';
import RevealedDatingImage from '../assets/Revealed-dating-mockup.png';
import TileTapperMockup from '../assets/Tile-tapper-mockup.png';
import WeatherAppMockup from '../assets/Weather-app-mockup.png';
import BirthdayCardAppMockup from '../assets/birthday-card-app.png';
import A3MusicAppImage from '../assets/a3-music-app-mockup.png';
import ProfileItem from './ProfileItem'

const Work = () => {
    return (
        <section name='work' className='bg-[#EAEBED] w-full min-h-screen' id='work'>
            <div className='max-w-[700px] mx-auto p-8 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#5689C0]'>Work</p>
                    <p className='py-4'>Here are some of the projects I have worked on.</p>
                </div>
                <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-4 py-8'>
                    <ProfileItem image={RevealedDatingImage} name='Revealed Dating' linkRef={"#work"}/>
                    <ProfileItem image={PortfolioWebsiteImage} name='Portfolio Website' linkRef={"#"}/>
                    <ProfileItem image={BirthdayCardAppMockup} name='Birthday Card App' linkRef={"https://demo.d4bszuo33yebe.amplifyapp.com/"}/>
                    <ProfileItem image={A3MusicAppImage} name='A3! Music App' linkRef={"https://master.d2dp8mla44s8xb.amplifyapp.com/"}/>
                    <ProfileItem image={TileTapperMockup} name='Tile Tapper Game' linkRef={"https://apps.apple.com/ca/app/tile-tapper/id1622062104"}/>
                    {/*<ProfileItem image={PlaceHolderImage} name='Bearserk Pantry' />*/}
                    <ProfileItem image={WeatherAppMockup} name='Weather App' linkRef={"https://master.dim313iqi4qkz.amplifyapp.com/"}/>
                </div>
            </div>
        </section>
    )
}

export default Work