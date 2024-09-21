// src/pages/CommunityFeatures.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Allcss/CommunityPages/Community.css'; 

export default function CommunityFeatures() {
  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate('/counsellor-bot'); // Update this path
  };

  return (
    <section className="section">
      <h2 className="heading">Join Our Community</h2>
      <div className="grid">
        <div className="card-got">
          <h3 className="card-title">Connect with Experts</h3>
          <p className="card-text">
            Engage with a vibrant community to share experiences and support each other on your mental health journey.
          </p>
          <button className="view-button" onClick={() => navigate('/counsellors')}>
            View
          </button>
        </div>
        <div className="card-got">
          <h3 className="card-title">Counsellor Bot</h3> {/* Update title */}
          <p className="card-text">
            Chat with our counsellor bot to get immediate assistance and guidance.
          </p>
          <button className="view-button" onClick={handleViewClick}>
            Chat Now
          </button>
        </div>
      </div>
    </section>
  );
}
