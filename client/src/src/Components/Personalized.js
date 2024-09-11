import React from 'react';
import '../Allcss/KeyFeaturePages/PersonalizedGuidance.css'; // Import the CSS file

export default function BigCard({ onGetStartedClick }) {
  return (
    <div className="big-card">
      <h2 className="big-card-title">Personalized Mental Health Support</h2>
      <p className="big-card-text">
        MindCare is an AI-powered platform that provides tailored guidance and resources to help you manage your mental health.
      </p>
      <div className="big-card-button-container">
        <button
          className="big-card-button"
          onClick={onGetStartedClick}
        >
          Get Started
        </button>
        <button className="big-card-button">
          Learn More
        </button>
      </div>
    </div>
  );
}
