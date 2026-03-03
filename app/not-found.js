import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-6">
        Oops! The page you're looking for doesn’t exist or has moved.
      </p>
      <Link href="/" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded shadow">
        Return Home
      </Link>
    </div>
  );
}
