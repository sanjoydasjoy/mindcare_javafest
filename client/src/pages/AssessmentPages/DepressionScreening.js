

import React, { useState } from 'react';
import '../../Allcss/AssessmentPages/AnxietyAssessment.css';

const questions = [
  "Little interest or pleasure in doing things?",
  "Trouble falling asleep, staying asleep, or sleeping too much?",
  "Feeling tired or having little energy?",
  "Poor appetite or overeating?",
  "Feeling bad about yourself - or that you're a failure or have let yourself or your family down?",
  "Trouble concentrating on things, such as reading the newspaper or watching television?",
  "Moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual?",
  "Thoughts that you would be better off dead, or of hurting yourself in some way?",
  "Sleep problems (difficulty falling/staying asleep, restless sleep)?",
];

const answerOptions = [
  { value: "0", label: "Not at all" },
  { value: "1", label: "Several Days" },
  { value: "2", label: "More than half the days" },
  { value: "3", label: "Nearly every day" }
];

export default function AnxietyAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const handleAnswer = (value) => {
    setAnswers([...answers.slice(0, currentQuestion), value]);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
    const totalScore = answers.reduce((sum, answer) => sum + parseInt(answer, 10), 0);

    let anxietyLevel, recommendation;
    if (totalScore <= 4) {
      anxietyLevel = "None-minimal";
      recommendation = "None";
    } else if (totalScore <= 9) {
      anxietyLevel = "Mild";
      recommendation = "Watchful waiting; repeat PHQ-9 at follow-up";
    } else if (totalScore <= 14) {
      anxietyLevel = "Moderate";
      recommendation = "Treatment plan, considering counseling, follow-up and/or pharmacotherapy";
    } else if (totalScore <= 19) {
      anxietyLevel = "Moderately Severe";
      recommendation = "Active treatment with pharmacotherapy and/or psychotherapy";
    } else {
      anxietyLevel = "Severe";
      recommendation = "Immediate initiation of pharmacotherapy and, if severe impairment or poor response to therapy, expedited referral to a mental health specialist for psychotherapy and/or collaborative management";
    }

    setResult({
      level: anxietyLevel,
      score: totalScore,
      maxScore: questions.length * 3,
      recommendation: recommendation
    });
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <div className="card shadow-lg">
        <div className="card-header bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-lg">
          <h2 className="text-2xl font-bold">Depression Test</h2>
          <p className="text-gray-100">Answer the following questions to assess your Depression level.</p>
        </div>
        <div className="card-content pt-6">
          {result ? (
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">
                Your Depression level: {result.level} 
                {/* (Score: {result.score}/{result.maxScore})*/}
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
              disabled={answers[currentQuestion] === undefined}
            >
              {currentQuestion < questions.length - 1 ? "Next Question" : "Submit"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}