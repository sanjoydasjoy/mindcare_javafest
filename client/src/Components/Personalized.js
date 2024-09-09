import React from 'react';

export default function BigCard({ onGetStartedClick }) {
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>Personalized Mental Health Support</h2>
      <p style={styles.text}>
        MindCare is an AI-powered platform that provides tailored guidance and resources to help you manage your mental health.
      </p>
      <div style={styles.buttonContainer}>
        <button
          style={styles.button}
          onClick={onGetStartedClick} // Trigger the scroll function when clicked
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
        >
          Get Started
        </button>
        <button
          style={styles.button}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
        >
          Learn More
        </button>
      </div>
    </div>
  );
}

// Inline styles
const styles = {
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '32px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
    width: '100vw',
    maxWidth: '100%',
    boxSizing: 'border-box',
    margin: '0',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '16px',
  },
  text: {
    fontSize: '1.125rem',
    color: '#4a5568',
    marginBottom: '24px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '8px',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    padding: '8px 16px',
    fontSize: '0.875rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    width: '120px',
  },
};
