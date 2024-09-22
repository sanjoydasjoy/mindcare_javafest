// For clinical use or for adhering to a standardized, research-based approach, the 7-question PDSS is better. It’s a validated tool with known reliability and efficacy, and it’s widely used in practice to measure panic disorder severity.

import React, { useState } from 'react';
import '../../Allcss/AssessmentPages/AnxietyAssessment.css';

const pdssQuestions = [
  "During the past week, how many panic attacks have you experienced?",
  "During the past week, how much distress did you experience during your panic attacks?",
  "During the past week, how much have you worried or felt anxious about when your next panic attack would occur?",
  "During the past week, how much have you avoided situations or places because of your panic attacks?",
  "During the past week, how much have you feared bodily sensations (e.g., heart racing, dizziness) related to panic attacks?",
  "During the past week, how much have your panic attacks interfered with your work or social activities?",
  "Considering all of the above, how would you rate the overall severity of your panic disorder during the past week?"
];

const answerOptions = [
  { value: "0", label: "None" },
  { value: "1", label: "Mild" },
  { value: "2", label: "Moderate" },
  { value: "3", label: "Severe" },
  { value: "4", label: "Extreme" }
];

export default function Panic_Disorder() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const handleAnswer = (value) => {
    setAnswers([...answers.slice(0, currentQuestion), value]);
  };

  const handleNext = () => {
    if (currentQuestion < pdssQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
    const totalScore = answers.reduce((sum, answer) => sum + parseInt(answer, 10), 0);

    let panicSeverity, recommendation;

    if (totalScore <= 7) {
        panicSeverity = "Minimal Severity";
        recommendation = "No intervention needed.";
    } else if (totalScore <= 14) {
        panicSeverity = "Mild Severity";
        recommendation = "Consider monitoring symptoms and consulting a healthcare provider.";
    } else if (totalScore <= 21) {
        panicSeverity = "Moderate Severity";
        recommendation = "Consult with a mental health professional for further evaluation.";
    } else if (totalScore <= 28) {
        panicSeverity = "Severe Severity";
        recommendation = "Seek immediate support from a mental health specialist.";
    }

    setResult({
        severity: panicSeverity,
        score: totalScore,
        maxScore: pdssQuestions.length * 4,  // 28
        recommendation: recommendation
    });
  };

  const progress = ((currentQuestion + 1) / pdssQuestions.length) * 100;

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <div className="card shadow-lg">
        <div className="card-header bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-lg">
          <h2 className="text-2xl font-bold">Panic Disorder Severity Scale (PDSS)</h2>
          <p className="text-gray-100">Answer the following questions to assess your panic disorder symptoms.</p>
        </div>
        <div className="card-content pt-6">
          {result ? (
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">
                Your Panic Disorder Severity Level: {result.severity} 
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                Recommendation: {result.recommendation}
              </p>
              <p className="text-sm text-gray-600">
                Note: This is a simple screening tool and not a diagnostic instrument.
                Please consult with a mental health professional for a proper evaluation.
              </p>
            </div>
          ) : (
            <>
              <div className="progress mb-4 h-2" style={{ width: `${progress}%` }}></div>
              <p className="text-sm text-gray-600 mb-4">Question {currentQuestion + 1} of {pdssQuestions.length}</p>
              <div className="mb-6">
                <label className="text-lg font-medium mb-4 block text-gray-800">
                  {pdssQuestions[currentQuestion]}
                </label>
                <div className="space-y-2">
                  {answerOptions.map((option) => (
                    <div key={option.value} className="flex items-center">
                      <input
                        type="radio"
                        name="answer"
                        value={option.value}
                        id={`q-${option.value}`}
                        checked={answers[currentQuestion] === option.value}
                        onChange={() => handleAnswer(option.value)}
                      />
                      <label htmlFor={`q-${option.value}`} className="ml-2 text-gray-700">{option.label}</label>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
        <div className="card-footer">
          {!result && (
            <button
              onClick={handleNext}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
              disabled={answers[currentQuestion] === undefined}
            >
              {currentQuestion < pdssQuestions.length - 1 ? "Next Question" : "Submit"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
