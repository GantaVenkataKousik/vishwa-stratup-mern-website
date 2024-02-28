import React from 'react';
import { Link } from 'react-scroll';
import NavItem from './Nav/NavItem.jsx';
import NavButtons from './Nav/NavButtons.jsx';
import ProgressBar from './Nav/ProgressBar.jsx';
import { useTheme } from '../ThemeProvider.js';

export default function Nav() {
  const { toggleTheme } = useTheme();
  const style={
    background:'#319DC4',
    color:'#fff',
    padding:'1.2rem'
  }
  return (
    <>
      <header className="header" id="header">
        <nav className="nav container">
          <Link to="home" smooth={true} duration={500} className="nav__logo">
            <img src="./images/viswa.png" alt="" />
          </Link>
          <div data-aos="fade-in" className="nav__menu" id="nav-menu">
            <ul className="nav__list grid">
              <NavItem to="home" icon="uil-estate" label="Home" />
              <NavItem to="about" icon="uil-user" label="About" />
              <NavItem to="media" icon="uil-user" label="Media" />
              <NavItem to="venue" icon="uil-briefcase-alt" label="Venue" />
              <NavItem to="teams" style={style} className="teams" icon="uil-briefcase-alt" label="Teams" />
              <NavItem to="tickets" icon="uil-message" label="Tickets" />
            </ul>
            <i className="uil uil-times nav__close" id="nav-close"></i>
          </div>

          <NavButtons />
        </nav>
      </header>
      <ProgressBar />
    </>

  );
};
