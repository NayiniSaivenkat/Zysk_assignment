import React, { useState } from 'react';
import './Navbar.css'; // Import the CSS file
import Logo from "../assets/Logo.png";
import Profile from "../assets/Dropdown.png";
import MenuIcon from "../assets/menu_button.png"; // Add a hamburger icon image

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className='logo-wrap'>
        <div className="logo">
          <img src={Logo} alt="Logo" />
          <span className="logo-text" style={{color:"black"}}>Untitled UI</span>
        </div>
        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <ul>
            <li style={{color:"black"}}>Home</li>
            <li style={{color:"black"}}>Products <span>&#9662;</span></li>
            <li style={{color:"black"}}>Resources <span>&#9662;</span></li>
            <li style={{color:"black"}}>Pricing</li>
          </ul>
        </nav>
      </div>

      {/* Toggle Button for Small Screens */}
      <div className="menu-icon" onClick={toggleMenu}>
        <img src={MenuIcon} alt="Menu Toggle" />
      </div>

      {/* Profile Picture for Larger Screens */}
      <div className="profile-pic">
        <img src={Profile} alt="Profile" />
      </div>
    </nav>
  );
};

export default Navbar;

