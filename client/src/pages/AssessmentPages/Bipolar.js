// Here’s a complete version of the HCL-32 (Hypomania Checklist-32) assessment, including all 32 questions and standard scoring. The marking system for HCL-32 typically uses a binary yes/no system (0–1), but since you’ve requested a linear scoring system (0–3 per item), I’ve modified it accordingly.
import React, { useState } from 'react';
import '../../Allcss/AssessmentPages/AnxietyAssessment.css';

const hclQuestions = [
  "Do you feel more energetic and more active than usual?",
  "Do you feel more self-confident than usual?",
  "Are you more talkative than usual or do you feel you need to keep talking?",
  "Do your thoughts race?",
  "Do you feel less need for sleep than usual?",
  "Are you more sociable (wanting to meet people) than usual?",
  "Do you often engage in new activities or have many ideas?",
  "Do you tend to act on impulse (doing things without thinking them through)?",
  "Do you spend more money than usual or buy things you don’t need?",
  "Are you physically more active (e.g., sports, hobbies) than usual?",
  "Do you tend to take more risks than usual?",
  "Do you feel more flirtatious, or are you more sexually active than usual?",
  "Do you feel more easily distracted than usual?",
  "Do you feel more irritable or impatient than usual?",
  "Do you feel more easily frustrated or annoyed than usual?",
  "Do you feel your mood changes more quickly than usual?",
  "Do you feel more sensitive than usual?",
  "Do you feel more creative or have more ideas than usual?",
  "Do you feel you are more goal-oriented than usual?",
  "Do you feel you are achieving more than usual?",
  "Do you feel that you are more productive than usual?",
  "Do you feel more organized or in control than usual?",
  "Do you feel more focused or concentrated than usual?",
  "Do you feel more confident in your decision-making?",
  "Do you feel more in control of your thoughts and actions than usual?",
  "Do you feel more able to handle stress than usual?",
  "Do you feel that you are thinking more clearly or more sharply than usual?",
  "Do you feel more optimistic or positive than usual?",
  "Do you feel more outgoing or assertive than usual?",
  "Do you feel more physically attractive than usual?",
  "Do you feel that you are accomplishing more in life than usual?",
  "Do you feel that you are enjoying life more than usual?"
];

const answerOptions = [
  { value: "0", label: "Not at all" },
  { value: "1", label: "Sometimes" },
  { value: "2", label: "Often" },
  { value: "3", label: "Almost Always" }
];

export default function BipolarAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const handleAnswer = (value) => {
    setAnswers([...answers.slice(0, currentQuestion), value]);
  };

  const handleNext = () => {
    if (currentQuestion < hclQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
    const totalScore = answers.reduce((sum, answer) => sum + parseInt(answer, 10), 0);

    let bipolarSeverity, recommendation;

    if (totalScore <= 15) {
        bipolarSeverity = "Minimal Bipolar Symptoms";
        recommendation = "No intervention needed.";
    } else if (totalScore <= 40) {
        bipolarSeverity = "Mild Bipolar Symptoms";
        recommendation = "Consider monitoring symptoms and consulting a healthcare provider.";
    } else if (totalScore <= 60) {
        bipolarSeverity = "Moderate Bipolar Symptoms";
        recommendation = "Consult with a mental health professional for further evaluation.";
    } else if (totalScore <= 96) {
        bipolarSeverity = "Severe Bipolar Symptoms";
        recommendation = "Seek immediate support from a mental health specialist.";
    }

    setResult({
        severity: bipolarSeverity,
        score: totalScore,
        maxScore: hclQuestions.length * 3,  // 96
        recommendation: recommendation
    });
  };

  const progress = ((currentQuestion + 1) / hclQuestions.length) * 100;

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <div className="card shadow-lg">
        <div className="card-header bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-lg">
          <h2 className="text-2xl font-bold">Bipolar Disorder (HCL-32) Test</h2>
          <p className="text-gray-100">Answer the following questions to assess potential bipolar symptoms.</p>
        </div>
        <div className="card-content pt-6">
          {result ? (
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">
                Your Bipolar severity level: {result.severity} 
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
              <p className="text-sm text-gray-600 mb-4">Question {currentQuestion + 1} of {hclQuestions.length}</p>
              <div className="mb-6">
                <label className="text-lg font-medium mb-4 block text-gray-800">
                  {hclQuestions[currentQuestion]}
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
              {currentQuestion < hclQuestions.length - 1 ? "Next Question" : "Submit"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
