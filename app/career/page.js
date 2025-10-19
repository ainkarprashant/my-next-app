export default function CareerPage() {
  return (
    <main style={{ padding: '2rem', minHeight: '60vh', background: 'linear-gradient(120deg, #f3e8ff 0%, #fbbf24 100%)', borderRadius: '1rem', margin: '2rem auto', maxWidth: 700, boxShadow: '0 2px 16px #fbbf2422' }}>
      <h2 style={{ fontSize: '2rem', color: '#a21caf', marginBottom: '1rem' }}>Careers at My Next App</h2>
      <p style={{ fontSize: '1.1rem', color: '#312e81', marginBottom: '2rem' }}>
        Join our team and help us build the future of web applications! We are always looking for talented and passionate people.
      </p>
      <ul style={{ lineHeight: '2', fontSize: '1rem', color: '#a21caf' }}>
        <li><strong>Frontend Developer</strong> – React/Next.js, CSS, UI/UX</li>
        <li><strong>Backend Developer</strong> – Node.js, API design, Databases</li>
        <li><strong>Designer</strong> – Web & Mobile, Branding, Figma</li>
      </ul>
      <p style={{ marginTop: '2rem', color: '#a21caf' }}>
        Interested? Email us at <a href="mailto:careers@example.com" style={{ color: '#a21caf', textDecoration: 'underline' }}>careers@example.com</a>
      </p>
    </main>
  );
}
