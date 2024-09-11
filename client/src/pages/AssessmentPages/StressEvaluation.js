// src/pages/StressEvaluation.js
import React, { useState } from 'react';
import '../../Allcss/AssessmentPages/StressEvaluation.css'; // Import the updated CSS file

const questions = [
  { id: 1, question: "How often do you feel overwhelmed by your daily tasks?", type: "multipleChoice", options: [ { label: "Rarely", value: 1 }, { label: "Sometimes", value: 2 }, { label: "Often", value: 3 }, { label: "Always", value: 4 } ] },
  { id: 2, question: "How do you cope when you feel overwhelmed?", type: "multipleChoice", options: [ { label: "Exercise", value: 1 }, { label: "Talk to someone", value: 2 }, { label: "Meditate", value: 3 }, { label: "Avoid the situation", value: 4 } ] },
  { id: 3, question: "Do you find yourself having trouble sleeping due to stress?", type: "multipleChoice", options: [ { label: "Never", value: 1 }, { label: "Sometimes", value: 2 }, { label: "Frequently", value: 3 }, { label: "Always", value: 4 } ] },
  { id: 4, question: "How often do you feel you lack control over your life?", type: "multipleChoice", options: [ { label: "Rarely", value: 1 }, { label: "Sometimes", value: 2 }, { label: "Often", value: 3 }, { label: "Always", value: 4 } ] },
  { id: 5, question: "How do you usually respond to stressful situations?", type: "multipleChoice", options: [ { label: "Stay calm", value: 1 }, { label: "Feel anxious", value: 2 }, { label: "Get irritated", value: 3 }, { label: "Feel defeated", value: 4 } ] },
  { id: 6, question: "Do you often experience physical symptoms (like headaches or stomach issues) related to stress?", type: "multipleChoice", options: [ { label: "Never", value: 1 }, { label: "Rarely", value: 2 }, { label: "Sometimes", value: 3 }, { label: "Often", value: 4 } ] },
  { id: 7, question: "How much time do you spend on self-care or relaxation activities?", type: "multipleChoice", options: [ { label: "Regularly", value: 1 }, { label: "Occasionally", value: 2 }, { label: "Rarely", value: 3 }, { label: "Never", value: 4 } ] },
  { id: 8, question: "How often do you feel irritable or angry due to stress?", type: "multipleChoice", options: [ { label: "Never", value: 1 }, { label: "Rarely", value: 2 }, { label: "Sometimes", value: 3 }, { label: "Often", value: 4 } ] },
  { id: 9, question: "Do you feel like you have someone to talk to about your stress?", type: "multipleChoice", options: [ { label: "Always", value: 1 }, { label: "Often", value: 2 }, { label: "Sometimes", value: 3 }, { label: "Never", value: 4 } ] },
  { id: 10, question: "Do you find it hard to focus on tasks when feeling stressed?", type: "multipleChoice", options: [ { label: "Never", value: 1 }, { label: "Rarely", value: 2 }, { label: "Sometimes", value: 3 }, { label: "Often", value: 4 } ] }
];

export default function StressEvaluation() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState({});
  const [result, setResult] = useState('');

  const handleAnswer = (value) => {
    const nextIndex = currentQuestionIndex + 1;
    setResponses({ ...responses, [questions[currentQuestionIndex].id]: value });

    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
    const totalScore = Object.values(responses).reduce((sum, val) => sum + val, 0);
    let feedback;

    if (totalScore < 10) {
      feedback = 'Low stress level. Keep maintaining your healthy habits!';
    } else if (totalScore < 20) {
      feedback = 'Moderate stress level. Consider incorporating some stress management techniques.';
    } else {
      feedback = 'High stress level. It may be helpful to seek professional support or consult with a mental health professional.';
    }

    setResult(feedback);
  };

  // Calculate progress percentage based on the current question index
  const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="stress-evaluation-container">
      <h2>Stress Evaluation</h2>
      <p>Answer the following questions to assess your stress levels.</p>

      {result ? (
        <div className="result-section grand-result">
          <h3>Assessment Result</h3>
          <div className="result-card">
            <p className="result-text">{result}</p>
            <button className="retake-button" onClick={() => window.location.reload()}>Retake Assessment</button>
          </div>
        </div>
      ) : (
        <div className="question-section">
          <p className="highlighted-question">{questions[currentQuestionIndex].question}</p>
          <div className="options-container">
            {questions[currentQuestionIndex].options.map((option) => (
              <button key={option.value} onClick={() => handleAnswer(option.value)} className="option-button">
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="progress-bar">
        <div className="progress" style={{ width: `${progressPercentage}%` }}></div>
      </div>
    </div>
  );
}
