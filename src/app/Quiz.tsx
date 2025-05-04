'use client';

import { useState } from 'react';

interface Question {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  category: string;
  type: string;
}

function decodeHtmlEntity(str: string): string {
    const doc = new DOMParser().parseFromString(str, 'text/html');
    return doc.documentElement.textContent || '';
  }

export default function Quiz({ questions }: { questions: Question[] }) {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [score, setScore] = useState<number>(0);

  const handleAnswerSelection = (questionIndex: number, answer: string) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex] = answer;
    setSelectedAnswers(newSelectedAnswers);

    if (answer === questions[questionIndex].correct_answer) {
      setScore(prev => prev + 1);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-5">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">Trivia Quiz</h1>
      <ul className="space-y-6">
        {questions.map((q, index) => (
          <li key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{decodeHtmlEntity(q.question)}</h2>
            <div className="mt-4 space-x-4">
              {[...q.incorrect_answers, q.correct_answer].sort().map((answer, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswerSelection(index, answer)}
                  className={`py-2 px-4 rounded-lg transition-all duration-300 
                    ${selectedAnswers[index] === answer ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-blue-300'}`}
                >
                  {decodeHtmlEntity(answer)}
                </button>
              ))}
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-8 text-center">
        <h3 className="text-2xl font-semibold text-gray-700">Your score: {score}</h3>
      </div>
    </div>
  );
}

// Testi