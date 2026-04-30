import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">

      <h2>Contact Us</h2>
      <p>We are here to help you. Reach us anytime.</p>

      <div className="contact-box">

        {/* PHONE */}
        <div className="contact-item">
          <FaPhone className="icon" />
          <h4>Phone</h4>
          <a href="tel:+923001234567">+92 300 1234567</a>
        </div>

        {/* EMAIL */}
        <div className="contact-item">
          <FaEnvelope className="icon" />
          <h4>Email</h4>
          <a href="mailto:support@queuecounter.com">
            support@queuecounter.com
          </a>
        </div>

        {/* LOCATION */}
        <div className="contact-item">
          <FaMapMarkerAlt className="icon" />
          <h4>Location</h4>
          <a
            href="https://www.google.com/maps?q=322-A,+3rd+Floor,+Bhayani+Shopping+Centre,+Block+M,+North+Nazimabad,+Karachi,+Pakistan"
            target="_blank"
            rel="noopener noreferrer"
          >
            Karachi, Pakistan
          </a>
        </div>

      </div>

    </section>
  );
};

export default Contact;