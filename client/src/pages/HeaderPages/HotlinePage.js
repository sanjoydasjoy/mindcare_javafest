import React from 'react';
import '../../Allcss/HeaderPages/HotlinePage.css'; // Add a new CSS file for styling if needed

export default function HotlinePage() {
  return (
    <div className="hotline-page">
      <h1>Hotline Numbers</h1>
      <div className="hotline-container">
        <div className="hotline-card">
          <h2>Emergency</h2>
          <p>For any emergencies, call:</p>
          <strong>999</strong>
        </div>
        <div className="hotline-card">
          <h2>Medical Advice</h2>
          <p>Dial 16263 and get advised by a doctor about diseases for free:</p>
          <strong>16263</strong>
        </div>
      </div>
    </div>
  );
}
