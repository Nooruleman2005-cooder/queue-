import React from "react";
import { FaEnvelope, FaShieldAlt, FaUserLock, FaDatabase, FaCookieBite, FaGlobe } from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">

      <div className="privacy-content">
        <h1><FaShieldAlt /> Privacy Policy</h1>
        <p className="last-updated">Last Updated: January 2026</p>

        <section>
          <h2><FaUserLock /> 1. Introduction</h2>
          <p>
            Welcome to QueueCounter. We value your privacy and are committed to protecting your personal data.
            This Privacy Policy explains how your information is collected, used, and safeguarded when you
            interact with our platform.
          </p>
        </section>

        <section>
          <h2><FaDatabase /> 2. Information We Collect</h2>
          <p>We collect different types of information to provide better services:</p>
          <ul>
            <li>Personal details such as name, email, and phone number</li>
            <li>Technical data like browser type, device, and IP address</li>
            <li>Usage data including pages visited and time spent</li>
            <li>Customer inquiries and support messages</li>
          </ul>
        </section>

        <section>
          <h2>3. How We Use Your Information</h2>
          <p>Your data helps us improve and deliver our services:</p>
          <ul>
            <li>To operate and maintain our system</li>
            <li>To personalize your experience</li>
            <li>To communicate updates and offers</li>
            <li>To improve website performance and functionality</li>
          </ul>
        </section>

        <section>
          <h2>4. Data Retention</h2>
          <p>
            We retain your personal information only for as long as necessary to fulfill the purposes
            outlined in this policy, unless a longer retention period is required by law.
          </p>
        </section>

        <section>
          <h2>5. Sharing of Information</h2>
          <p>
            We do not sell your personal data. Your information may be shared with:
          </p>
          <ul>
            <li>Trusted service providers who help operate our platform</li>
            <li>Legal authorities if required by law</li>
            <li>Business partners for service improvements (without compromising privacy)</li>
          </ul>
        </section>

        <section>
          <h2>6. Data Security</h2>
          <p>
            We implement strong security measures such as encryption and secure servers to protect your data.
            However, no system is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2><FaCookieBite /> 7. Cookies & Tracking</h2>
          <p>
            We use cookies and similar technologies to enhance your browsing experience. Cookies help us:
          </p>
          <ul>
            <li>Remember user preferences</li>
            <li>Analyze traffic and performance</li>
            <li>Provide a personalized experience</li>
          </ul>
        </section>

        <section>
          <h2>8. Third-Party Services</h2>
          <p>
            Our website may include links to third-party services. We are not responsible for the privacy
            practices of those external platforms.
          </p>
        </section>

        <section>
          <h2>9. User Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Request corrections</li>
            <li>Request deletion of your data</li>
            <li>Withdraw consent at any time</li>
          </ul>
        </section>

        <section>
          <h2><FaGlobe /> 10. International Users</h2>
          <p>
            If you are accessing our services from outside your country, your data may be transferred
            and processed in different locations with applicable laws.
          </p>
        </section>

        <section>
          <h2>11. Updates to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page
            with an updated revision date.
          </p>
        </section>

        <section>
          <h2>12. Contact Us</h2>
          <p>If you have any questions regarding this Privacy Policy:</p>

          <p className="contact-email">
            <FaEnvelope /> support@queuecounter.com
          </p>
        </section>
      </div>

    </div>
  );
};

export default PrivacyPolicy;