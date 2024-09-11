import React from 'react';
import '../Allcss/AssessmentPages/Assessments.css'; 
import { useNavigate } from 'react-router-dom';


export default function MentalHealthAssessments() {

  const navigate = useNavigate();

  const handleViewClick1 = () => {
    navigate('/anxiety-assessment');
  };


  const handleViewClick2 = () => {
    navigate('/depression-screening');
  };

  const handleViewClick3 = () => {
    navigate('/stress-evaluation');
  };

  return (
    <section className="section">
      <h2 className="heading">Mental Health Assessments</h2>
      <div className="grid">
        <div className="card-got">
          <h3 className="card-title">Anxiety Assessment</h3>
          <p className="card-text">
            Take our comprehensive anxiety assessment to understand your symptoms and receive personalized recommendations.
          </p>
          <div className="card-got">
              <button className="button" onClick={handleViewClick1}>Start Assessment</button>
          </div>
        </div>
        <div className="card-got">
          <h3 className="card-title">Depression Screening</h3>
          <p className="card-text">
            Identify the signs and symptoms of depression with our screening tool and get guidance on next steps.
          </p>
          <div className="card-got">
              <button className="button" onClick={handleViewClick2}>Start Screening</button>
          </div>
        </div>
        <div className="card-got">
          <h3 className="card-title">Stress Evaluation</h3>
          <p className="card-text">
          Assess your stress levels and learn personalized strategies to manage stress more effectively and efficiently.
          </p>
          <div className="card-got">
              <button className="button" onClick={handleViewClick3}>Start Evaluation</button>
          </div>
        </div>
      </div>
    </section>
  );
}
