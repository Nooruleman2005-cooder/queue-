import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const Header = ({ search, setSearch, productsRef }) => {

  const navigate = useNavigate();

  const goHomeSection = (id) => {
    navigate("/");
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSearchChange = (value) => {
    setSearch(value);
  };

  const handleSearchClick = () => {
    scrollToProducts();
    setSearch("");
  };

  return (
    <>
      <div className="top-header">

        <div className="logo">
          <img src="/queue-logo.png" alt="Logo" />
        </div>

        <div className="search-bar">

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => handleSearchChange(e.target.value)}
          />

          <button onClick={handleSearchClick}>
            <FaSearch />
          </button>

        </div>
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