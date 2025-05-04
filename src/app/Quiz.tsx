'use client';

import { useState, useEffect } from 'react';

interface Question {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  category: string;
  type: string;
}

interface DecodedQuestion extends Question {
  decoded_question: string;
  decoded_answers: string[];
}

function decodeHtml(str: string): string {
  const txt = document.createElement('textarea');
  txt.innerHTML = str;
  return txt.value;
}

export default function Quiz({ questions }: { questions: Question[] }) {
  const [decodedQuestions, setDecodedQuestions] = useState<DecodedQuestion[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [score, setScore] = useState<number>(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const decoded = questions.map((q) => ({
      ...q,
      decoded_question: decodeHtml(q.question),
      decoded_answers: [...q.incorrect_answers, q.correct_answer].map(decodeHtml).sort(),
    }));
    setDecodedQuestions(decoded);
  }, [questions]);

  const handleAnswerSelection = (questionIndex: number, answer: string) => {
   
    if (isSubmitted) return;

    const prevAnswer = selectedAnswers[questionIndex];
    const correctAnswer = decodedQuestions[questionIndex].correct_answer;
  
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex] = answer;
    setSelectedAnswers(newSelectedAnswers);
  
    if (prevAnswer === correctAnswer && answer !== correctAnswer) {
      setScore((prev) => prev - 1);
    }

    else if (prevAnswer !== correctAnswer && answer === correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };
  

  if (decodedQuestions.length === 0) return <p>Loading...</p>;

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-5">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">Trivia Quiz</h1>
      <ul className="space-y-6">
        {decodedQuestions.map((q, index) => (
          <li key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{q.decoded_question}</h2>
            <div className="mt-4 space-x-4">
              {q.decoded_answers.map((answer, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswerSelection(index, answer)}
                  className={`py-2 px-4 rounded-lg transition-all duration-300 
                    ${selectedAnswers[index] === answer ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-blue-300'}`}
                >
                  {answer}
                </button>
              ))}
            </div>
          </li>
        ))}
      </ul>
      {isSubmitted && (
        <div className="mt-8 text-center">
        <h3 className="text-2xl font-semibold text-gray-700">Score: {score}</h3>
        </div>
    )}
      {!isSubmitted && (
  <div className="text-center mt-6">
    <button
      onClick={() => setIsSubmitted(true)}
      className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
    >
      Check answers
    </button>
  </div>
)}
{isSubmitted && (
  <div className="text-center mt-6">
    <button
      onClick={() => {
        setIsSubmitted(false);
        setScore(0);
        setSelectedAnswers([]);
      }}
      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
    >
      Try again
    </button>
  </div>
)}

    </div>
  );
}
