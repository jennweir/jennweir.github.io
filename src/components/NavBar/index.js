import React, { useEffect } from 'react';
// import { useState } from 'react';
import ScrollToTop from "react-scroll-to-top";
import DropDown from "../DropDown/index";
import {
    Nav,
    NavLink,
    NavMenu,
  } from './NavBarElements';
  
const Navbar = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakPoint = 768;
  useEffect(() => {
  const handleWindowResize = () => setWidth(window.innerWidth);
  window.addEventListener("resize", handleWindowResize);
  return () => window.removeEventListener("resize", handleWindowResize);
  },[]);

  // const [theme, setTheme] = useState('light');
  // const toggleTheme = () => {
  //   if (theme === 'light') {
  //     setTheme('dark');
  //   } else {
  //     setTheme('light');
  //   }
  // };
  // useEffect(() => {
  //   document.body.className = theme;
  // }, [theme]);
  return (
    <>
      <Nav>
      {width > breakPoint? (
        <div></div>
      ) : (
        <DropDown/>
      )}
        <NavMenu>
          <ScrollToTop smooth/>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/about/" activeStyle>
            About
          </NavLink>
          <NavLink to="/projects/" activeStyle>
            Projects
          </NavLink> 
          <NavLink to="/blog/" activeStyle>
            Blog
          </NavLink>
          {/* <button onClick={toggleTheme}>Dark Mode</button> */}
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;