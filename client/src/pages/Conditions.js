// src/pages/Conditions.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Allcss/Conditions.css'; // Import the updated CSS for styling

export default function Conditions() {
  const conditions = [
    {
      name: 'Anxiety',
      summary: 'A feeling of worry, nervousness, or unease.',
      link: '/conditions/anxiety',
    },
    {
      name: 'Depression',
      summary: 'A mood disorder causing persistent feelings of sadness.',
      link: '/conditions/depression',
    },
    {
      name: 'Bipolar Disorder',
      summary: 'A disorder associated with episodes of mood swings.',
      link: '/conditions/bipolar-disorder',
    },
    {
      name: 'Obsessive-Compulsive Disorder (OCD)',
      summary: 'A disorder characterized by unwanted, recurring thoughts and behaviors.',
      link: '/conditions/ocd',
    },
    {
      name: 'Post-Traumatic Stress Disorder (PTSD)',
      summary: 'A disorder triggered by a traumatic event.',
      link: '/conditions/ptsd',
    },
    {
      name: 'Eating Disorders',
      summary: 'Disorders characterized by abnormal eating habits and concerns about body weight.',
      link: '/conditions/eating-disorders',
    },
    {
      name: 'Attention-Deficit/Hyperactivity Disorder (ADHD)',
      summary: 'A chronic condition including attention difficulty, hyperactivity, and impulsiveness.',
      link: '/conditions/adhd',
    },
    {
      name: 'Schizophrenia',
      summary: 'A disorder affecting a person\'s ability to think, feel, and behave clearly.',
      link: '/conditions/schizophrenia',
    },
  ];

  return (
    <div className="conditions">
      <h2>Conditions</h2>
      <p>
        Learn more about different mental health conditions, their symptoms, causes, and treatments.
      </p>

      <div className="conditions-list">
        {conditions.map((condition) => (
          <div key={condition.name} className="condition-card">
            <h3>{condition.name}</h3>
            <p>{condition.summary}</p>
            <Link to={condition.link} className="learn-more-link">
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
