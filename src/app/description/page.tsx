import Link from "next/link";

export default async function Description() {
  const introText = "Welcome to the Quiz App! Have fun!";

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">About Page</h1>
      <p>{introText}</p>

      <Link href="/" className="text-blue-600 underline hover:text-blue-800">
        ← Back to quiz
      </Link>
    </div>
  );
}
