import React, { useState } from 'react';
import '../../Allcss/KeyFeaturePages/PersonalizedGuidance.css';

export default function PersonalizedGuidance() {
  const [mood, setMood] = useState('');
  const [goal, setGoal] = useState('');
  const [advice, setAdvice] = useState('');

  const handleSubmit = () => {
    // Basic recommendation logic based on user input
    let recommendations = '';

    if (mood === 'stressed') {
      recommendations += 'Try practicing deep breathing exercises or meditation. ';
    } else if (mood === 'anxious') {
      recommendations += 'Consider engaging in regular physical activity and mindfulness. ';
    }

    if (goal === 'improve sleep') {
      recommendations += 'Establish a regular sleep routine and limit screen time before bed. ';
    } else if (goal === 'boost mood') {
      recommendations += 'Engage in activities you enjoy and connect with loved ones. ';
    }

    setAdvice(recommendations || 'Based on your input, here are some general tips: Stay active, eat well, and maintain a balanced lifestyle.');
  };

  return (
    <section className="guidance-section">
      <h2 className="heading">Personalized Guidance</h2>
      <div className="guidance-form">
        <label>
          How are you feeling today?
          <select value={mood} onChange={(e) => setMood(e.target.value)} className="input-select">
            <option value="">Select mood</option>
            <option value="stressed">Stressed</option>
            <option value="anxious">Anxious</option>
            <option value="happy">Happy</option>
            <option value="neutral">Neutral</option>
          </select>
        </label>
        <label>
          What is your main goal right now?
          <input
            type="text"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder="e.g., Improve sleep, boost mood"
            className="input-field"
          />
        </label>
        <button onClick={handleSubmit} className="button">Get Guidance</button>
      </div>
      {advice && (
        <div className="guidance-result">
          <h3>Personalized Advice:</h3>
          <p>{advice}</p>
        </div>
      )}
    </section>
  );
}
