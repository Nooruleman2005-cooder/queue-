import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const goHomeSection = (e, id) => {
    e.preventDefault();
    navigate("/");

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-box">
          <h3 className="footer-brand">QueueCounter</h3>
          <p>Smart Queue & Buzzer Systems for modern businesses.</p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-box">
          <h4>Quick Links</h4>

          <a href="#home" onClick={(e) => goHomeSection(e, "home")}>Home</a>
          <a href="#about" onClick={(e) => goHomeSection(e, "about")}>About</a>
          <a href="#products" onClick={(e) => goHomeSection(e, "products")}>Products</a>
          <a href="#contact" onClick={(e) => goHomeSection(e, "contact")}>Contact</a>
        </div>

        {/* SUPPORT */}
        <div className="footer-box">
          <h4>Support</h4>

          <a href="#" onClick={(e) => e.preventDefault()}>Help Center</a>
          <a href="#" onClick={(e) => e.preventDefault()}>Terms</a>
          <a href="#" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 QueueCounter. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;