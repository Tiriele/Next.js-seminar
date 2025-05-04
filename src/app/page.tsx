import Quiz from './Quiz';

interface Question {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  category: string;
  type: string;
}

async function getQuestions(): Promise<Question[]> {
  const res = await fetch('https://opentdb.com/api.php?amount=10', {
    cache: 'no-store',
  });
  const data = await res.json();
  return data.results;
}

export default async function Page() {
  const questions = await getQuestions();

  return <Quiz questions={questions} />;
}
