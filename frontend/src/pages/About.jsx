import React from 'react';
import { FaBolt, FaChartLine, FaSmile } from "react-icons/fa";

const About = () => {
  return (
    <section className="section about-section" id="about">
      <div className="about-container">

        <h2>About Us</h2>

        <p className='p-txt'>
          QueueCounter is a smart queue management system designed to help
          businesses reduce waiting time, improve efficiency, and enhance
          customer satisfaction through real-time digital queue tracking.
        </p>

        <div className="about-grid">

          <div className="about-card">
            <FaBolt className="about-icon" />
            <h3>Fast Processing</h3>
            <p>Reduce long queues and speed up customer flow with smart scheduling.</p>
          </div>

          <div className="about-card">
            <FaChartLine className="about-icon" />
            <h3>Real-Time Tracking</h3>
            <p>Monitor live queue status and manage customers efficiently.</p>
          </div>

          <div className="about-card">
            <FaSmile className="about-icon" />
            <h3>Better Experience</h3>
            <p>Improve customer satisfaction with less waiting time.</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;