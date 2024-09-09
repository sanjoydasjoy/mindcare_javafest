// src/pages/MentalHealthAssessments.js
import React from 'react';
import { Link } from 'react-router-dom';
//import '../Allcss/Assessments.css'; // Import your CSS file


export default function MentalHealthAssessments() {
  return (
    <section className="section">
      <h2 className="heading">Mental Health Assessments</h2>
      <div className="grid">
        <div className="card">
          <h3 className="card-title">Anxiety Assessment</h3>
          <p className="card-text">
            Take our comprehensive anxiety assessment to understand your symptoms and receive personalized recommendations.
          </p>
          <div className="card-footer">
            <Link to="/anxiety-assessment">
              <button className="button">Start Assessment</button>
            </Link>
          </div>
        </div>
        <div className="card">
          <h3 className="card-title">Depression Screening</h3>
          <p className="card-text">
            Identify the signs and symptoms of depression with our screening tool and get guidance on next steps.
          </p>
          <div className="card-footer">
            <Link to="/depression-screening">
              <button className="button">Start Screening</button>
            </Link>
          </div>
        </div>
        <div className="card">
          <h3 className="card-title">Stress Evaluation</h3>
          <p className="card-text">
          Assess your stress levels and learn personalized strategies to manage stress more effectively and efficiently.
          </p>
          <div className="card-footer">
            <Link to="/stress-evaluation">
              <button className="button">Start Evaluation</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
