import React, { useState } from 'react';
import '../../Allcss/AssessmentPages/DepressionScreening.css'; // Import your CSS file

const questions = [
  "How would you describe your mood over the past two weeks?",
  "Have you noticed any changes in your sleep patterns? If so, please describe.",
  "How has your energy level been lately?",
  "Have you experienced any changes in your appetite or eating habits?",
  "How do you feel about yourself and your life in general?",
  "Have you had any difficulty concentrating or making decisions?",
  "Have you noticed any changes in your physical activity or the way you move?",
  "Have you had any thoughts about death or hurting yourself?",
  "How has your interest in activities or hobbies changed recently?",
  "Have you experienced any changes in your relationships or social interactions?"
];

const depressionKeywords = [
  'sad', 'depressed', 'hopeless', 'worthless', 'guilty', 'tired', 'fatigue',
  'insomnia', 'oversleep', 'appetite', 'weight', 'concentrate', 'slow', 'restless',
  'death', 'suicide', 'hurt', 'interest', 'pleasure', 'lonely', 'isolated'
];

export default function DepressionScreening() {
  const [page, setPage] = useState(1);
  const [answers, setAnswers] = useState(Array(questions.length).fill(''));
  const [result, setResult] = useState('');

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const calculateKeywordScore = () => {
    let keywordCount = 0;
    const lowercaseAnswers = answers.map(answer => answer.toLowerCase());

    depressionKeywords.forEach(keyword => {
      lowercaseAnswers.forEach(answer => {
        if (answer.includes(keyword)) {
          keywordCount++;
        }
      });
    });

    return keywordCount;
  };

  const calculateResult = () => {
    // Calculate keyword score
    const keywordScore = calculateKeywordScore();

    // Calculate numeric score
    const numericScore = answers.reduce((sum, answer) => sum + parseInt(answer, 10), 0);

    // Combine scores
    const totalScore = numericScore + keywordScore;

    let guidance;
    if (totalScore < 5) guidance = "Minimal depression symptoms. Keep monitoring and consider talking to a mental health professional if needed.";
    else if (totalScore < 10) guidance = "Mild depression symptoms. Consider speaking with a mental health professional for further evaluation.";
    else if (totalScore < 15) guidance = "Moderate depression symptoms. It’s advisable to consult with a mental health professional for a detailed assessment.";
    else guidance = "Severe depression symptoms. Please seek immediate help from a mental health professional or contact emergency services.";

    setResult(`Your depression score: ${totalScore}. ${guidance}`);
  };

  const handleNext = () => {
    setPage(2);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    calculateResult();
  };

  const renderQuestions = (start, end) => {
    return questions.slice(start, end).map((question, index) => (
      <div key={index + start} className="form-group">
        <label htmlFor={`question-${index + start}`} className="question-label">
          {question}
        </label>
        <textarea
          id={`question-${index + start}`}
          className="text-area"
          value={answers[index + start]}
          onChange={(e) => handleChange(index + start, e.target.value)}
          placeholder="Your response here..."
        />
      </div>
    ));
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h2 className="title">Depression Screening</h2>
          <p className="description">
            Identify the signs and symptoms of depression with our screening tool and get guidance on next steps.
          </p>
        </div>
        <div className="card-content">
          <div className="progress-bar">
            <div className="progress" style={{ width: `${page === 1 ? 50 : 100}%` }}></div>
          </div>
          <form onSubmit={handleSubmit}>
            {page === 1 ? renderQuestions(0, 5) : renderQuestions(5, 10)}
            <div className="navigation-buttons">
              {page === 1 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={answers.slice(0, 5).some(answer => answer.trim() === '')}
                  className="button navigation-button"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={answers.slice(5).some(answer => answer.trim() === '')}
                  className="button submit-button"
                >
                  Submit
                </button>
              )}
            </div>
          </form>
          {result && (
            <div className="result">
              <h3>Assessment Result:</h3>
              <p>{result}</p>
              <p>
                Note: This screening tool uses basic keyword analysis and is not a substitute for professional medical advice, diagnosis, or treatment.
                Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
