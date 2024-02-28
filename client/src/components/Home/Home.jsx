// Home.jsx
import { useTheme } from '../../ThemeProvider';
import { Link } from 'react-scroll';
import ScrollDown from './ScrollDown';
import RateButton from './RateButton';
import Download from './Download';
import React, { useState, useEffect, useRef } from 'react';
import './style/home.css'

const Home = ({ imageUrl }) => {

  return (
    <section className="home section" id="home">

        <img src={imageUrl} alt="" />
        <div className='scroll-rate'>

          <ScrollDown />
          <RateButton />
        </div>
    </section>
  );
};

export default Home;
