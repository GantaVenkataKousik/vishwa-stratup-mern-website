import React, { useState } from 'react';
import './Venue.css'
const Skills = () => {

  return (
    <section className="venue media" id="venue">
        <h2>venue</h2>
        <div className='details'>
            <p className='address'>
                <h3>
                    Address
                </h3>
                <p>VIT,Bhimavaram</p>
            </p>
            <p className='timing'>
                <h3>Timing</h3>
                <p>9AM to 6PM</p>
            </p>
        </div>
        <div className='details2'>
                <img src="https://www.collegebatch.com/static/clg-gallery/vishnu-institute-of-technology-bhimavaram-231866.jpg" alt="" />
        </div>
    </section>
  );
};

export default Skills;
