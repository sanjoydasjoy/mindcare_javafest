import React from 'react';
import '../Allcss/CommunityPages/Community.css'; 
import { useNavigate } from 'react-router-dom';


export default function CommunityFeatures() {

  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate('/counsellors');
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
          <button className="view-button" onClick={handleViewClick}>
            View
          </button>
        </div>
        <div className="card-got">
          <h3 className="card-title">Chat with Experts</h3>
          <p className="card-text">
            Access expert advice and insights to help you navigate your mental health challenges with confidence.
          </p>
        </div>
      </div>
    </section>
  );
}
