import React from 'react';
import { Link } from 'react-router-dom';
import { FaSmile, FaRunning, FaHandsHelping } from 'react-icons/fa'; // Import some icons from React Icons
import '../Allcss/KeyFeaturePages/KeyFeatures.css'; 

export default function KeyFeatures() {
  return (
    <section className="section">
      <h2 className="heading">Key Features</h2>
      <div className="grid">
        <div className="card-got">
          <h3 className="card-title">Mood Tracking</h3>
          <p className="card-text">
            Monitor your emotional state over time and identify patterns to better understand your mental health.
          </p>
          {/* Icon container */}
          <Link to="/mood-tracking" className="icon-container">
            <FaSmile className="icon" />
          </Link>
        </div>
        
        <div className="card-got">
          <h3 className="card-title">Activity Logging</h3>
          <p className="card-text">
            Track your daily activities, sleep, and exercise to understand how they impact your well-being.
          </p>
          {/* Icon container */}
          <Link to="/activity-logging" className="icon-container">
            <FaRunning className="icon" />
          </Link>
        </div>
        
        <div className="card-got">
          <h3 className="card-title">Personalized Guidance</h3>
          <p className="card-text">
            Receive tailored advice and recommendations based on your unique situation and needs.
          </p>
          {/* Icon container */}
          <Link to="/personalized-guidance" className="icon-container">
            <FaHandsHelping className="icon" />
          </Link>
        </div>
      </div>
    </section>
  );
}
