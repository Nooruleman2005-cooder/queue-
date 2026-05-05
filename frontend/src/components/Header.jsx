import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { FaPhoneAlt } from 'react-icons/fa';

const Header = () => {

  const navigate = useNavigate();

  const goHomeSection = (id) => {
    navigate("/");
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const phoneNumber = "+923001234567"; 

  return (
    <>
      <div className="top-header">

        <div className="logo">
          <img src="/queue-logo.png" alt="Logo" />
        </div>

      <a href={`tel:${phoneNumber}`} className="call-link">
  <FaPhoneAlt /> +92 300 1234567
</a>
      </div>

      <nav className="navbar navbar-expand-lg custom-nav px-4 navbar-dark">

        <button
          className="navbar-toggler mobile-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto text-center">

            <li className="nav-item">
              <a href="#home" className="nav-link nav-anim"
                onClick={() => goHomeSection("home")}>
                Home
              </a>
            </li>

            <li className="nav-item">
              <a href="#about" className="nav-link nav-anim"
                onClick={() => goHomeSection("about")}>
                About Us
              </a>
            </li>

            <li className="nav-item">
              <a href="#products" className="nav-link nav-anim"
                onClick={() => goHomeSection("products")}>
                Products
              </a>
            </li>

            <li className="nav-item">
              <a href="#contact" className="nav-link nav-anim"
                onClick={() => goHomeSection("contact")}>
                Contact Us
              </a>
            </li>

          </ul>
        </div>

      </nav>
    </>
  );
};

export default Header;