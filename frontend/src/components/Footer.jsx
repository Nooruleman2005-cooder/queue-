import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { FaEnvelope, FaPhone, FaWhatsapp, FaArrowUp } from "react-icons/fa";

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

      <div className="footer-inner">

        {/* LEFT */}
        <div className="footer-left">
          <h2 className="footer-brand">QueueCounter</h2>

          <p>Smart Queue & Buzzer Systems for modern businesses.</p>

          {/* CONTACT ICONS */}
          <div className="footer-icons">

            {/* EMAIL */}
            <a href="mailto:info@queuecounter.com" className="footer-link">
              <FaEnvelope />
            </a>

            {/* CALL */}
            <a href="tel:+923333298578" className="footer-link">
              <FaPhone />
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/+923333298578?text=Hello%20I%20want%20to%20know%20about%20your%20products"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              <FaWhatsapp />
            </a>

          </div>

          <button
            className="back-top"
            onClick={(e) => goHomeSection(e, "home")}
          >
            <FaArrowUp /> Back to Top
          </button>
        </div>

        {/* RIGHT */}
        <div className="footer-right">

          <div className="footer-box">
            <h4>Quick Links</h4>
            <a href="#home" onClick={(e) => goHomeSection(e, "home")}>Home</a>
            <a href="#about" onClick={(e) => goHomeSection(e, "about")}>About</a>
            <a href="#products" onClick={(e) => goHomeSection(e, "products")}>Products</a>
          </div>

          <div className="footer-box">
            <h4>Support</h4>
            <Link to="/privacypolicy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 QueueCounter. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;