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
  const handleViewClick4 = () => {
    navigate('/social_anxiety_gauge');
  };
  const handleViewClick5 = () => {
    navigate('/panic_monitor');
  };
  const handleViewClick6 = () => {
    navigate('/adhd_clarity_check');
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
        <div className="card-got">
          <h3 className="card-title">Social Anxiety Gauge</h3>
          <p className="card-text">
          Assess your social anxiety levels and uncover personalized strategies to help you navigate social interactions with greater confidence and ease.          </p>
          <div className="card-got">
              <button className="button" onClick={handleViewClick4}>Start Assessment</button>
          </div>
        </div>
        <div className="card-got">
          <h3 className="card-title">Panic Monitor</h3>
          <p className="card-text">
          Evaluate the intensity and frequency of your panic episodes, and get personalized techniques to help you manage and reduce panic attacks effectively.          </p>
          <div className="card-got">
              <button className="button" onClick={handleViewClick5}>Start Evaluation</button>
          </div>
        </div>
        <div className="card-got">
          <h3 className="card-title">ADHD Clarity Check</h3>
          <p className="card-text">
          Gauge your attention and focus levels with this ADHD assessment, and receive tailored strategies to improve clarity, concentration, and impulse control.          </p>
          <div className="card-got">
              <button className="button" onClick={handleViewClick6}>Start Checking</button>
          </div>
        </div>
      </div>
    </section>
  );
}
