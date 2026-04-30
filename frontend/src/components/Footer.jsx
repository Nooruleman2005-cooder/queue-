import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-box">
          <h3 className="footer-brand">QueueCounter</h3>
          <p>Smart Queue & Buzzer Systems for modern businesses.</p>
        </div>

        <div className="footer-box">
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-box">
          <h4>Support</h4>
          <a href="#">Help Center</a>
          <a href="#">Terms</a>
          <a href="#">Privacy Policy</a>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 QueueCounter. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer