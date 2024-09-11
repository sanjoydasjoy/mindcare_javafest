import React, { useState } from 'react';
import '../../Allcss/AssessmentPages/AnxietyAssessment.css';

const questions = [
  "How often do you feel nervous, anxious, or on edge?",
  "How often do you not be able to stop or control worrying?",
  "How often do you worry too much about different things?",
  "How often do you have trouble relaxing?",
  "How often do you feel so restless that it's hard to sit still?",
  "How often do you become easily annoyed or irritable?",
  "How often do you feel afraid as if something awful might happen?",
  "How often do you have difficulty concentrating?",
  "How often do you have sleep problems (difficulty falling or staying asleep, or restless, unsatisfying sleep)?",
  "How often do you experience physical symptoms of anxiety (like rapid heartbeat, sweating, or shortness of breath)?"
];

const answerOptions = [
  { value: "0", label: "Not at all" },
  { value: "1", label: "Rarely" },
  { value: "2", label: "Sometimes" },
  { value: "3", label: "Often" },
  { value: "4", label: "Very often" }
];

export default function AnxietyAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState('');

  const handleAnswer = (value) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
    const total = answers.reduce((sum, answer) => sum + parseInt(answer, 10), 0);
    const score = total / questions.length;

    let anxietyLevel;
    if (score < 1) anxietyLevel = "Minimal anxiety";
    else if (score < 2) anxietyLevel = "Mild anxiety";
    else if (score < 3) anxietyLevel = "Moderate anxiety";
    else anxietyLevel = "Severe anxiety";

    setResult(`Your anxiety level: ${anxietyLevel} (Score: ${total}/${questions.length * 4})`);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <div className="card shadow-lg">
        <div className="card-header bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-lg">
          <h2 className="text-2xl font-bold">Anxiety Level Test</h2>
          <p className="text-gray-100">Answer the following questions to assess your anxiety level.</p>
        </div>
        <div className="card-content pt-6">
          {result ? (
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">{result}</h3>
              <p className="text-sm text-gray-600">
                Note: This is a simple screening tool and not a diagnostic instrument. 
                Please consult with a mental health professional for a proper evaluation.
              </p>
            </div>
          ) : (
            <>
              <div className="progress mb-4 h-2" style={{ width: `${progress}%` }}></div>
              <p className="text-sm text-gray-600 mb-4">Question {currentQuestion + 1} of {questions.length}</p>
              <div className="mb-6">
                <label className="text-lg font-medium mb-4 block text-gray-800">
                  {questions[currentQuestion]}
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
              disabled={!answers[currentQuestion]}
            >
              {currentQuestion < questions.length - 1 ? "Next Question" : "Submit"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
