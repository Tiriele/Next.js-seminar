import Quiz from './Quiz';
import Link from 'next/link';

interface Question {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  category: string;
  type: string;
}

// getServerSideProps
// Gets the data first before rendering the page, server-side rendering
async function getQuestions(): Promise<Question[]> {
  const res = await fetch('https://opentdb.com/api.php?amount=10', {
    // Always takes recent data, not cache
    cache: 'no-store',
  });
  const data = await res.json();
  return data.results;
}

export default async function Page() {
  const questions = await getQuestions();

  return (
      <>
      <Quiz questions={questions} />
      <div className="text-center mt-6">
        <Link href="/description" className="text-blue-600 underline hover:text-blue-800">
          About this app
        </Link>
      </div>
      </>
  );
}
