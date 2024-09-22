// # Autism Spectrum Quotient (AQ) Questionnaire
import React, { useState } from 'react';
import '../../Allcss/AssessmentPages/AnxietyAssessment.css';

const aqQuestions = [
  "I prefer to do things on my own rather than with others.",
  "I find it hard to judge if something is rude or polite.",
  "I enjoy social occasions.",
  "I notice details that others do not.",
  "I can easily switch from one task to another.",
  "I often get absorbed in one thing.",
  "I find it hard to make new friends.",
  "I am good at social chit-chat.",
  "I find it difficult to understand people’s feelings.",
  "I like to plan things in advance.",
  "I enjoy meeting new people.",
  "I find it easy to talk to strangers.",
  "I often notice patterns in things.",
  "I am not very good at remembering phone numbers.",
  "I find it easy to empathize with others.",
  "I prefer to read fiction rather than non-fiction.",
  "I find it hard to understand jokes.",
  "I am very good at remembering faces.",
  "I find it difficult to express my feelings.",
  "I enjoy doing things spontaneously.",
  "I find it hard to relax.",
  "I often feel overwhelmed by sensory input.",
  "I am not very good at understanding body language.",
  "I find it easy to understand abstract ideas.",
  "I often feel anxious in social situations.",
  "I prefer to stick to routines.",
  "I find it hard to concentrate on tasks.",
  "I am very sensitive to noise.",
  "I find it easy to understand complex concepts.",
  "I often feel out of place in social situations.",
  "I enjoy working with numbers.",
  "I find it hard to understand sarcasm.",
  "I prefer to work alone rather than in a team.",
  "I find it easy to see things from another person’s perspective.",
  "I often feel like I don’t fit in.",
  "I find it hard to follow conversations.",
  "I enjoy solving puzzles.",
  "I find it difficult to make eye contact.",
  "I often feel misunderstood.",
  "I find it easy to focus on details.",
  "I prefer to have a structured routine.",
  "I find it hard to adapt to changes.",
  "I enjoy learning about new topics.",
  "I find it difficult to initiate conversations.",
  "I often feel anxious about new experiences.",
  "I find it easy to remember facts.",
  "I prefer to stick to familiar places.",
  "I find it hard to understand social cues.",
  "I often feel overwhelmed by emotions.",
  "I find it easy to concentrate on tasks that interest me."
];

const answerOptions = [
  { value: "0", label: "Disagree" },
  { value: "1", label: "Agree" }
];

export default function AutismAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const handleAnswer = (value) => {
    setAnswers([...answers.slice(0, currentQuestion), value]);
  };

  const handleNext = () => {
    if (currentQuestion < aqQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
    const totalScore = answers.reduce((sum, answer) => sum + parseInt(answer, 10), 0);
    let severity;

    if (totalScore <= 25) {
      severity = "Low likelihood of autistic traits.";
    } else if (totalScore <= 32) {
      severity = "Moderate likelihood of autistic traits.";
    } else {
      severity = "High likelihood of autistic traits.";
    }

    setResult({
      severity,
      totalScore,
      maxScore: aqQuestions.length // Max possible score is 50
    });
  };

  const progress = ((currentQuestion + 1) / aqQuestions.length) * 100;

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <div className="card shadow-lg">
        <div className="card-header bg-gradient-to-r from-blue-500 to-green-600 text-white rounded-t-lg">
          <h2 className="text-2xl font-bold">Autism Spectrum Quotient (AQ)</h2>
          <p className="text-gray-100">Answer the following questions to assess your autistic traits.</p>
        </div>
        <div className="card-content pt-6">
          {result ? (
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">
                AQ Likelihood: {result.severity}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                Total Score: {result.totalScore} / {result.maxScore}
              </p>
              <p className="text-sm text-gray-600">
                Note: This is a screening tool, not a diagnostic instrument. Consult a professional for proper evaluation.
              </p>
            </div>
          ) : (
            <>
              <div className="progress mb-4 h-2" style={{ width: `${progress}%` }}></div>
              <p className="text-sm text-gray-600 mb-4">Question {currentQuestion + 1} of {aqQuestions.length}</p>
              <div className="mb-6">
                <label className="text-lg font-medium mb-4 block text-gray-800">
                  {aqQuestions[currentQuestion]}
                </label>
                <div className="space-y-2">
                  {answerOptions.map((option) => (
                    <div key={option.value} className="flex items-center">
                      <input
                        type="radio"
                        name="answer"
                        value={option.value}
                        id={`q-${currentQuestion}-${option.value}`}
                        checked={answers[currentQuestion] === option.value}
                        onChange={() => handleAnswer(option.value)}
                      />
                      <label htmlFor={`q-${currentQuestion}-${option.value}`} className="ml-2 text-gray-700">{option.label}</label>
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
              className="w-full bg-gradient-to-r from-blue-500 to-green-600 hover:from-blue-600 hover:to-green-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
              disabled={answers[currentQuestion] === undefined}
            >
              {currentQuestion < aqQuestions.length - 1 ? "Next Question" : "Submit"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
