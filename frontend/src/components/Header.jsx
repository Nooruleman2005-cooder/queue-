import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();
  const goHomeSection = (id) => {
    navigate("/");
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (<>
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
    <nav className="navbar navbar-expand-lg custom-nav px-4  navbar-dark">

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
            <a
              href="#home"
              className="nav-link nav-anim"
              onClick={(e) => goHomeSection(e, "home")}
            >
              Home
            </a>
          </li>

          <li className="nav-item">
            <a
              href="#about"
              className="nav-link nav-anim"
              onClick={(e) => goHomeSection(e, "about")}
            >
              About Us
            </a>
          </li>

          <li className="nav-item">
            <a
              href="#products"
              className="nav-link nav-anim"
              onClick={(e) => goHomeSection(e, "products")}
            >
              Products
            </a>
          </li>

          <li className="nav-item">
            <a
              href="#contact"
              className="nav-link nav-anim"
              onClick={(e) => goHomeSection(e, "contact")}
            >
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