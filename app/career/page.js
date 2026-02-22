export default function CareerPage() {
  const roles = [
    {
      title: 'Frontend Engineer',
      tag: 'React / Next.js',
      meta: 'Remote · Full‑time',
      blurb: 'Own delightful product experiences from pixel to API.',
    },
    {
      title: 'Backend Engineer',
      tag: 'Node.js / APIs',
      meta: 'Remote · Full‑time',
      blurb: 'Design resilient systems that scale with our users.',
    },
    {
      title: 'Product Designer',
      tag: 'Product / Brand',
      meta: 'Remote · Full‑time',
      blurb: 'Shape how teams experience My Next App, end to end.',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-100 via-slate-50 to-amber-100 px-4 py-12 flex justify-center">
      <section className="w-full max-w-5xl rounded-3xl bg-white/90 px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/70">
        <header className="mb-10">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-purple-700 mb-2">
            Careers
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-3">
            Build the future with My Next App
          </h1>
          <p className="max-w-xl text-sm sm:text-base leading-relaxed text-slate-600">
            We&apos;re a small, product-obsessed team shipping fast and learning
            even faster. If you care about great experiences and clean
            engineering, you&apos;ll fit right in.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-3 mb-10">
          {roles.map((role) => (
            <article
              key={role.title}
              className="rounded-2xl border border-slate-200/70 bg-gradient-to-br from-slate-50/90 to-slate-100/40 p-5"
            >
              <div className="mb-2 flex items-baseline justify-between gap-3">
                <h2 className="text-sm font-semibold text-slate-900">
                  {role.title}
                </h2>
                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-1 text-[0.65rem] font-medium text-purple-700">
                  {role.tag}
                </span>
              </div>
              <p className="mb-3 text-xs text-slate-600">{role.blurb}</p>
              <p className="text-[0.7rem] text-slate-500">{role.meta}</p>
            </article>
          ))}
        </div>

        <footer className="flex flex-col items-start justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-medium text-slate-900">
              Not seeing the perfect role?
            </p>
            <p className="text-xs text-slate-600 mt-1">
              Tell us what you&apos;d like to work on and share a link to your
              work.
            </p>
          </div>
          <a
            href="mailto:careers@example.com"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-700 to-pink-600 px-4 py-2 text-xs font-semibold text-white shadow-[0_10px_25px_rgba(219,39,119,0.35)] hover:brightness-110 transition"
          >
            Email your profile
          </a>
        </footer>
      </section>
    </main>
  );
}
