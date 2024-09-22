// Adult ADHD Self-Report Scale (ASRS-v1.1) as a React component,


import React, { useState } from 'react';
import '../../Allcss/AssessmentPages/AnxietyAssessment.css';

const asrsQuestions = [
  // Inattention (6 items)
  "How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?",
  "How often do you have difficulty organizing tasks and activities?",
  "How often do you have trouble keeping your attention on tasks or activities?",
  "How often do you avoid, dislike, or are reluctant to engage in tasks that require sustained mental effort?",
  "How often do you lose things necessary for tasks and activities?",
  "How often are you easily distracted by extraneous stimuli?",

  // Hyperactivity/Impulsivity (12 items)
  "How often do you fidget with or tap your hands or feet, or squirm in your seat?",
  "How often do you leave your seat in situations when remaining seated is expected?",
  "How often do you run or climb in situations where it is inappropriate?",
  "How often are you unable to play or engage in activities quietly?",
  "How often do you talk excessively?",
  "How often do you blurt out an answer before a question has been completed?",
  "How often do you have trouble waiting your turn?",
  "How often do you interrupt or intrude on others?",
  "How often do you finish other people's sentences?",
  "How often do you feel restless?",
  "How often do you have difficulty engaging in quiet activities?",
  "How often do you feel overwhelmed by your responsibilities?"
];

const answerOptions = [
  { value: "0", label: "Not at all" },
  { value: "1", label: "Rarely" },
  { value: "2", label: "Sometimes" },
  { value: "3", label: "Often" },
  { value: "4", label: "Very often" }
];

export default function ADHDAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const handleAnswer = (value) => {
    setAnswers([...answers.slice(0, currentQuestion), value]);
  };

  const handleNext = () => {
    if (currentQuestion < asrsQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
    const totalScore = answers.reduce((sum, answer) => sum + parseInt(answer, 10), 0);
    const inattentionScore = answers.slice(0, 6).reduce((sum, answer) => sum + parseInt(answer, 10), 0);
    const hyperImpulsivityScore = answers.slice(6).reduce((sum, answer) => sum + parseInt(answer, 10), 0);

    let severity, recommendation;

    if (totalScore <= 18) {
        severity = "Minimal likelihood of ADHD";
        recommendation = "No immediate intervention needed.";
    } else if (totalScore <= 36) {
        severity = "Mild likelihood of ADHD";
        recommendation = "Consider monitoring symptoms and consulting a healthcare provider.";
    } else if (totalScore <= 54) {
        severity = "Moderate likelihood of ADHD";
        recommendation = "Consult with a mental health professional for further evaluation.";
    } else if (totalScore <= 72) {
        severity = "High likelihood of ADHD";
        recommendation = "Seek support from a mental health specialist.";
    }

    setResult({
      severity,
      totalScore,
      inattentionScore,
      hyperImpulsivityScore,
      maxScore: asrsQuestions.length * 4, // Max possible score is 72
      recommendation
    });
  };

  const progress = ((currentQuestion + 1) / asrsQuestions.length) * 100;

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <div className="card shadow-lg">
        <div className="card-header bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-t-lg">
          <h2 className="text-2xl font-bold">Adult ADHD Self-Report Scale (ASRS-v1.1)</h2>
          <p className="text-gray-100">Answer the following questions to assess your ADHD symptoms.</p>
        </div>
        <div className="card-content pt-6">
          {result ? (
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-green-600">
                ADHD Likelihood: {result.severity}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                Total Score: {result.totalScore} / {result.maxScore}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                Inattention Score: {result.inattentionScore} / 24
              </p>
              <p className="text-sm text-gray-600 mb-2">
                Hyperactivity/Impulsivity Score: {result.hyperImpulsivityScore} / 48
              </p>
              <p className="text-sm text-gray-600 mb-2">
                Recommendation: {result.recommendation}
              </p>
              <p className="text-sm text-gray-600">
                Note: This is a screening tool, not a diagnostic instrument. Consult a professional for proper evaluation.
              </p>
            </div>
          ) : (
            <>
              <div className="progress mb-4 h-2" style={{ width: `${progress}%` }}></div>
              <p className="text-sm text-gray-600 mb-4">Question {currentQuestion + 1} of {asrsQuestions.length}</p>
              <div className="mb-6">
                <label className="text-lg font-medium mb-4 block text-gray-800">
                  {asrsQuestions[currentQuestion]}
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
              className="w-full bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
              disabled={answers[currentQuestion] === undefined}
            >
              {currentQuestion < asrsQuestions.length - 1 ? "Next Question" : "Submit"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
