import React from 'react';
import { Element } from 'react-scroll';
import  Home  from './Home/Home.jsx';
import  About  from './About/About.jsx';
import  Media  from './Skills/Media.jsx';
import Venue from './Venue/Venue.jsx'
import  Achievements  from './Achievements/Achievements.jsx';
import Tickets from './Tickets/Tickets.jsx';


export default function Main({ imageUrl }) {
    
    return (
        <> 
            <main className='main'>
                <Element name="home">
                    <Home imageUrl={imageUrl} />
                </Element>
                <Element name="about">
                    <About />
                </Element>
                <Element name="media">
                    <Media />
                </Element>
                <Element name="projects">
                    <Venue />
                </Element>
                <Element name="achievements">
                    <Achievements />
                </Element>
                <Element name="ticket">
                    <Tickets />
                </Element>
            </main>
        </>
    );
}
