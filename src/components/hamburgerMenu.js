import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import ReactCountryFlag from "react-country-flag";
import './hamburgerMenu.css';
import logo from '../assets/images/logo-header.jpg';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { text: 'PRODUCTOS' },
    { text: 'ACERCA DE' },
    { text: 'CONTACTO' },
    { text: 'MEDIA' },
    { text: 'PUNTOS DE VENTA' },
    { icon: <ReactCountryFlag countryCode="GB" svg style={{ width: '24px', height: '24px' }} /> },
    { icon: <ReactCountryFlag countryCode="ES" svg style={{ width: '24px', height: '24px' }} /> }
  ];

  return (
    <div className="hamburger-menu-container">
      <button className="hamburger-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      
      {isOpen && (
        <div className="menu-overlay" onClick={toggleMenu}>
          <div className="menu-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-menu-button" onClick={toggleMenu}>
              <FaTimes />
            </button>
            
            <div className="menu-header">
              <h3>Menú Principal</h3>
            </div>
            
            <ul className="menu-items">
              {menuItems.map((item, index) => (
                <li key={index} className="menu-item">
                  <a href={item.link} className="menu-link">
                    <span className="menu-icon">{item.icon}</span>
                    <span className="menu-text">{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="menu-image-container">
              <img src={logo} alt="Logo" className="menu-logo" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;