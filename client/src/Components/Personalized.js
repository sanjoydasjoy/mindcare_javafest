import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../Allcss/KeyFeaturePages/PersonalizedGuidance.css'; // Import the CSS file

export default function BigCard({ onGetStartedClick }) {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLearnMoreClick = () => {
    navigate('/about'); // Navigate to the /about page
  };

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
        <button
          className="big-card-button"
          onClick={handleLearnMoreClick} // Add onClick handler here
        >
          Learn More
        </button>
      </div>
    </div>
  );
}
