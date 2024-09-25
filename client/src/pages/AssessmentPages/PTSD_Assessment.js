// internationally accepted clinical version of the PTSD Checklist for DSM-5 (PCL-5) assessment, including all 20 questions and standard scoring. The marking system for PCL-5 typically uses a binary yes/no system (0–1), but since you’ve requested a linear scoring system (0–4 per item), I’ve modified it accordingly.

import React, { useState } from 'react';
import '../../Allcss/AssessmentPages/AnxietyAssessment.css';
import { version } from 'mongoose';

const pcl5Questions = [
  "In the past month, how often have you had distressing memories, thoughts, or images of the traumatic event?",
  "In the past month, how often have you avoided thoughts or feelings related to the traumatic event?",
  "In the past month, how often have you had negative thoughts about yourself or others?",
  "In the past month, how often have you felt irritable or angry?",
  "In the past month, how often have you had trouble falling or staying asleep?",
  "In the past month, how often have you been easily startled or frightened?",
  "In the past month, how often have you had trouble remembering important parts of the traumatic event?",
  "In the past month, how often have you felt emotionally numb or detached from others?",
  "In the past month, how often have you lost interest in activities you used to enjoy?",
  "In the past month, how often have you felt guilty or ashamed about the traumatic event?",
  "In the past month, how often have you felt distant or cut off from others?",
  "In the past month, how often have you had difficulty concentrating?",
  "In the past month, how often have you engaged in self-destructive behavior (e.g., substance abuse)?",
  "In the past month, how often have you felt overwhelmed by your emotions?",
  "In the past month, how often have you had physical reactions (e.g., sweating, racing heart) when reminded of the traumatic event?",
  "In the past month, how often have you avoided activities, places, or people that remind you of the traumatic event?",
  "In the past month, how often have you felt detached or estranged from others?",
  "In the past month, how often have you had difficulty experiencing positive emotions?",
  "In the past month, how often have you felt that your future will somehow be cut short?",
  "In the past month, how often have you had intrusive thoughts about the traumatic event?"
];

const answerOptions = [
  { value: "0", label: "Not at all" },
  { value: "1", label: "A little bit" },
  { value: "2", label: "Moderately" },
  { value: "3", label: "Quite a bit" },
  { value: "4", label: "Extremely" }
];

export default function PTSDAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const handleAnswer = (value) => {
    setAnswers([...answers.slice(0, currentQuestion), value]);
  };

  const handleNext = () => {
    if (currentQuestion < pcl5Questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
    const totalScore = answers.reduce((sum, answer) => sum + parseInt(answer, 10), 0);

    let severity, recommendation;

    if (totalScore <= 20) {
      severity = "Minimal Symptoms";
      recommendation = "No intervention needed.";
    } else if (totalScore <= 40) {
      severity = "Mild Symptoms";
      recommendation = "Consider consulting a healthcare provider.";
    } else if (totalScore <= 60) {
      severity = "Moderate Symptoms";
      recommendation = "Consult with a mental health professional.";
    } else if (totalScore <= 80) {
      severity = "Severe Symptoms";
      recommendation = "Seek immediate support from a mental health specialist.";
    }

    setResult({
      severity,
      score: totalScore,
      maxScore: pcl5Questions.length * 4,  // 80
      recommendation
    });
  };

  const progress = ((currentQuestion + 1) / pcl5Questions.length) * 100;

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <div className="card shadow-lg">
        <div className="card-header bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-lg">
          <h2 className="text-2xl font-bold">PTSD Checklist for DSM-5 (PCL-5)</h2>
          <p className="text-gray-100">Answer the following questions to assess your PTSD symptoms.</p>
        </div>
        <div className="card-content pt-6">
          {result ? (
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">
                Your PTSD Severity Level: {result.severity}
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
              <p className="text-sm text-gray-600 mb-4">Question {currentQuestion + 1} of {pcl5Questions.length}</p>
              <div className="mb-6">
                <label className="text-lg font-medium mb-4 block text-gray-800">
                  {pcl5Questions[currentQuestion]}
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
              {currentQuestion < pcl5Questions.length - 1 ? "Next Question" : "Submit"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
