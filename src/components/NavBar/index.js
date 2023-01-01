import React, { useState, useEffect } from 'react';
import ScrollToTop from "react-scroll-to-top";
import {
    Nav,
    NavLink,
    NavMenu,
  } from './NavBarElements';
  
const Navbar = () => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <>
      <Nav>
        <NavMenu>
          <ScrollToTop smooth/>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/projects' activeStyle>
            Projects
          </NavLink> 
          <NavLink to='/blog' activeStyle>
            Blog
          </NavLink>
          <button onClick={toggleTheme}>Dark Mode</button>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;