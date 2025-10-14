import Image from "next/image";


export default function Home() {
  return (
    <div
      className="font-sans min-h-screen p-0 m-0"
      style={{
        background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)",
        minHeight: "100vh",
      }}
    >
      <section className="flex flex-col items-center justify-center min-h-[60vh] py-16">
        <Image
          className="dark:invert mb-6"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4 text-center">
          Welcome to <span className="text-indigo-600">My Next App</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8 text-center max-w-xl">
          Build modern web apps with Next.js. Explore the sample pages using the navigation bar above.
        </p>
        <div className="flex gap-4 flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-indigo-600 text-white gap-2 hover:bg-indigo-700 font-medium text-base h-12 px-6 shadow-lg"
            href="/sample"
          >
            Visit Sample Page
          </a>
          <a
            className="rounded-full border border-solid border-indigo-200 transition-colors flex items-center justify-center hover:bg-indigo-50 font-medium text-base h-12 px-6 text-indigo-700"
            href="/about"
          >
            About Us
          </a>
        </div>
      </section>
      <main className="flex flex-col gap-8 items-center justify-center py-8">
        <ol className="font-mono list-inside list-decimal text-base text-center sm:text-left bg-white/80 rounded-lg shadow p-6">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{' '}
            <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
              app/page.js
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>
      </main>
      <footer className="flex gap-[24px] flex-wrap items-center justify-center py-8">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
