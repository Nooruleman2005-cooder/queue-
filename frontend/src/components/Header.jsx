import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  return ( <>
     <div className="top-header">
    
          {/* LOGO */}
          <div className="logo">
            QueueCounter
          </div>
    
          {/* SEARCH BAR */}
          <div className="search-bar">
            <input type="text" placeholder="Search products..." />
            <button>
              <FaSearch />
            </button>
          </div>
    
        </div>
    <nav className="navbar navbar-expand-lg custom-nav px-4">

      {/* TOGGLE BUTTON */}
      <button 
        className="navbar-toggler mobile-toggle" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* COLLAPSE MENU */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto text-center">
          <li className="nav-item">
            <a className="nav-link nav-anim" href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-anim" href="#about">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-anim" href="#products">Products</a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-anim" href="#contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
    </>
  );
};

export default Header;