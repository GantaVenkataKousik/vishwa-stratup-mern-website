// App.js

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './ThemeProvider.js';
import Nav from './components/Nav.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

const AppWrapper = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  const imageUrl = isDarkTheme
    ? "./images/viswa-dark-theme-img.png"
    : "./images/viswa-home.png";

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Nav toggleTheme={toggleTheme} />
        <App imageUrl={imageUrl} />
      </BrowserRouter>
    </ThemeProvider>
  );
};

root.render(<AppWrapper />);
