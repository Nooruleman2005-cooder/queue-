import React from "react";
import { FaFileContract, FaUserShield, FaExclamationTriangle, FaGlobe, FaEnvelope } from "react-icons/fa";

const TermsConditions = () => {
  return (
    <div className="privacy-container">

      <div className="privacy-content">
        <h1><FaFileContract /> Terms & Conditions</h1>
        <p className="last-updated">Last Updated: January 2026</p>

        <section>
          <h2><FaUserShield /> 1. Introduction</h2>
          <p>
            Welcome to QueueCounter. These Terms & Conditions govern your use of our website and services.
            By accessing or using our platform, you agree to comply with these terms.
          </p>
        </section>

        <section>
          <h2>2. Use of Services</h2>
          <p>
            You agree to use our services only for lawful purposes and in accordance with these Terms.
            You must not misuse or attempt to disrupt our platform.
          </p>
          <ul>
            <li>No unauthorized access to systems</li>
            <li>No harmful or illegal activities</li>
            <li>No interference with service functionality</li>
          </ul>
        </section>

        <section>
          <h2>3. User Accounts</h2>
          <p>
            If you create an account, you are responsible for maintaining the confidentiality of your
            login credentials and all activities under your account.
          </p>
        </section>

        <section>
          <h2>4. Intellectual Property</h2>
          <p>
            All content, branding, and materials on this website are owned by QueueCounter and are protected
            by copyright laws. You may not reuse or reproduce content without permission.
          </p>
        </section>

        <section>
          <h2><FaExclamationTriangle /> 5. Limitation of Liability</h2>
          <p>
            We are not liable for any damages resulting from the use or inability to use our services.
            Our platform is provided "as is" without warranties of any kind.
          </p>
        </section>

        <section>
          <h2>6. Termination</h2>
          <p>
            We reserve the right to suspend or terminate access to our services at any time if users violate
            these terms.
          </p>
        </section>

        <section>
          <h2>7. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for their content
            or practices.
          </p>
        </section>

        <section>
          <h2><FaGlobe /> 8. Governing Law</h2>
          <p>
            These Terms shall be governed and interpreted in accordance with applicable laws in your region.
          </p>
        </section>

        <section>
          <h2>9. Changes to Terms</h2>
          <p>
            We may update these Terms & Conditions from time to time. Continued use of our services means
            you accept the updated terms.
          </p>
        </section>

        <section>
          <h2>10. Contact Us</h2>
          <p>If you have any questions about these Terms:</p>

          <p className="contact-email">
            <FaEnvelope /> support@queuecounter.com
          </p>
        </section>

      </div>

    </div>
  );
};

export default TermsConditions;