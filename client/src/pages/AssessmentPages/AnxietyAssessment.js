import React, { useState } from 'react';
import '../../Allcss/AssessmentPages/AnxietyAssessment.css';

const gad7Questions = [
  "Feeling nervous, anxious or on edge?",
  "Not being able to stop or control worrying?",
  "Worrying too much about different things?",
  "Trouble relaxing?",
  "Being so restless that it is hard to sit still?",
  "Becoming easily annoyed or irritable?",
  "Feeling afraid as if something awful might happen?"
];

const gad7AnswerOptions = [
  { value: "0", label: "Not at all" },
  { value: "1", label: "Several days" },
  { value: "2", label: "More than half the days" },
  { value: "3", label: "Nearly every day" }
];

export default function GAD7Assessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const handleAnswer = (value) => {
    setAnswers([...answers.slice(0, currentQuestion), value]);
  };

  const handleNext = () => {
    if (currentQuestion < gad7Questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
    const totalScore = answers.reduce((sum, answer) => sum + parseInt(answer, 10), 0);

    let anxietyLevel, recommendation;
    if (totalScore <= 4) {
      anxietyLevel = "Minimal Anxiety";
      recommendation = "None needed";
    } else if (totalScore <= 9) {
      anxietyLevel = "Mild Anxiety";
      recommendation = "Consider repeating GAD-7 or monitoring symptoms";
    } else if (totalScore <= 14) {
      anxietyLevel = "Moderate Anxiety";
      recommendation = "Treatment plan including therapy or medication";
    } else {
      anxietyLevel = "Severe Anxiety";
      recommendation = "Immediate attention with therapy and possible medication";
    }

    setResult({
      level: anxietyLevel,
      score: totalScore,
      maxScore: gad7Questions.length * 3,
      recommendation: recommendation
    });
  };

  const progress = ((currentQuestion + 1) / gad7Questions.length) * 100;

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <div className="card shadow-lg">
        <div className="card-header bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-t-lg">
          <h2 className="text-2xl font-bold">Generalized Anxiety Disorder (GAD-7)</h2>
          <p className="text-gray-100">Answer the following questions to assess your anxiety level.</p>
        </div>
        <div className="card-content pt-6">
          {result ? (
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-green-600">
                Your Anxiety level: {result.level} 
                {/* (Score: {result.score}/{result.maxScore}) */}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                Recommendation: {result.recommendation}
              </p>
              <p className="text-sm text-gray-600">
                Note: This is a screening tool, not a diagnostic instrument. Please consult with a healthcare provider for proper evaluation.
              </p>
            </div>
          ) : (
            <>
              <div className="progress mb-4 h-2" style={{ width: `${progress}%` }}></div>
              <p className="text-sm text-gray-600 mb-4">Question {currentQuestion + 1} of {gad7Questions.length}</p>
              <div className="mb-6">
                <label className="text-lg font-medium mb-4 block text-gray-800">
                  {gad7Questions[currentQuestion]}
                </label>
                <div className="space-y-2">
                  {gad7AnswerOptions.map((option) => (
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
              {currentQuestion < gad7Questions.length - 1 ? "Next Question" : "Submit"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
