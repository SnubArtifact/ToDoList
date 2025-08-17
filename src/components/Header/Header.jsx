import React from 'react';
import useDarkMode from '../../hooks/useDarkMode';
import './Header.css';

const Header = () => {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <header className="header">
      <div style={{display:"flex", gap:"10px"}} className="header-logo">
        <img id="logo" style={{width:"50px"}} src='/logo.svg' alt="Logo" className="logo" />
        <h1>TaskMask</h1>
      </div>
      
      <nav className="header-nav">
        <ul>
         
          <li>
            <button 
              onClick={toggleDarkMode} 
              className="theme-toggle"
              aria-label="Toggle dark mode"
            >
              {isDark ? '☀︎' : '⏾'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;