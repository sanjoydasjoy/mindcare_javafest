//OCD ASSESMENT

import React, { useState } from 'react';
import '../../Allcss/AssessmentPages/AnxietyAssessment.css';

const ociQuestions = [
  "I have saved up so many things that they get in the way.",
  "I check things more often than necessary.",
  "I get upset if objects are not arranged properly.",
  "I feel compelled to count while I am doing things.",
  "I find it difficult to touch an object when I know it has been touched by strangers or certain people.",
  "I find it difficult to control my own thoughts.",
  "I collect things I don't need.",
  "I repeatedly check doors, windows, drawers, etc.",
  "I get upset if others change the way I have arranged things.",
  "I feel I have to repeat certain numbers.",
  "I sometimes have to wash or clean myself simply because I feel contaminated.",
  "I am upset by unpleasant thoughts that come into my mind against my will.",
  "I avoid throwing things away because I am afraid I might need them later.",
  "I repeatedly check gas and water taps and light switches after turning them off.",
  "I need things to be arranged in a particular way.",
  "I feel that there are good and bad numbers.",
  "I wash my hands more often and longer than necessary.",
  "I frequently get nasty thoughts and have difficulty in getting rid of them."
];

const ociAnswerOptions = [
  { value: "0", label: "Not at all" },
  { value: "1", label: "A little" },
  { value: "2", label: "Moderately" },
  { value: "3", label: "A lot" },
  { value: "4", label: "Extremely" }
];

export default function OCDAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const handleAnswer = (value) => {
    setAnswers([...answers.slice(0, currentQuestion), value]);
  };

  const handleNext = () => {
    if (currentQuestion < ociQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
    const totalScore = answers.reduce((sum, answer) => sum + parseInt(answer, 10), 0);

    let ocdSeverity, recommendation;

    if (totalScore <= 15) {
        ocdSeverity = "Minimal OCD Symptoms";
        recommendation = "No further intervention needed.";
    } else if (totalScore <= 27) {
        ocdSeverity = "Mild OCD Symptoms";
        recommendation = "Consider monitoring symptoms and self-help strategies.";
    } else if (totalScore <= 41) {
        ocdSeverity = "Moderate OCD Symptoms";
        recommendation = "Consider therapy, especially cognitive-behavioral therapy (CBT).";
    } else if (totalScore <= 72) {
        ocdSeverity = "Severe OCD Symptoms";
        recommendation = "Seek professional mental health support immediately.";
    }

    setResult({
        severity: ocdSeverity,
        score: totalScore,
        maxScore: ociQuestions.length * 4,  // 72
        recommendation: recommendation
    });
};

  // const calculateResult = () => {
  //   const totalScore = answers.reduce((sum, answer) => sum + parseInt(answer, 10), 0);

  //   let ocdSeverity, recommendation;
  //   if (totalScore <= 12) {
  //     ocdSeverity = "Minimal OCD Symptoms";
  //     recommendation = "No further intervention needed.";
  //   } else if (totalScore <= 20) {
  //     ocdSeverity = "Mild OCD Symptoms";
  //     recommendation = "Consider monitoring symptoms and self-help strategies.";
  //   } else if (totalScore <= 32) {
  //     ocdSeverity = "Moderate OCD Symptoms";
  //     recommendation = "Consider therapy, especially cognitive-behavioral therapy (CBT).";
  //   } else if (totalScore > 32) {
  //     ocdSeverity = "Severe OCD Symptoms";
  //     recommendation = "Seek professional mental health support immediately.";
  //   }

  //   setResult({
  //     severity: ocdSeverity,
  //     score: totalScore,
  //     maxScore: ociQuestions.length * 4,
  //     recommendation: recommendation
  //   });
  // };

  const progress = ((currentQuestion + 1) / ociQuestions.length) * 100;

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <div className="card shadow-lg">
        <div className="card-header bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-t-lg">
          <h2 className="text-2xl font-bold">OCD Assessment (OCI-R)</h2>
          <p className="text-gray-100">Answer the following questions to assess your OCD symptoms.</p>
        </div>
        <div className="card-content pt-6">
          {result ? (
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-red-600">
                Your OCD Severity: {result.severity} 
                {/* (Score: {result.score}/{result.maxScore}) */}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                Recommendation: {result.recommendation}
              </p>
              <p className="text-sm text-gray-600">
                Note: This is a screening tool and not a diagnostic test. Please consult with a mental health professional for further evaluation.
              </p>
            </div>
          ) : (
            <>
              <div className="progress mb-4 h-2" style={{ width: `${progress}%` }}></div>
              <p className="text-sm text-gray-600 mb-4">Question {currentQuestion + 1} of {ociQuestions.length}</p>
              <div className="mb-6">
                <label className="text-lg font-medium mb-4 block text-gray-800">
                  {ociQuestions[currentQuestion]}
                </label>
                <div className="space-y-2">
                  {ociAnswerOptions.map((option) => (
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
              className="w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
              disabled={answers[currentQuestion] === undefined}
            >
              {currentQuestion < ociQuestions.length - 1 ? "Next Question" : "Submit"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
